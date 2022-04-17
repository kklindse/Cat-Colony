let config = {
    type: Phaser.AUTO,
    width: 640,
    height:480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// Modifications to Rocket Patrol:
// Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
// Create a new animated sprite for the Spaceship enemies (10)
// Display the time remaining (in seconds) on the screen (10)
// Create a new title screen (e.g., new artwork, typography, layout) (10)
// Create a new scrolling tile sprite for the background (5)
// Track a high score that persists across scenes and display it in the UI (5)