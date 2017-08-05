var winState = {

	create: function(){

		var nameLabel = game.add.text(80, 150, 'You win!',
			{font: '50px Arial', fill: '#00FF00' });

		var startLabel = game.add.text(80, game.world.height-80,
			'press the W key to restart',
			{font: '25px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		//this.wkey.mouse.onMouseDown.add(this.restart);
		wkey.onDown.addOnce(this.restart, this);
	},

	restart: function(){
		//window.location.reload(false);
		game.state.start('menu');
	}



}