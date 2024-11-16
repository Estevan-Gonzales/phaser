import StartScreen from '/StartScreen.js'
import Level1 from '/Level1.js'

const gameState = {
	width: 1600,
    height: 1000
};

const config = {
	type: Phaser.AUTO,
	width: gameState.width,
	height: gameState.height,
	backgroundColor: 'black',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			enableBody: true,
		}
	},
	scene: [StartScreen, Level1]
};

const game = new Phaser.Game(config);

export default gameState;