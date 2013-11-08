var AnimalPaletteIllust = enchant.Class.create({
	initialize : function(parent) {
		this._dogIllust = null;
		this._birdIllust = null;
		this._bearIllust = null;
		this._turtleIllust = null;
		this._parent = parent;
	},

	// イヌイラスト全体のオブジェクトを生成
	_createDogIllust : function() {
		this._dogIllust = new DogIllust(this);
		this._dogIllust._createDogImages();
		this._dogIllust._addDogImagesToGroup();
	},
	// トリイラスト全体のオブジェクトを生成
	_createBirdIllust : function() {
		this._birdIllust = new BirdIllust(this);
		this._birdIllust._createBirdImages();
		this._birdIllust._addBirdImagesToGroup();
	},
	// クマイラスト全体のオブジェクトを生成
	_createBearIllust : function() {
		this._bearIllust = new BearIllust(this);
		this._bearIllust._createBearImages();
		this._bearIllust._addBearImagesToGroup();
	},
	// カメイラスト全体のオブジェクトを生成
	_createTurtleIllust : function() {
		this._turtleIllust = new TurtleIllust(this);
		this._turtleIllust._createTurtleImages();
		this._turtleIllust._addTurtleImagesToGroup();
	},

	// イヌイラスト全体を物語作成画面へ加える
	_addDogIllustToStoryScene : function() {
		storyScene.addChild(this._dogIllust);
	},
	// トリイラスト全体を物語作成画面へ加える
	_addBirdIllustToStoryScene : function() {
		storyScene.addChild(this._birdIllust);
	},
	// クマイラスト全体を物語作成画面へ加える
	_addBearIllustToStoryScene : function() {
		storyScene.addChild(this._bearIllust);
	},
	// カメイラスト全体を物語作成画面へ加える
	_addTurtleIllustToStoryScene : function() {
		storyScene.addChild(this._turtleIllust);
	},

	// イヌイラスト全体を物語作成画面から削除する
	_removeDogIllustFromStoryScene : function() {
		storyScene.removeChild(this._dogIllust);
	},
	// トリイラスト全体を物語作成画面から削除する
	_removeBirdIllustFromStoryScene : function() {
		storyScene.removeChild(this._birdIllust);
	},
	// クマイラスト全体を物語作成画面から削除する
	_removeBearIllustFromStoryScene : function() {
		storyScene.removeChild(this._bearIllust);
	},
	// カメイラスト全体を物語作成画面から削除する
	_removeTurtleIllustFromStoryScene : function() {
		storyScene.removeChild(this._turtleIllust);
	},

	// パレットの中にイラストを表示する
	_addIllust : function(illustType) {
		switch(illustType) {
			case "dog":
				this._addDogIllustToStoryScene();
				break;
			case "bird":
				this._addBirdIllustToStoryScene();
				break;
			case "bear":
				this._addBearIllustToStoryScene();
				break;
			case "turtle":
				this._addTurtleIllustToStoryScene();
				break;
		}
	},
	// パレットの中にイラストを表示しない
	_removeIllust : function(illustType) {
		switch(illustType) {
			case "dog":
				this._removeDogIllustFromStoryScene();
				break;
			case "bird":
				this._removeBirdIllustFromStoryScene();
				break;
			case "bear":
				this._removeBearIllustFromStoryScene();
				break;
			case "turtle":
				this._removeTurtleIllustFromStoryScene();
				break;
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
		this._parent._setNotDarkScreenBackground();
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeFromStoryScene();
	},
})