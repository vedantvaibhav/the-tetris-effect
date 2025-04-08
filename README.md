# The Tetris Effect

A modern implementation of the classic Tetris game with a beautiful UI and real-time leaderboard.

## Features

- Classic Tetris gameplay
- Responsive design for both desktop and mobile
- Real-time leaderboard using Firebase
- Personal best score tracking
- Touch controls for mobile devices
- Beautiful retro-inspired UI

## Controls

- Desktop:
  - Arrow keys to move and rotate
  - P to pause
  - Enter to start

- Mobile:
  - Swipe left/right to move
  - Swipe down to drop faster
  - Tap to rotate
  - Tap Play/Pause button to control game state

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Firebase Realtime Database

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tetris-game.git
```

2. Open `index.html` in your browser to play the game.

## Firebase Setup

The game uses Firebase Realtime Database for the leaderboard. To set up your own Firebase instance:

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Create a Realtime Database
3. Update the Firebase configuration in both `index.html` and `leaderboard.html` with your database URL
4. Set up appropriate security rules in Firebase Console

## License

MIT License - feel free to use this code for your own projects! 