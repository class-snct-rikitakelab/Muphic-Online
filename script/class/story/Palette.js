var Palette = enchant.Class.create(enchant.Sprite, {
	initialize : function(width, height) {
		enchant.Sprite.call(this, width, height);
		this._manPropertyButton = null;
		this._ladyPropertyButton = null;
		this._boyPropertyButton = null;
		this._girlPropertyButton = null;
		this._manImages = new Array(16);
		this._ladyImages = new Array(16);
		this._boyImages = new Array(16);
		this._girlImages = new Array(16);
		this._selectedImagePath = null;
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
	},

	// お兄さん属性ボタンを表示
	_showManPropertyButton : function() {
		storyScene.addChild(this._manPropertyButton);
	},
	// お姉さん属性ボタンを表示
	_showLadyPropertyButton : function() {
		storyScene.addChild(this._ladyPropertyButton);
	},
	// 男の子属性ボタンを表示
	_showBoyPropertyButton : function() {
		storyScene.addChild(this._boyPropertyButton);
	},
	// 女の子属性ボタンを表示
	_showGirlPropertyButton : function() {
		storyScene.addChild(this._girlPropertyButton);
	},

	// お兄さん属性ボタンを非表示
	_removeManPropertyButton : function() {
		storyScene.removeChild(this._manPropertyButton);
	},
	// お姉さん属性ボタンを非表示
	_removeLadyPropertyButton : function() {
		storyScene.removeChild(this._ladyPropertyButton);
	},
	// 男の子属性ボタンを非表示
	_removeBoyPropertyButton : function() {
		storyScene.removeChild(this._boyPropertyButton);
	},
	// 女の子属性ボタンを非表示
	_removeGirlPropertyButton : function() {
		storyScene.removeChild(this._girlPropertyButton);
	},

	// パレットに表示されるお兄さん画像データの生成
	_createManImages : function() {
		this._manImages[0] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._path, STORY_PREVIEWOBJECT_MAN_FRONT_FOCUS._path, 48, 137, this.x + 42 + 20, this.y + 200, this);
		this._manImages[1] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_BACK._path, STORY_PREVIEWOBJECT_MAN_BACK_FOCUS._path, 46, 136, this._manImages[0].x + 72, this._manImages[0].y, this);
		this._manImages[2] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_MAN_RIGHT_FOCUS._path, 38, 135, this._manImages[0].x, this._manImages[0].y + 150, this);
		this._manImages[3] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_LEFT_GLAD._path, STORY_PREVIEWOBJECT_MAN_LEFT_FOCUS._path, 36, 135, this._manImages[0].x + 72, this._manImages[0].y + 150, this);

		this._manImages[4] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_MAN_FRONT_FOCUS._path, 48, 137, this._manImages[3].x + 112, this.y + 200, this);
		this._manImages[5] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_BACK._path, STORY_PREVIEWOBJECT_MAN_BACK_FOCUS._path, 46, 136, this._manImages[4].x + 72, this._manImages[4].y, this);
		this._manImages[6] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_MAN_RIGHT_FOCUS._path, 38, 135, this._manImages[4].x, this._manImages[4].y + 150, this);
		this._manImages[7] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_MAN_LEFT_FOCUS._path, 36, 135, this._manImages[4].x + 72, this._manImages[4].y + 150, this);

		this._manImages[8] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_FRONT_SAD._path, STORY_PREVIEWOBJECT_MAN_FRONT_FOCUS._path, 48, 137, this._manImages[7].x + 112, this.y + 200, this);
		this._manImages[9] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_BACK._path, STORY_PREVIEWOBJECT_MAN_BACK_FOCUS._path, 46, 136, this._manImages[8].x + 72, this._manImages[8].y, this);
		this._manImages[10] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_RIGHT_SAD._path, STORY_PREVIEWOBJECT_MAN_RIGHT_FOCUS._path, 38, 135, this._manImages[8].x, this._manImages[8].y + 150, this);
		this._manImages[11] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_LEFT_SAD._path, STORY_PREVIEWOBJECT_MAN_LEFT_FOCUS._path, 36, 135, this._manImages[8].x + 72, this._manImages[8].y + 150, this);

		this._manImages[12] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_MAN_FRONT_FOCUS._path, 48, 137, this._manImages[11].x + 112, this.y + 200, this);
		this._manImages[13] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_BACK._path, STORY_PREVIEWOBJECT_MAN_BACK_FOCUS._path, 46, 136, this._manImages[12].x + 72, this._manImages[12].y, this);
		this._manImages[14] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_MAN_RIGHT_FOCUS._path, 38, 135, this._manImages[12].x, this._manImages[12].y + 150, this);
		this._manImages[15] = new PaletteImage(STORY_PREVIEWOBJECT_MAN_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_MAN_LEFT_FOCUS._path, 36, 135, this._manImages[12].x + 72, this._manImages[12].y + 150, this);
	},
	// パレットに表示されるお姉さん画像データの生成
	_createLadyImages : function() {
		this._ladyImages[0] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_FRONT_GLAD._path, STORY_PREVIEWOBJECT_LADY_FRONT_FOCUS._path, 48, 125, this.x + 42 + 20, this.y + 200, this);
		this._ladyImages[1] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_BACK._path, STORY_PREVIEWOBJECT_LADY_BACK_FOCUS._path, 45, 124, this._ladyImages[0].x + 72, this._ladyImages[0].y, this);
		this._ladyImages[2] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_LADY_RIGHT_FOCUS._path, 34, 127, this._ladyImages[0].x, this._ladyImages[0].y + 150, this);
		this._ladyImages[3] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_LEFT_GLAD._path, STORY_PREVIEWOBJECT_LADY_LEFT_FOCUS._path, 34, 127, this._ladyImages[0].x + 72, this._ladyImages[0].y + 150, this);

		this._ladyImages[4] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_LADY_FRONT_FOCUS._path, 48, 125, this._ladyImages[3].x + 112, this.y + 200, this);
		this._ladyImages[5] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_BACK._path, STORY_PREVIEWOBJECT_LADY_BACK_FOCUS._path, 45, 124, this._ladyImages[4].x + 72, this._ladyImages[4].y, this);
		this._ladyImages[6] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_LADY_RIGHT_FOCUS._path, 34, 127, this._ladyImages[4].x, this._ladyImages[4].y + 150, this);
		this._ladyImages[7] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_LADY_LEFT_FOCUS._path, 34, 127, this._ladyImages[4].x + 72, this._ladyImages[4].y + 150, this);

		this._ladyImages[8] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_FRONT_SAD._path, STORY_PREVIEWOBJECT_LADY_FRONT_FOCUS._path, 48, 125, this._ladyImages[7].x + 112, this.y + 200, this);
		this._ladyImages[9] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_BACK._path, STORY_PREVIEWOBJECT_LADY_BACK_FOCUS._path, 45, 124, this._ladyImages[8].x + 72, this._ladyImages[8].y, this);
		this._ladyImages[10] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_RIGHT_SAD._path, STORY_PREVIEWOBJECT_LADY_RIGHT_FOCUS._path, 34, 127, this._ladyImages[8].x, this._ladyImages[8].y + 150, this);
		this._ladyImages[11] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_LEFT_SAD._path, STORY_PREVIEWOBJECT_LADY_LEFT_FOCUS._path, 34, 127, this._ladyImages[8].x + 72, this._ladyImages[8].y + 150, this);

		this._ladyImages[12] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_LADY_FRONT_FOCUS._path, 48, 125, this._ladyImages[11].x + 112, this.y + 200, this);
		this._ladyImages[13] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_BACK._path, STORY_PREVIEWOBJECT_LADY_BACK_FOCUS._path, 45, 124, this._ladyImages[12].x + 72, this._ladyImages[12].y, this);
		this._ladyImages[14] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_LADY_RIGHT_FOCUS._path, 34, 127, this._ladyImages[12].x, this._ladyImages[12].y + 150, this);
		this._ladyImages[15] = new PaletteImage(STORY_PREVIEWOBJECT_LADY_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_LADY_LEFT_FOCUS._path, 34, 127, this._ladyImages[12].x + 72, this._ladyImages[12].y + 150, this);
	},
	// パレットに表示される男の子画像データの生成
	_createBoyImages : function() {
		this._boyImages[0] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_FRONT_GLAD._path, STORY_PREVIEWOBJECT_BOY_FRONT_FOCUS._path, 47, 109, this.x + 42 + 20, this.y + 200, this);
		this._boyImages[1] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_BACK._path, STORY_PREVIEWOBJECT_BOY_BACK_FOCUS._path, 45, 109, this._boyImages[0].x + 72, this._boyImages[0].y, this);
		this._boyImages[2] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_BOY_RIGHT_FOCUS._path, 32, 109, this._boyImages[0].x, this._boyImages[0].y + 150, this);
		this._boyImages[3] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_LEFT_GLAD._path, STORY_PREVIEWOBJECT_BOY_LEFT_FOCUS._path, 32, 109, this._boyImages[0].x + 72, this._boyImages[0].y + 150, this);

		this._boyImages[4] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_BOY_FRONT_FOCUS._path, 47, 109, this._boyImages[3].x + 112, this.y + 200, this);
		this._boyImages[5] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_BACK._path, STORY_PREVIEWOBJECT_BOY_BACK_FOCUS._path, 45, 109, this._boyImages[4].x + 72, this._boyImages[4].y, this);
		this._boyImages[6] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_BOY_RIGHT_FOCUS._path, 32, 109, this._boyImages[4].x, this._boyImages[4].y + 150, this);
		this._boyImages[7] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_BOY_LEFT_FOCUS._path, 32, 109, this._boyImages[4].x + 72, this._boyImages[4].y + 150, this);

		this._boyImages[8] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_FRONT_SAD._path, STORY_PREVIEWOBJECT_BOY_FRONT_FOCUS._path, 47, 109, this._boyImages[7].x + 112, this.y + 200, this);
		this._boyImages[9] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_BACK._path, STORY_PREVIEWOBJECT_BOY_BACK_FOCUS._path, 45, 109, this._boyImages[8].x + 72, this._boyImages[8].y, this);
		this._boyImages[10] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_RIGHT_SAD._path, STORY_PREVIEWOBJECT_BOY_RIGHT_FOCUS._path, 32, 109, this._boyImages[8].x, this._boyImages[8].y + 150, this);
		this._boyImages[11] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_LEFT_SAD._path, STORY_PREVIEWOBJECT_BOY_LEFT_FOCUS._path, 32, 109, this._boyImages[8].x + 72, this._boyImages[8].y + 150, this);

		this._boyImages[12] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_BOY_FRONT_FOCUS._path, 47, 109, this._boyImages[11].x + 112, this.y + 200, this);
		this._boyImages[13] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_BACK._path, STORY_PREVIEWOBJECT_BOY_BACK_FOCUS._path, 45, 109, this._boyImages[12].x + 72, this._boyImages[12].y, this);
		this._boyImages[14] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_BOY_RIGHT_FOCUS._path, 32, 109, this._boyImages[12].x, this._boyImages[12].y + 150, this);
		this._boyImages[15] = new PaletteImage(STORY_PREVIEWOBJECT_BOY_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_BOY_LEFT_FOCUS._path, 32, 109, this._boyImages[12].x + 72, this._boyImages[12].y + 150, this);
	},
	// パレットに表示される女の子画像データの生成
	_createGirlImages : function() {
		this._girlImages[0] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_FRONT_GLAD._path, STORY_PREVIEWOBJECT_GIRL_FRONT_FOCUS._path, 50, 107, this.x + 42 + 20, this.y + 200, this);
		this._girlImages[1] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_BACK._path, STORY_PREVIEWOBJECT_GIRL_BACK_FOCUS._path, 51, 106, this._girlImages[0].x + 72, this._girlImages[0].y, this);
		this._girlImages[2] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_RIGHT_GLAD._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_FOCUS._path, 44, 107, this._girlImages[0].x, this._girlImages[0].y + 150, this);
		this._girlImages[3] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_LEFT_GLAD._path, STORY_PREVIEWOBJECT_GIRL_LEFT_FOCUS._path, 43, 107, this._girlImages[0].x + 72, this._girlImages[0].y + 150, this);

		this._girlImages[4] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_FRONT_ANGRY._path, STORY_PREVIEWOBJECT_GIRL_FRONT_FOCUS._path, 50, 107, this._boyImages[3].x + 112, this.y + 200, this);
		this._girlImages[5] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_BACK._path, STORY_PREVIEWOBJECT_GIRL_BACK_FOCUS._path, 51, 106, this._girlImages[4].x + 72, this._girlImages[4].y, this);
		this._girlImages[6] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_RIGHT_ANGRY._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_FOCUS._path, 44, 107, this._girlImages[4].x, this._girlImages[4].y + 150, this);
		this._girlImages[7] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_LEFT_ANGRY._path, STORY_PREVIEWOBJECT_GIRL_LEFT_FOCUS._path, 43, 107, this._girlImages[4].x + 72, this._girlImages[4].y + 150, this);

		this._girlImages[8] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_FRONT_SAD._path, STORY_PREVIEWOBJECT_GIRL_FRONT_FOCUS._path, 50, 107, this._boyImages[7].x + 112, this.y + 200, this);
		this._girlImages[9] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_BACK._path, STORY_PREVIEWOBJECT_GIRL_BACK_FOCUS._path, 51, 106, this._girlImages[8].x + 72, this._girlImages[8].y, this);
		this._girlImages[10] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_RIGHT_SAD._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_FOCUS._path, 44, 107, this._girlImages[8].x, this._girlImages[8].y + 150, this);
		this._girlImages[11] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_LEFT_SAD._path, STORY_PREVIEWOBJECT_GIRL_LEFT_FOCUS._path, 43, 107, this._girlImages[8].x + 72, this._girlImages[8].y + 150, this);

		this._girlImages[12] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_FRONT_ENJOY._path, STORY_PREVIEWOBJECT_GIRL_FRONT_FOCUS._path, 50, 107, this._boyImages[11].x + 112, this.y + 200, this);
		this._girlImages[13] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_BACK._path, STORY_PREVIEWOBJECT_GIRL_BACK_FOCUS._path, 51, 106, this._girlImages[12].x + 72, this._girlImages[12].y, this);
		this._girlImages[14] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_RIGHT_ENJOY._path, STORY_PREVIEWOBJECT_GIRL_RIGHT_FOCUS._path, 44, 107, this._girlImages[12].x, this._girlImages[12].y + 150, this);
		this._girlImages[15] = new PaletteImage(STORY_PREVIEWOBJECT_GIRL_LEFT_ENJOY._path, STORY_PREVIEWOBJECT_GIRL_LEFT_FOCUS._path, 43, 107, this._girlImages[12].x + 72, this._girlImages[12].y + 150, this);
	},

	// パレットにお兄さん画像の一覧を表示
	_showManImages : function() {
		for(var i = 0; i < this._manImages.length; i++) {
			storyScene.addChild(this._manImages[i]);
		}
	},
	// パレットにお姉さん画像の一覧を表示
	_showLadyImages : function() {
		for(var i = 0; i < this._ladyImages.length; i++) {
			storyScene.addChild(this._ladyImages[i]);
		}
	},
	// パレットに男の子画像の一覧を表示
	_showBoyImages : function() {
		for(var i = 0; i < this._boyImages.length; i++) {
			storyScene.addChild(this._boyImages[i]);
		}
	},
	// パレットに女の子画像の一覧を表示
	_showGirlImages : function() {
		for(var i = 0; i < this._girlImages.length; i++) {
			storyScene.addChild(this._girlImages[i]);
		}
	},

	// パレットからお兄さん画像の一覧を非表示
	_removeManImages : function() {
		for(var i = 0; i < this._manImages.length; i++) {
			if(this._manImages[i].scene === storyScene) {
				storyScene.removeChild(this._manImages[i]);
			}
		}
	},
	// パレットからお姉さん画像の一覧を非表示
	_removeLadyImages : function() {
		for(var i = 0; i < this._ladyImages.length; i++) {
			if(this._ladyImages[i].scene === storyScene) {
				storyScene.removeChild(this._ladyImages[i]);
			}
		}
	},
	// パレットから男の子画像の一覧を非表示
	_removeBoyImages : function() {
		for(var i = 0; i < this._boyImages.length; i++) {
			if(this._boyImages[i].scene === storyScene) {
				storyScene.removeChild(this._boyImages[i]);
			}
		}
	},
	// パレットから女の子画像の一覧を非表示
	_removeGirlImages : function() {
		for(var i = 0; i < this._girlImages.length; i++) {
			if(this._girlImages[i].scene === storyScene) {
				storyScene.removeChild(this._girlImages[i]);
			}
		}
	},

	// パレットの画像を非表示
	_removePalette : function() {
		storyScene.removeChild(this);
	},

	// 選択された画像のパスをセットする
	_setSelectedImagePath : function(selectedImagePath) {
		this._selectedImagePath = selectedImagePath;
	},

	// パレット全体の非表示処理
	_removeAll : function() {
		this._removeManPropertyButton();
		this._removeLadyPropertyButton();
		this._removeBoyPropertyButton();
		this._removeGirlPropertyButton();
		this._removeManImages();
		this._removeLadyImages();
		this._removeBoyImages();
		this._removeGirlImages();
		this._removePalette();
	},
})