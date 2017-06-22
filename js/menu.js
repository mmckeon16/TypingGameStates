var menuState = {

	create: function(){
		var nameLabel = game.add.text(80, 150, 'test game',
			{font: '50px Arial', fill: '#ffffff' });

		var startLabel = game.add.text(80, game.world.height-80,
			'press the an open level to start!',
			{font: '25px Arial', fill: '#ffffff'});

		var button;
		button = game.add.button(game.world.centerX - 95, 400, 'button', this.start, this, 2, 1, 0);
		console.log(button);
	    button.onInputOver.add(this.over, this);
	    button.onInputOut.add(this.out, this);
	},

	start: function(){
		game.state.start('play');
	},

	over: function(){
		console.log('button over');
	},

	out: function(){
		console.log('button out');
	}
	// function over() {
 //    	console.log('button over');
	// }

	// function out() {
 //    	console.log('button out');
	// }
}