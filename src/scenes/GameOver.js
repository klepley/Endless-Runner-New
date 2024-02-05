class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");
    }

    create() {
        // Set the background color
        this.cameras.main.setBackgroundColor('#000000'); // Set to black for example
    
        // Display "Game Over" text
        let gameOverTextConfig = {
            fontFamily: 'Helveta',
            fontSize: '72px',
            color: '#FF0000',  // Red color
            align: 'center',
            padding: {
                top: 10,
                bottom: 10,
            },
        };
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 50, 'You Were Caught!', gameOverTextConfig)
            .setOrigin(0.5)
            .setDepth(1);
    
        // Display "Press SpaceBar to Play again!" text
        let playAgainTextConfig = {
            fontFamily: 'Helvetica',
            fontSize: '32px',
            color: '#FFFFFF',  // White color
            align: 'center',
            padding: {
                top: 10,
                bottom: 10,
            },
        };
        this.add.text(this.scale.width / 2, this.scale.height / 2 + 50, 'Press SpaceBar to Play again!', playAgainTextConfig)
            .setOrigin(0.5)
            .setDepth(1);

        let startSound = this.sound.add('start', { volume: 1 });

        this.input.keyboard.on('keydown-SPACE', function () {
            // Transition to the next scene
            startSound.play()
            this.scene.start('menuScene'); // Replace 'NextScene' with the key of the scene you want to transition to
        }, this); 
    }
    
}
