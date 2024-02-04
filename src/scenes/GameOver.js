class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");
    }

    create() {
        // Set the background color
        this.cameras.main.setBackgroundColor('#000000'); // Set to black for example

        // Display "Game Over" text
        let gameOverTextConfig = {
            fontFamily: 'Arial',
            fontSize: '72px',
            color: '#FF0000',  // Red color
            align: 'center',
            padding: {
                top: 10,
                bottom: 10,
            },
        };
        this.add.text(this.scale.width / 2, this.scale.height / 2, 'Game Over', gameOverTextConfig)
            .setOrigin(0.5)
            .setDepth(1);

        // Add input event to restart the game on spacebar press
        this.input.keyboard.on('keydown-SPACE', this.restartGame, this);
    }

    restartGame() {
        // Restart the menu scene
        this.scene.start('menuScene');
    }
}
