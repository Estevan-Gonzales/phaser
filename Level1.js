import gameState from '/game.js'

class Level1 extends Phaser.Scene {

    constructor() {
        super({key: "Level1"})
    }

	create() {
        gameState.whiteBackground = this.add.rectangle(0, 0, gameState.width, gameState.height, '0xEEEEEE').setOrigin(0,0);
	}
}


export default Level1;
