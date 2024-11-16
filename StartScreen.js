class StartScreen extends Phaser.Scene {

	constructor() {
		super({ key: 'StartScreen' })
	}

	create() {
		var welcomeText = this.add.text( 100, 100, 'Welcome. Click to Begin.', {fill: 'white', fontSize: '50px'}).setAlign('center');
		this.input.on('pointerdown', () => {
			this.scene.stop('StartScreen')
			this.scene.start('Level1')
		})
	}
}

export default StartScreen;
