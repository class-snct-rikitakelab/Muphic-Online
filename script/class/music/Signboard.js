var Signboard = Class.create ({
	initialize : function(signboard_num) {
		this.signboard_num		= signboard_num;
		this.signboards			= new Array();
		this.signboard_labels	= new Array();

		for(var i = 0; i < this.signboard_num; i++) {
			this.signboards[i] = null;
			this.signboard_labels[i] = null;
		}
	},

	setGame : function(game) {
		this.game = game;
	},

	setScene : function(scene) {
		this.scene = scene;
	},

	makeSignboards : function(game) {
		this.signboards[0] = new MySprite(SIGNBOARD, SIGNBOARD_W, SIGNBOARD_H, SCALE_X, SCALE_Y, (350 * SCALE_X), (240 * SCALE_Y), game);
		this.signboards[1] = new MySprite(SIGNBOARD, SIGNBOARD_W, SIGNBOARD_H, SCALE_X, SCALE_Y, (589 * SCALE_X), (240 * SCALE_Y), game);
		this.signboards[2] = new MySprite(SIGNBOARD, SIGNBOARD_W, SIGNBOARD_H, SCALE_X, SCALE_Y, (829 * SCALE_X), (240 * SCALE_Y), game);
	},

	showSignboards : function() {
		for(var i = 0; i < this.signboard_num; i++) {
			this.scene.addChild(this.signboards[i]);
		}
	},

	makeSignboardLabels : function(game) {
		for(var i = 0; i < this.signboard_num; i++) {
			this.signboard_labels[i] = new MySprite(LABEL_0, LABEL_W, LABEL_H, SCALE_X, SCALE_Y, this.signboards[i].x + 9, this.signboards[i].y + 10, game);
		}
	},

	setSignboardLabels : function(left_measure) {
		for(var i = 0; i < this.signboard_num; i++) {
			if(this.signboard_labels[i] !== null) {
				this.scene.removeChild(this.signboard_labels[i]);
			}
			var label_image = this._numToSignboardNumberImage(left_measure + i)
			this.signboard_labels[i].image = this.game.assets[label_image];
		}
	},

	showSignboardLabels : function() {
		for(var i = 0; i < this.signboard_num; i++) {
			this.scene.addChild(this.signboard_labels[i]);
		}
	},

	_numToSignboardNumberImage : function(num) {
		var label_image = null;

		switch(num) {
			case 0 :
				label_image = LABEL_0;
				break;
			case 1 :
				label_image = LABEL_1;
				break;
			case 2 :
				label_image = LABEL_2;
				break;
			case 3 :
				label_image = LABEL_3;
				break;
			case 4 :
				label_image = LABEL_4;
				break;
			case 5 :
				label_image = LABEL_5;
				break;
			case 6 :
				label_image = LABEL_6;
				break;
			case 7 :
				label_image = LABEL_7;
				break;
			case 8 :
				label_image = LABEL_8;
				break;
			case 9 :
				label_image = LABEL_9;
				break;
			default :
				label_image = null;
				break;
		}

		return label_image;
	},
})