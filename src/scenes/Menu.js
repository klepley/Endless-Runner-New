class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
        this.musicPlaying = false;
    }

preload() {
    this.load.image('ponyoLogo', './assets/images/ponyoLogo.png')
    this.load.audio('music', './assets/sounds/stressgame.mp3')
    this.load.audio('start', './assets/sounds/select.wav')

}

    create() {
        let menuConfig = {
            fontFamily: 'Helvetica',
            fontSize: '50px',
            backgroundColor: '#008080',
            color: '#FFB6C1',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // Add start sound
        let startSound = this.sound.add('start', { volume: 1 });
    
        // Add the PonyoLogo image and scale it
        let ponyoLogo = this.add.image(game.config.width / 2, 290, 'ponyoLogo').setOrigin(0.5, 1);
        ponyoLogo.setScale(0.8);  // Adjust the scale factor as needed
    
        // Add the text elements
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, 'NO, POON!', menuConfig).setOrigin(0.5, 0.5);
        this.add.text(game.config.width / 2, game.config.height - 250, 'Press the SpaceBar to Start', menuConfig).setOrigin(0.5, 0.5);
        this.add.text(game.config.width / 2, game.config.height -100, 'Credits:\nSound effects and scene assets by Kaylie Lepley (ft. Paris Lepley)\nPlay music by:https://pixabay.com/sound-effects/rekintudu-27867/\nPoon png by DarkCael on Reddit and modfiied by Kaylie Lepley').setOrigin(0.5, 0.5);
        menuConfig.backgroundColor = '#FFB6C1';
        menuConfig.color = '#008080';

        // Set up keyboard input for space bar
        this.input.keyboard.on('keydown-SPACE', function () {
            // Transition to the next scene
            startSound.play()
            this.scene.start('LoreScene'); // Replace 'NextScene' with the key of the scene you want to transition to
        }, this); 
        
        // Check if music is not already playing, then start it
        if (!this.musicPlaying) {
            let music = this.sound.add('music', { loop: true, volume: 0.25 });
            music.play();
            this.musicPlaying = true;
        }
    }

    update() {

    } 
}