var Palette = enchant.Class.create(enchant.Sprite, {
	initialize : function(width, height) {
		enchant.Sprite.call(this, width, height);
		this._manPropertyButton = null;
		this._ladyPropertyButton = null;
		this._boyPropertyButton = null;
		this._girlPropertyButton = null;
		//this._manFace = new Array(4);
		//this._ladyFace = new Array(4);
		//this._boyFace = new Array(4);
		//this._girlFace = new Array(4);
		this._manImages = new Array(16);
		this._ladyImages = new Array(16);
		this._boyImages = new Array(16);
		this._girlImages = new Array(16);
		this._parent = null;
	},

	// お兄さん属性ボタンゲッタ
	_getManPropertyButton : function() {
		return this._manPropertyButton;
	},
	// お姉さん属性ボタンゲッタ
	_getLadyPropertyButton : function() {
		return this._ladyPropertyButton;
	},
	// 男の子属性ボタンゲッタ
	_getBoyPropertyButton : function() {
		return this._boyPropertyButton;
	},
	// 女の子属性ボタンゲッタ
	_getGirlPropertyButton : function() {
		return this._girlPropertyButton;
	},

	// お兄さん属性ボタン生成
	_createManPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_MAN_ON._path;
		var width = STORY_PALETTEPROPERTY_MAN_ON._width;
		var height = STORY_PALETTEPROPERTY_MAN_ON._height;
		this._manPropertyButton = new ManPropertyButton(width, height);
		this._manPropertyButton.image = core.assets[path];
		this._manPropertyButton.x = this.x + 196;
		this._manPropertyButton.y = this.y + 20;
		this._manPropertyButton._parent = this;
		storyScene.addChild(this._manPropertyButton);
	},
	// お姉さん属性ボタン生成
	_createLadyPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_LADY_OFF._path;
		var width = STORY_PALETTEPROPERTY_LADY_OFF._width;
		var height = STORY_PALETTEPROPERTY_LADY_OFF._height;
		this._ladyPropertyButton = new LadyPropertyButton(width, height);
		this._ladyPropertyButton.image = core.assets[path];
		this._ladyPropertyButton.x = this.x + 196 + 107;
		this._ladyPropertyButton.y = this.y + 20;
		this._ladyPropertyButton._parent = this;
		storyScene.addChild(this._ladyPropertyButton);
	},
	// 男の子属性ボタン生成
	_createBoyPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_BOY_OFF._path;
		var width = STORY_PALETTEPROPERTY_BOY_OFF._width;
		var height = STORY_PALETTEPROPERTY_BOY_OFF._height;
		this._boyPropertyButton = new BoyPropertyButton(width, height);
		this._boyPropertyButton.image = core.assets[path];
		this._boyPropertyButton.x = this.x + 196 + 214;
		this._boyPropertyButton.y = this.y + 20;
		this._boyPropertyButton._parent = this;
		storyScene.addChild(this._boyPropertyButton);
	},
	// 女の子属性ボタン生成
	_createGirlPropertyButton : function() {
		var path = STORY_PALETTEPROPERTY_GIRL_OFF._path;
		var width = STORY_PALETTEPROPERTY_GIRL_OFF._width;
		var height = STORY_PALETTEPROPERTY_GIRL_OFF._height;
		this._girlPropertyButton = new GirlPropertyButton(width, height);
		this._girlPropertyButton.image = core.assets[path];
		this._girlPropertyButton.x = this.x + 196 + 321;
		this._girlPropertyButton.y = this.y + 20;
		this._girlPropertyButton._parent = this;
		storyScene.addChild(this._girlPropertyButton);
	},

	// パレットに表示されるお兄さん画像データの生成
	_createManImages : function() {
		/*
		this._manFace[0] = new enchant.Sprite(58, 70);
		this._manFace[0].image = core.assets[STORY_PALETTEFACE_MAN_GLAD._path];
		this._manFace[0].x = this.x + 42 + 53;
		this._manFace[0].y = this.y + 120;
		this._manFace[1] = new enchant.Sprite(58, 70);
		this._manFace[1].image = core.assets[STORY_PALETTEFACE_MAN_ANGRY._path];
		this._manFace[1].x = this._manFace[0].x + 184;
		this._manFace[1].y = this.y + 120;
		this._manFace[2] = new enchant.Sprite(58, 70);
		this._manFace[2].image = core.assets[STORY_PALETTEFACE_MAN_SAD._path];
		this._manFace[2].x = this._manFace[1].x + 184;
		this._manFace[2].y = this.y + 120;
		this._manFace[3] = new enchant.Sprite(58, 70);
		this._manFace[3].image = core.assets[STORY_PALETTEFACE_MAN_ENJOY._path];
		this._manFace[3].x = this._manFace[2].x + 184;
		this._manFace[3].y = this.y + 120;
		*/

		this._manImages[0] = new enchant.Sprite(48, 137);
		this._manImages[0].image = core.assets[STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._path];
		this._manImages[0].x = this.x + 42 + 20;
		this._manImages[0].y = this.y + 200;
		this._manImages[1] = new enchant.Sprite(46, 136);
		this._manImages[1].image = core.assets[STORY_PREVIEWOBJECT_MAN_BACK._path];
		this._manImages[1].x = this._manImages[0].x + 72;
		this._manImages[1].y = this._manImages[0].y;
		this._manImages[2] = new enchant.Sprite(38, 135);
		this._manImages[2].image = core.assets[STORY_PREVIEWOBJECT_MAN_RIGHT_GLAD._path];
		this._manImages[2].x = this._manImages[0].x;
		this._manImages[2].y = this._manImages[0].y + 150;
		this._manImages[3] = new enchant.Sprite(36, 135);
		this._manImages[3].image = core.assets[STORY_PREVIEWOBJECT_MAN_LEFT_GLAD._path];
		this._manImages[3].x = this._manImages[0].x + 72;
		this._manImages[3].y = this._manImages[0].y + 150;

		this._manImages[4] = new enchant.Sprite(48, 137);
		this._manImages[4].image = core.assets[STORY_PREVIEWOBJECT_MAN_FRONT_ANGRY._path];
		this._manImages[4].x = this._manImages[3].x + 112;
		this._manImages[4].y = this.y + 200;
		this._manImages[5] = new enchant.Sprite(46, 136);
		this._manImages[5].image = core.assets[STORY_PREVIEWOBJECT_MAN_BACK._path];
		this._manImages[5].x = this._manImages[4].x + 72;
		this._manImages[5].y = this._manImages[4].y;
		this._manImages[6] = new enchant.Sprite(38, 135);
		this._manImages[6].image = core.assets[STORY_PREVIEWOBJECT_MAN_RIGHT_ANGRY._path];
		this._manImages[6].x = this._manImages[4].x;
		this._manImages[6].y = this._manImages[4].y + 150;
		this._manImages[7] = new enchant.Sprite(36, 135);
		this._manImages[7].image = core.assets[STORY_PREVIEWOBJECT_MAN_LEFT_ANGRY._path];
		this._manImages[7].x = this._manImages[4].x + 72;
		this._manImages[7].y = this._manImages[4].y + 150;

		this._manImages[8] = new enchant.Sprite(48, 137);
		this._manImages[8].image = core.assets[STORY_PREVIEWOBJECT_MAN_FRONT_SAD._path];
		this._manImages[8].x = this._manImages[7].x + 112;
		this._manImages[8].y = this.y + 200;
		this._manImages[9] = new enchant.Sprite(46, 136);
		this._manImages[9].image = core.assets[STORY_PREVIEWOBJECT_MAN_BACK._path];
		this._manImages[9].x = this._manImages[8].x + 72;
		this._manImages[9].y = this._manImages[8].y;
		this._manImages[10] = new enchant.Sprite(38, 135);
		this._manImages[10].image = core.assets[STORY_PREVIEWOBJECT_MAN_RIGHT_SAD._path];
		this._manImages[10].x = this._manImages[8].x;
		this._manImages[10].y = this._manImages[8].y + 150;
		this._manImages[11] = new enchant.Sprite(36, 135);
		this._manImages[11].image = core.assets[STORY_PREVIEWOBJECT_MAN_LEFT_SAD._path];
		this._manImages[11].x = this._manImages[8].x + 72;
		this._manImages[11].y = this._manImages[8].y + 150;

		this._manImages[12] = new enchant.Sprite(48, 137);
		this._manImages[12].image = core.assets[STORY_PREVIEWOBJECT_MAN_FRONT_ENJOY._path];
		this._manImages[12].x = this._manImages[11].x + 112;
		this._manImages[12].y = this.y + 200;
		this._manImages[13] = new enchant.Sprite(46, 136);
		this._manImages[13].image = core.assets[STORY_PREVIEWOBJECT_MAN_BACK._path];
		this._manImages[13].x = this._manImages[12].x + 72;
		this._manImages[13].y = this._manImages[12].y;
		this._manImages[14] = new enchant.Sprite(38, 135);
		this._manImages[14].image = core.assets[STORY_PREVIEWOBJECT_MAN_RIGHT_ENJOY._path];
		this._manImages[14].x = this._manImages[12].x;
		this._manImages[14].y = this._manImages[12].y + 150;
		this._manImages[15] = new enchant.Sprite(36, 135);
		this._manImages[15].image = core.assets[STORY_PREVIEWOBJECT_MAN_LEFT_ENJOY._path];
		this._manImages[15].x = this._manImages[12].x + 72;
		this._manImages[15].y = this._manImages[12].y + 150;
	},
	// パレットに表示されるお姉さん画像データの生成
	_createLadyImages : function() {
		/*
		this._ladyFace[0] = new enchant.Sprite(58, 70);
		this._ladyFace[0].image = core.assets[STORY_PALETTEFACE_LADY_GLAD._path];
		this._ladyFace[0].x = this.x + 42 + 53;
		this._ladyFace[0].y = this.y + 120;
		this._ladyFace[1] = new enchant.Sprite(58, 70);
		this._ladyFace[1].image = core.assets[STORY_PALETTEFACE_LADY_ANGRY._path];
		this._ladyFace[1].x = this._ladyFace[0].x + 184;
		this._ladyFace[1].y = this.y + 120;
		this._ladyFace[2] = new enchant.Sprite(58, 70);
		this._ladyFace[2].image = core.assets[STORY_PALETTEFACE_LADY_SAD._path];
		this._ladyFace[2].x = this._ladyFace[1].x + 184;
		this._ladyFace[2].y = this.y + 120;
		this._ladyFace[3] = new enchant.Sprite(58, 70);
		this._ladyFace[3].image = core.assets[STORY_PALETTEFACE_LADY_ENJOY._path];
		this._ladyFace[3].x = this._ladyFace[2].x + 184;
		this._ladyFace[3].y = this.y + 120;
		*/

		this._ladyImages[0] = new enchant.Sprite(48, 125);
		this._ladyImages[0].image = core.assets[STORY_PREVIEWOBJECT_LADY_FRONT_GLAD._path];
		this._ladyImages[0].x = this.x + 42 + 20;
		this._ladyImages[0].y = this.y + 200;
		this._ladyImages[1] = new enchant.Sprite(45, 124);
		this._ladyImages[1].image = core.assets[STORY_PREVIEWOBJECT_LADY_BACK._path];
		this._ladyImages[1].x = this._ladyImages[0].x + 72;
		this._ladyImages[1].y = this._ladyImages[0].y;
		this._ladyImages[2] = new enchant.Sprite(34, 127);
		this._ladyImages[2].image = core.assets[STORY_PREVIEWOBJECT_LADY_RIGHT_GLAD._path];
		this._ladyImages[2].x = this._ladyImages[0].x;
		this._ladyImages[2].y = this._ladyImages[0].y + 150;
		this._ladyImages[3] = new enchant.Sprite(34, 127);
		this._ladyImages[3].image = core.assets[STORY_PREVIEWOBJECT_LADY_LEFT_GLAD._path];
		this._ladyImages[3].x = this._ladyImages[0].x + 72;
		this._ladyImages[3].y = this._ladyImages[0].y + 150;

		this._ladyImages[4] = new enchant.Sprite(48, 125);
		this._ladyImages[4].image = core.assets[STORY_PREVIEWOBJECT_LADY_FRONT_ANGRY._path];
		this._ladyImages[4].x = this._ladyImages[3].x + 112;
		this._ladyImages[4].y = this.y + 200;
		this._ladyImages[5] = new enchant.Sprite(45, 124);
		this._ladyImages[5].image = core.assets[STORY_PREVIEWOBJECT_LADY_BACK._path];
		this._ladyImages[5].x = this._ladyImages[4].x + 72;
		this._ladyImages[5].y = this._ladyImages[4].y;
		this._ladyImages[6] = new enchant.Sprite(34, 127);
		this._ladyImages[6].image = core.assets[STORY_PREVIEWOBJECT_LADY_RIGHT_ANGRY._path];
		this._ladyImages[6].x = this._ladyImages[4].x;
		this._ladyImages[6].y = this._ladyImages[4].y + 150;
		this._ladyImages[7] = new enchant.Sprite(34, 127);
		this._ladyImages[7].image = core.assets[STORY_PREVIEWOBJECT_LADY_LEFT_ANGRY._path];
		this._ladyImages[7].x = this._ladyImages[4].x + 72;
		this._ladyImages[7].y = this._ladyImages[4].y + 150;

		this._ladyImages[8] = new enchant.Sprite(48, 125);
		this._ladyImages[8].image = core.assets[STORY_PREVIEWOBJECT_LADY_FRONT_SAD._path];
		this._ladyImages[8].x = this._ladyImages[7].x + 112;
		this._ladyImages[8].y = this.y + 200;
		this._ladyImages[9] = new enchant.Sprite(45, 124);
		this._ladyImages[9].image = core.assets[STORY_PREVIEWOBJECT_LADY_BACK._path];
		this._ladyImages[9].x = this._ladyImages[8].x + 72;
		this._ladyImages[9].y = this._ladyImages[8].y;
		this._ladyImages[10] = new enchant.Sprite(34, 127);
		this._ladyImages[10].image = core.assets[STORY_PREVIEWOBJECT_LADY_RIGHT_SAD._path];
		this._ladyImages[10].x = this._ladyImages[8].x;
		this._ladyImages[10].y = this._ladyImages[8].y + 150;
		this._ladyImages[11] = new enchant.Sprite(34, 127);
		this._ladyImages[11].image = core.assets[STORY_PREVIEWOBJECT_LADY_LEFT_SAD._path];
		this._ladyImages[11].x = this._ladyImages[8].x + 72;
		this._ladyImages[11].y = this._ladyImages[8].y + 150;

		this._ladyImages[12] = new enchant.Sprite(48, 125);
		this._ladyImages[12].image = core.assets[STORY_PREVIEWOBJECT_LADY_FRONT_ENJOY._path];
		this._ladyImages[12].x = this._ladyImages[11].x + 112;
		this._ladyImages[12].y = this.y + 200;
		this._ladyImages[13] = new enchant.Sprite(45, 124);
		this._ladyImages[13].image = core.assets[STORY_PREVIEWOBJECT_LADY_BACK._path];
		this._ladyImages[13].x = this._ladyImages[12].x + 72;
		this._ladyImages[13].y = this._ladyImages[12].y;
		this._ladyImages[14] = new enchant.Sprite(34, 127);
		this._ladyImages[14].image = core.assets[STORY_PREVIEWOBJECT_LADY_RIGHT_ENJOY._path];
		this._ladyImages[14].x = this._ladyImages[12].x;
		this._ladyImages[14].y = this._ladyImages[12].y + 150;
		this._ladyImages[15] = new enchant.Sprite(34, 127);
		this._ladyImages[15].image = core.assets[STORY_PREVIEWOBJECT_LADY_LEFT_ENJOY._path];
		this._ladyImages[15].x = this._ladyImages[12].x + 72;
		this._ladyImages[15].y = this._ladyImages[12].y + 150;
	},
	// パレットに表示される男の子画像データの生成
	_createBoyImages : function() {
		/*
		this._boyFace[0] = new enchant.Sprite(58, 70);
		this._boyFace[0].image = core.assets[STORY_PALETTEFACE_BOY_GLAD._path];
		this._boyFace[0].x = this.x + 42 + 53;
		this._boyFace[0].y = this.y + 120;
		this._boyFace[1] = new enchant.Sprite(58, 70);
		this._boyFace[1].image = core.assets[STORY_PALETTEFACE_BOY_ANGRY._path];
		this._boyFace[1].x = this._boyFace[0].x + 184;
		this._boyFace[1].y = this.y + 120;
		this._boyFace[2] = new enchant.Sprite(58, 70);
		this._boyFace[2].image = core.assets[STORY_PALETTEFACE_BOY_SAD._path];
		this._boyFace[2].x = this._boyFace[1].x + 184;
		this._boyFace[2].y = this.y + 120;
		this._boyFace[3] = new enchant.Sprite(58, 70);
		this._boyFace[3].image = core.assets[STORY_PALETTEFACE_BOY_ENJOY._path];
		this._boyFace[3].x = this._boyFace[2].x + 184;
		this._boyFace[3].y = this.y + 120;
		*/

		this._boyImages[0] = new enchant.Sprite(47, 109);
		this._boyImages[0].image = core.assets[STORY_PREVIEWOBJECT_BOY_FRONT_GLAD._path];
		this._boyImages[0].x = this.x + 42 + 20;
		this._boyImages[0].y = this.y + 200;
		this._boyImages[1] = new enchant.Sprite(45, 109);
		this._boyImages[1].image = core.assets[STORY_PREVIEWOBJECT_BOY_BACK._path];
		this._boyImages[1].x = this._boyImages[0].x + 72;
		this._boyImages[1].y = this._boyImages[0].y;
		this._boyImages[2] = new enchant.Sprite(32, 109);
		this._boyImages[2].image = core.assets[STORY_PREVIEWOBJECT_BOY_RIGHT_GLAD._path];
		this._boyImages[2].x = this._boyImages[0].x;
		this._boyImages[2].y = this._boyImages[0].y + 150;
		this._boyImages[3] = new enchant.Sprite(32, 109);
		this._boyImages[3].image = core.assets[STORY_PREVIEWOBJECT_BOY_LEFT_GLAD._path];
		this._boyImages[3].x = this._boyImages[0].x + 72;
		this._boyImages[3].y = this._boyImages[0].y + 150;

		this._boyImages[4] = new enchant.Sprite(47, 109);
		this._boyImages[4].image = core.assets[STORY_PREVIEWOBJECT_BOY_FRONT_ANGRY._path];
		this._boyImages[4].x = this._boyImages[3].x + 112;
		this._boyImages[4].y = this.y + 200;
		this._boyImages[5] = new enchant.Sprite(45, 109);
		this._boyImages[5].image = core.assets[STORY_PREVIEWOBJECT_BOY_BACK._path];
		this._boyImages[5].x = this._boyImages[4].x + 72;
		this._boyImages[5].y = this._boyImages[4].y;
		this._boyImages[6] = new enchant.Sprite(32, 109);
		this._boyImages[6].image = core.assets[STORY_PREVIEWOBJECT_BOY_RIGHT_ANGRY._path];
		this._boyImages[6].x = this._boyImages[4].x;
		this._boyImages[6].y = this._boyImages[4].y + 150;
		this._boyImages[7] = new enchant.Sprite(32, 109);
		this._boyImages[7].image = core.assets[STORY_PREVIEWOBJECT_BOY_LEFT_ANGRY._path];
		this._boyImages[7].x = this._boyImages[4].x + 72;
		this._boyImages[7].y = this._boyImages[4].y + 150;

		this._boyImages[8] = new enchant.Sprite(47, 109);
		this._boyImages[8].image = core.assets[STORY_PREVIEWOBJECT_BOY_FRONT_SAD._path];
		this._boyImages[8].x = this._boyImages[7].x + 112;
		this._boyImages[8].y = this.y + 200;
		this._boyImages[9] = new enchant.Sprite(45, 109);
		this._boyImages[9].image = core.assets[STORY_PREVIEWOBJECT_BOY_BACK._path];
		this._boyImages[9].x = this._boyImages[8].x + 72;
		this._boyImages[9].y = this._boyImages[8].y;
		this._boyImages[10] = new enchant.Sprite(32, 109);
		this._boyImages[10].image = core.assets[STORY_PREVIEWOBJECT_BOY_RIGHT_SAD._path];
		this._boyImages[10].x = this._boyImages[8].x;
		this._boyImages[10].y = this._boyImages[8].y + 150;
		this._boyImages[11] = new enchant.Sprite(32, 109);
		this._boyImages[11].image = core.assets[STORY_PREVIEWOBJECT_BOY_LEFT_SAD._path];
		this._boyImages[11].x = this._boyImages[8].x + 72;
		this._boyImages[11].y = this._boyImages[8].y + 150;

		this._boyImages[12] = new enchant.Sprite(47, 109);
		this._boyImages[12].image = core.assets[STORY_PREVIEWOBJECT_BOY_FRONT_ENJOY._path];
		this._boyImages[12].x = this._boyImages[11].x + 112;
		this._boyImages[12].y = this.y + 200;
		this._boyImages[13] = new enchant.Sprite(45, 109);
		this._boyImages[13].image = core.assets[STORY_PREVIEWOBJECT_BOY_BACK._path];
		this._boyImages[13].x = this._boyImages[12].x + 72;
		this._boyImages[13].y = this._boyImages[12].y;
		this._boyImages[14] = new enchant.Sprite(32, 109);
		this._boyImages[14].image = core.assets[STORY_PREVIEWOBJECT_BOY_RIGHT_ENJOY._path];
		this._boyImages[14].x = this._boyImages[12].x;
		this._boyImages[14].y = this._boyImages[12].y + 150;
		this._boyImages[15] = new enchant.Sprite(32, 109);
		this._boyImages[15].image = core.assets[STORY_PREVIEWOBJECT_BOY_LEFT_ENJOY._path];
		this._boyImages[15].x = this._boyImages[12].x + 72;
		this._boyImages[15].y = this._boyImages[12].y + 150;
	},
	// パレットに表示される女の子画像データの生成
	_createGirlImages : function() {
		/*
		this._girlFace[0] = new enchant.Sprite(58, 70);
		this._girlFace[0].image = core.assets[STORY_PALETTEFACE_GIRL_GLAD._path];
		this._girlFace[0].x = this.x + 42 + 53;
		this._girlFace[0].y = this.y + 120;
		this._girlFace[1] = new enchant.Sprite(58, 70);
		this._girlFace[1].image = core.assets[STORY_PALETTEFACE_GIRL_ANGRY._path];
		this._girlFace[1].x = this._girlFace[0].x + 184;
		this._girlFace[1].y = this.y + 120;
		this._girlFace[2] = new enchant.Sprite(58, 70);
		this._girlFace[2].image = core.assets[STORY_PALETTEFACE_GIRL_SAD._path];
		this._girlFace[2].x = this._girlFace[1].x + 184;
		this._girlFace[2].y = this.y + 120;
		this._girlFace[3] = new enchant.Sprite(58, 70);
		this._girlFace[3].image = core.assets[STORY_PALETTEFACE_GIRL_ENJOY._path];
		this._girlFace[3].x = this._girlFace[2].x + 184;
		this._girlFace[3].y = this.y + 120;
		*/

		this._girlImages[0] = new enchant.Sprite(50, 107);
		this._girlImages[0].image = core.assets[STORY_PREVIEWOBJECT_GIRL_FRONT_GLAD._path];
		this._girlImages[0].x = this.x + 42 + 20;
		this._girlImages[0].y = this.y + 200;
		this._girlImages[1] = new enchant.Sprite(51, 106);
		this._girlImages[1].image = core.assets[STORY_PREVIEWOBJECT_GIRL_BACK._path];
		this._girlImages[1].x = this._girlImages[0].x + 72;
		this._girlImages[1].y = this._girlImages[0].y;
		this._girlImages[2] = new enchant.Sprite(44, 107);
		this._girlImages[2].image = core.assets[STORY_PREVIEWOBJECT_GIRL_RIGHT_GLAD._path];
		this._girlImages[2].x = this._girlImages[0].x;
		this._girlImages[2].y = this._girlImages[0].y + 150;
		this._girlImages[3] = new enchant.Sprite(43, 107);
		this._girlImages[3].image = core.assets[STORY_PREVIEWOBJECT_GIRL_LEFT_GLAD._path];
		this._girlImages[3].x = this._girlImages[0].x + 72;
		this._girlImages[3].y = this._girlImages[0].y + 150;

		this._girlImages[4] = new enchant.Sprite(50, 107);
		this._girlImages[4].image = core.assets[STORY_PREVIEWOBJECT_GIRL_FRONT_ANGRY._path];
		this._girlImages[4].x = this._girlImages[3].x + 112;
		this._girlImages[4].y = this.y + 200;
		this._girlImages[5] = new enchant.Sprite(51, 106);
		this._girlImages[5].image = core.assets[STORY_PREVIEWOBJECT_GIRL_BACK._path];
		this._girlImages[5].x = this._girlImages[4].x + 72;
		this._girlImages[5].y = this._girlImages[4].y;
		this._girlImages[6] = new enchant.Sprite(44, 107);
		this._girlImages[6].image = core.assets[STORY_PREVIEWOBJECT_GIRL_RIGHT_ANGRY._path];
		this._girlImages[6].x = this._girlImages[4].x;
		this._girlImages[6].y = this._girlImages[4].y + 150;
		this._girlImages[7] = new enchant.Sprite(43, 107);
		this._girlImages[7].image = core.assets[STORY_PREVIEWOBJECT_GIRL_LEFT_ANGRY._path];
		this._girlImages[7].x = this._girlImages[4].x + 72;
		this._girlImages[7].y = this._girlImages[4].y + 150;

		this._girlImages[8] = new enchant.Sprite(50, 107);
		this._girlImages[8].image = core.assets[STORY_PREVIEWOBJECT_GIRL_FRONT_SAD._path];
		this._girlImages[8].x = this._girlImages[7].x + 112;
		this._girlImages[8].y = this.y + 200;
		this._girlImages[9] = new enchant.Sprite(51, 106);
		this._girlImages[9].image = core.assets[STORY_PREVIEWOBJECT_GIRL_BACK._path];
		this._girlImages[9].x = this._girlImages[8].x + 72;
		this._girlImages[9].y = this._girlImages[8].y;
		this._girlImages[10] = new enchant.Sprite(44, 107);
		this._girlImages[10].image = core.assets[STORY_PREVIEWOBJECT_GIRL_RIGHT_SAD._path];
		this._girlImages[10].x = this._girlImages[8].x;
		this._girlImages[10].y = this._girlImages[8].y + 150;
		this._girlImages[11] = new enchant.Sprite(43, 107);
		this._girlImages[11].image = core.assets[STORY_PREVIEWOBJECT_GIRL_LEFT_SAD._path];
		this._girlImages[11].x = this._girlImages[8].x + 72;
		this._girlImages[11].y = this._girlImages[8].y + 150;

		this._girlImages[12] = new enchant.Sprite(50, 107);
		this._girlImages[12].image = core.assets[STORY_PREVIEWOBJECT_GIRL_FRONT_ENJOY._path];
		this._girlImages[12].x = this._girlImages[11].x + 112;
		this._girlImages[12].y = this.y + 200;
		this._girlImages[13] = new enchant.Sprite(51, 106);
		this._girlImages[13].image = core.assets[STORY_PREVIEWOBJECT_GIRL_BACK._path];
		this._girlImages[13].x = this._girlImages[12].x + 72;
		this._girlImages[13].y = this._girlImages[12].y;
		this._girlImages[14] = new enchant.Sprite(44, 107);
		this._girlImages[14].image = core.assets[STORY_PREVIEWOBJECT_GIRL_RIGHT_ENJOY._path];
		this._girlImages[14].x = this._girlImages[12].x;
		this._girlImages[14].y = this._girlImages[12].y + 150;
		this._girlImages[15] = new enchant.Sprite(43, 106);
		this._girlImages[15].image = core.assets[STORY_PREVIEWOBJECT_GIRL_LEFT_ENJOY._path];
		this._girlImages[15].x = this._girlImages[12].x + 72;
		this._girlImages[15].y = this._girlImages[12].y + 150;
	},

	// パレットにお兄さん画像の一覧を表示
	_showManImages : function() {
		/*
		for(var i = 0; i < this._manFace.length; i++) {
			storyScene.addChild(this._manFace[i]);
		}
		*/
		for(var i = 0; i < this._manImages.length; i++) {
			storyScene.addChild(this._manImages[i]);
		}
	},
	// パレットにお姉さん画像の一覧を表示
	_showLadyImages : function() {
		/*
		for(var i = 0; i < this._ladyFace.length; i++) {
			storyScene.addChild(this._ladyFace[i]);
		}
		*/
		for(var i = 0; i < this._ladyImages.length; i++) {
			storyScene.addChild(this._ladyImages[i]);
		}
	},
	// パレットに男の子画像の一覧を表示
	_showBoyImages : function() {
		/*
		for(var i = 0; i < this._boyFace.length; i++) {
			storyScene.addChild(this._boyFace[i]);
		}
		*/
		for(var i = 0; i < this._boyImages.length; i++) {
			storyScene.addChild(this._boyImages[i]);
		}
	},
	// パレットに女の子画像の一覧を表示
	_showGirlImages : function() {
		/*
		for(var i = 0; i < this._girlFace.length; i++) {
			storyScene.addChild(this._girlFace[i]);
		}
		*/
		for(var i = 0; i < this._girlImages.length; i++) {
			storyScene.addChild(this._girlImages[i]);
		}
	},

	// パレットからお兄さん画像の一覧を非表示
	_removeManImages : function() {
		/*
		for(var i = 0; i < this._manFace.length; i++) {
			if(this._manFace[i].scene === storyScene) {
				storyScene.removeChild(this._manFace[i]);
			}
		}
		*/
		for(var i = 0; i < this._manImages.length; i++) {
			if(this._manImages[i].scene === storyScene) {
				storyScene.removeChild(this._manImages[i]);
			}
		}
	},
	// パレットからお姉さん画像の一覧を非表示
	_removeLadyImages : function() {
		/*
		for(var i = 0; i < this._ladyFace.length; i++) {
			if(this._ladyFace[i].scene === storyScene) {
				storyScene.removeChild(this._ladyFace[i]);
			}
		}
		*/
		for(var i = 0; i < this._ladyImages.length; i++) {
			if(this._ladyImages[i].scene === storyScene) {
				storyScene.removeChild(this._ladyImages[i]);
			}
		}
	},
	// パレットから男の子画像の一覧を非表示
	_removeBoyImages : function() {
		/*
		for(var i = 0; i < this._boyFace.length; i++) {
			if(this._boyFace[i].scene === storyScene) {
				storyScene.removeChild(this._boyFace[i]);
			}
		}
		*/
		for(var i = 0; i < this._boyImages.length; i++) {
			if(this._boyImages[i].scene === storyScene) {
				storyScene.removeChild(this._boyImages[i]);
			}
		}
	},
	// パレットから女の子画像の一覧を非表示
	_removeGirlImages : function() {
		/*
		for(var i = 0; i < this._girlFace.length; i++) {
			if(this._girlFace[i].scene === storyScene) {
				storyScene.removeChild(this._girlFace[i]);
			}
		}
		*/
		for(var i = 0; i < this._girlImages.length; i++) {
			if(this._girlImages[i].scene === storyScene) {
				storyScene.removeChild(this._girlImages[i]);
			}
		}
	},
})