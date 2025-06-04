"use strict";


//Array to store all card objets in the game
let cards = [];

// Array to store currently flipped cards
let flippedCards = [];

// Counter for number of total number of moves made
let moves = 0;

// counter for number of successful matches
let matches = 0;

// Simple symbols for the game
const symbols = ['🎯', '📚', '🎨'];

/**
 * Starts the memory game by initialising the board and resetting the game state.
 * note this is called from HTML file
 */
function startGame() {
    // Reset game
    cards = [];
    flippedCards = [];
    moves = 0;
    matches = 0;
    
    // Create pairs of cards
    let gameSymbols = [...symbols, ...symbols];
    
    // Shuffle cards using Fisher-yates algorithm
    for (let i = gameSymbols.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [gameSymbols[i], gameSymbols[j]] = [gameSymbols[j], gameSymbols[i]];
    }
    
    // Create card objects with properties for game state tracking
    cards = gameSymbols.map((symbol, index) => ({
        id: index,
        symbol: symbol,
        flipped: false,
        matched: false
    }));
    
    /** Initialise game display */
    renderBoard();
    updateStats();
    document.getElementById('message').textContent = 'Find all 3 pairs!';
}
/** 
 * Renders the game board, updates DOM, clears existing Board 
 * */
function renderBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = document.createElement('button');
        cardElement.className = 'card';
        cardElement.onclick = () => flipCard(card.id);
        
        if (card.flipped || card.matched) {
            cardElement.textContent = card.symbol;
            cardElement.className += ' flipped';
        } else {
            cardElement.textContent = '?';
        }
        
        /** disables interaction with matched cards */
        if (card.matched) {
            cardElement.className += ' matched';
            cardElement.onclick = null;
        }
        
        board.appendChild(cardElement);
    });
}
/** 
 * Handles the flipped card logic, validates if a card can be flipped,
 * prevents flipping of already flipped/matched cards 
 * */
function flipCard(cardId) {
    const card = cards[cardId];
    
    // Don't flip if already flipped or matched
    if (card.flipped || card.matched) return;
    
    // Don't flip if two cards already flipped
    if (flippedCards.length >= 2) return;
    
    // Flip the card
    card.flipped = true;
    flippedCards.push(card);
    renderBoard();
    
    // Check for match if two cards are flipped
    if (flippedCards.length === 2) {
        moves++;
        updateStats();
        
        setTimeout(() => {
            checkMatch();
        }, 1000);
    }
}
/** 
 * Compares two flipped cards to determine if they match, 
 * updates game state based on match result and provides feedback 
 * */
function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.symbol === card2.symbol) {
        // Handles successful match
        card1.matched = true;
        card2.matched = true;
        matches++;
        document.getElementById('message').textContent = `Great! You found ${card1.symbol}!`;
        
        // Check if game is complete
        if (matches === 3) {
            document.getElementById('message').textContent = `You won in ${moves} moves!`;
        }
    } else {
        // No match
        card1.flipped = false;
        card2.flipped = false;
        document.getElementById('message').textContent = 'Not a match. Try again!';
    }
    
    flippedCards = [];
    renderBoard();
    updateStats();
}
/**
 * Updates tje game statisitics display in the DOM, shows current 
 * move count and number of matches 
 * */
function updateStats() {
    document.getElementById('moves').textContent = moves;
    document.getElementById('matches').textContent = matches;
}
 