var loadState = {


	preload: function() {
		var loadingLabel = game.add.text(80, 150, 'game is loading..',
			{font: '30px Courier', fill: '#ffffff'});
		game.load.spritesheet('player', 'assets/dude.png', 32, 48);
		game.load.image('sky', 'assets/sky.png');
    	game.load.image('ground', 'assets/platform.png');
    	//game.load.spritesheet('ms', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/173252/my-sprites.png', 100, 100, 4);
		game.load.atlas('button', 'assets/buttons/button_texture_atlas.png','assets/buttons/button_texture_atlas.json');

	},

	create: function(){
		game.state.start('menu');
	}
}