var menuState = {

	// preload: function(){
	// 	//game.load.atlas('button', 'assets/buttons/button_texture_atlas.png','assets/buttons/button_texture_atlas.json');
	// },

	create: function(){
		var nameLabel = game.add.text(80, 150, 'test game',
			{font: '50px Arial', fill: '#ffffff' });

		var startLabel = game.add.text(80, game.world.height-80,
			'press the button to start!',
			{font: '25px Arial', fill: '#ffffff'});

		// this.createButton(game, "Play Now!", game.world.centerX, 16, 100, 33, 
		// 	{font:"14px Arial", fill:"#fff", align:"center"}, this.start);
		var button;
		button = game.add.button(game.world.centerX - 95, 400, 'button', this.start, this, 2, 1, 0);
	    //button.onInputOver.add(this.over, this);
	    //button.onInputOut.add(this.out, this);
	},

	start: function(){
		game.state.start('play');
	},

	over: function(){
		console.log('button over');
	},

	out: function(){
		console.log('button out');
	},

	createButton:function(game,string, x, y, w, h, style, callback){
		var button1 = game.add.button(x,y,'button', callback, this,2,1,0);
		
		button1.anchor.setTo(0.5,0.5);
		button1.width = w;
		button1.height = h;
		
		var txt = game.add.text(button1.x, button1.y, string, style);
		
		txt.anchor.setTo(0.5,0.5);
	}
}

// var titlescreen;

// var menuState = {

// 	create: function (game) {
// 		this.createButton(game,"Play",game.world.centerX,game.world.centerY,300,100, 
// 		function(){
// 			this.state.start('play');
// 		});
// 		titlescreen = game.add.sprite(game.world.centerX,game,world,centerY - 180, 'titlescreen');
// 		titlescreen.anchor.setTo(0.5,0.5);

// 	},

// 	update: function (game) {

// 	},

// 	createButton: function (game,string,x,y,w,h,callback) {
// 		var button1 = game.add.button(x,y,'button', callback, this, 2, 1, 0);

// 		button1.anchor.setTo(0.5,0.5);
// 		button1.width = w;
// 		button1.height = h;

// 		var txt = game.add.text(button1.x,button1.y, string, {
// 			font: "14px Arial",
// 			fill: "#fff",
// 			align: "center"
// 		});
// 		txt.anchor.setTo(0.5,0.5);
// 	}


// }
