# MS2 Memory Card Game

A responsive memory matching game built with vanilla HTML, CSS, and JavaScript. Players flip cards to find matching pairs in this educational and entertaining browser-based game.

![Memory Card Game Screenshot] (assets/images/Homescreen_shot.png)

[Live Demo](https://your-username.github.io/memory-card-game/)

## Table of Contents

- [User Experience (UX)](#user-experience-ux)
  - [User Stories](#user-stories)
  - [Design](#design)
  - [Wireframes](#wireframes)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  - [Manual Testing](#manual-testing)
  - [Browser Compatibility](#browser-compatibility)
  - [Responsiveness](#responsiveness)
  - [Code Validation](#code-validation)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgments](#acknowledgments)

## User Experience (UX)

### User Stories

#### First Time Visitor Goals
- As a first-time visitor, I want to understand the game rules immediately
- As a first-time visitor, I want to start playing without complex setup
- As a first-time visitor, I want a visually appealing and intuitive interface

#### Returning Visitor Goals
- As a returning visitor, I want to challenge myself with quick games
- As a returning visitor, I want to track my performance with move counting
- As a returning visitor, I want consistent gameplay experience

#### Frequent User Goals
- As a frequent user, I want smooth and responsive gameplay
- As a frequent user, I want the game to work on different devices
- As a frequent user, I want engaging visual feedback

### Design

#### Colour Scheme
- Primary Green: `#4CAF50` - Used for card backgrounds and positive actions
- Light Blue: `#008CBA` - Used for buttons and interactive elements
- Neutral Grey: `#f0f0f0` - Used for background and subtle elements
- White: `#FFFFFF` - Used for flipped cards and text areas

#### Typography
- Primary Font: Arial, sans-serif - Chosen for excellent readability across all devices
- Fallbacks: System fonts for maximum compatibility

#### Imagery
- Emoji symbols (🎯, 📚, 🎨) provide universal visual language
- Clean, minimalist design focuses attention on gameplay
- Consistent visual hierarchy guides user interaction

### Wireframes

The game layout was designed with mobile-first approach:
- Header with title and statistics
- Central game grid (3x2 for easy mode)
- Action buttons below the grid
- Status messages at the bottom


#### Game Board
- **3x2 Grid Layout**: Optimized for quick games and learning
- **Responsive Design**: Adapts to different screen sizes
- **Visual Feedback**: Clear states for hidden, flipped, and matched cards

#### Card Interaction
- **Click to Flip**: Intuitive card interaction
- **Prevent Invalid Moves**: Logic prevents flipping matched or already-flipped cards
- **Timing Control**: 1-second delay allows players to memorize card positions

#### Game Statistics
- **Move Counter**: Tracks number of attempts for performance measurement
- **Match Counter**: Shows progress toward game completion
- **Real-time Updates**: Statistics update immediately after each move

#### User Feedback
- **Dynamic Messages**: Contextual feedback for all game events
- **Win Condition**: Clear victory message with final statistics
- **Visual States**: Distinct styling for different card states

#### Game Controls
- **New Game Button**: Instant game reset with shuffled card positions
- **Automatic Shuffle**: Fisher-Yates algorithm ensures random card placement

### Future Features

#### Planned Enhancements
- **Multiple Difficulty Levels**: 4x4 and 6x6 grid options
- **Timer Functionality**: Challenge mode with time limits
- **Score Persistence**: Local storage for best times and scores
- **Sound Effects**: Audio feedback for matches and game events
- **Animation Improvements**: Smooth card flip animations
- **Accessibility**: Enhanced keyboard navigation and screen reader support

## Technologies Used

### Languages
- **HTML5**: Semantic markup for game structure
- **CSS**: Styling, layout, and responsive design
- **JavaScript**: Game logic, DOM manipulation, and user interaction

### Libraries and Frameworks
- No external libraries used

### Tools and Programs
- **Git**: Version control system
- **GitHub**: Code repository and deployment platform
- **VS Code**: Development environment
- **Chrome DevTools**: Testing and debugging

## Testing

### Manual Testing

#### Game Functionality Testing

| Test Case | Expected Result | Actual Result | Status |
|-----------|----------------|---------------|---------|
| Click New Game | Cards shuffle and reset | Cards shuffle correctly | ✅ Pass |
| Click card to flip | Card reveals symbol | Symbol displays correctly | ✅ Pass |
| Match two cards | Cards stay revealed, counter updates | Matching works correctly | ✅ Pass |
| Non-matching cards | Cards flip back after delay | Cards hide after 1 second | ✅ Pass |
| Complete game | Win message displays | Victory message shows | ✅ Pass |
| Move counter | Increments on each pair attempt | Counter updates accurately | ✅ Pass |

#### User Interface Testing

| Element | Test | Result | Status |
|---------|------|--------|---------|
| Cards | Hover effect on desktop | Color change visible | ✅ Pass |
| Buttons | Click response | Immediate visual feedback | ✅ Pass |
| Statistics | Real-time updates | Updates after each move | ✅ Pass |
| Messages | Dynamic content | Changes based on game state | ✅ Pass |

### Browser Compatibility

The game has been tested on the following browsers:

- **Chrome**: Full functionality confirmed
- **Firefox**: All features working correctly
- **Safari**: Complete compatibility verified
- **Edge**: Full feature support confirmed

### Responsiveness

Responsive design tested on multiple devices:

- **Mobile Phones** (320px - 480px): Cards scale appropriately
- **Tablets** (768px - 1024px): Optimal layout maintained
- **Desktop** (1024px+): Full feature accessibility

### Code Validation

#### HTML Validation
- **W3C HTML Validator**: No errors found
- **Semantic Structure**: Proper heading hierarchy maintained
- **Accessibility**: ARIA labels and semantic elements used

#### CSS Validation
- **W3C CSS Validator**: No errors found
- **Cross-browser Compatibility**: Vendor prefixes applied where needed
- **Responsive Design**: Media queries properly implemented

#### JavaScript Validation
- **JSHint**: No significant errors found 
- **ES6 Features**: Modern JavaScript syntax validated
- **Function Documentation**: Comprehensive JSDoc comments added

## Deployment

### GitHub Pages Deployment

1. Navigate to the GitHub repository
2. Click on the Settings tab
3. Scroll down to the Pages section
4. Select "Deploy from a branch" as the source
5. Choose the "main" branch and "/ (root)" folder
6. Click Save
7. The site will be available at `https://github.com/Davidleyden1/MS2`

### Local Development

#### Requirements
- Modern web browser
- Text editor or IDE
- Local web server

#### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/memory-card-game.git
   cd memory-card-game
   ```

2. **Open the project**
   - Option 1: Open `index.html` directly in a web browser
   - Option 2: Use a local server for better development experience

3. **Using Live Server (VS Code Extension)**
   ```bash
   # Install Live Server extension
   # Right-click on index.html
   # Select "Open with Live Server"
   ```

#### File Structure
```
memory-card-game/
├── index.html          # Main game page
├── style.css           # Styling and layout
├── script.js           # Game logic and interaction
├── README.md           # Project documentation
```

## Credits

### Code
- **Fisher-Yates Shuffle Algorithm**: Implementation based on modern JavaScript best practices
- **CSS Grid Layout**: Responsive design patterns from CSS Grid specification
- **DOM Manipulation**: Vanilla JavaScript techniques for modern browser compatibility

### Content
- **Game Concept**: Classic memory card game adapted for web browsers
- **Emoji Symbols**: Unicode standard emoji characters for universal compatibility

### Educational Resources
- **Mozilla Developer Network (MDN)**: JavaScript and CSS reference documentation
- **W3Schools**: HTML and CSS tutorials and examples
- **Code Institute Course Materials**: Software development best practices

## Acknowledgments

- **Code Institute**: For comprehensive web development curriculum and project guidance
- **Mentor Support**: Technical guidance and code review feedback
- **Peer Community**: Fellow students for testing and improvement suggestions
- **Web Accessibility Initiative**: Guidelines for inclusive design implementation
- **Udemy**: The Complete JavaScript Course 2025: From Zero to Expert.
---
