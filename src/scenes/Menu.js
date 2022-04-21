class Menu extends Phaser.Scene{
  constructor() {
      super("menuScene");
  }
  preload() {
      // load audio
      this.load.audio('sfx_select', './assets/assets_blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/assets_explosion38.wav');
      this.load.audio('sfx_rocket', './assets/assets_rocket_shot.wav');
  }

  create() {
      // display menu
      let menuConfig = {
          fontFamily: 'Cambria',
          fontSize: '28px',
          backgroundColor: '#f4cccc',
          color: '#b47674',
          align: 'center',
          padding: {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 0
      }

              // show menu text
              this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'CAT COLONY', menuConfig).setOrigin(0.5);
              this.add.text(game.config.width/2, game.config.height/2, 'Use ← → arrows to move \n& (F) to throw treats', menuConfig).setOrigin(0.5);
              menuConfig.backgroundColor = '#d5848b';
              menuConfig.color = '#FFF';
              this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

              // define keys
              keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
              keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }
  
  update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 6,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
    }
}