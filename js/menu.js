var menuState = {

	preload: function(){
		game.load.image('button', 'assets/button.png', 193, 71);
	},

	create: function(){
		var nameLabel = game.add.text(80, 150, 'test game',
			{font: '50px Arial', fill: '#ffffff' });

		var startLabel = game.add.text(80, game.world.height-80,
			'press the button to start!',
			{font: '25px Arial', fill: '#ffffff'});

		button = game.add.button(game.world.centerX - 95, 400, 'button', this.start, this, 2, 1, 0);

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		wkey.onDown.add(this.start, this);
	},

	start: function(){
		game.state.start('play');
	}

}

