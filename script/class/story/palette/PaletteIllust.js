var PaletteIllust = enchant.Class.create({
	initialize : function(parent) {
		this._manIllust = null;
		this._ladyIllust = null;
		this._boyIllust = null;
		this._girlIllust = null;
		this._parent = parent;
	},

	// お兄さんイラスト全体のオブジェクトを生成
	_createManIllust : function() {
		this._manIllust = new ManIllust(this);
		this._manIllust._createManImages();
		this._manIllust._addManImagesToGroup();
	},
	// お姉さんイラスト全体のオブジェクトを生成
	_createLadyIllust : function() {
		this._ladyIllust = new LadyIllust(this);
		this._ladyIllust._createLadyImages();
		this._ladyIllust._addLadyImagesToGroup();
	},
	// 男の子イラスト全体のオブジェクトを生成
	_createBoyIllust : function() {
		this._boyIllust = new BoyIllust(this);
		this._boyIllust._createBoyImages();
		this._boyIllust._addBoyImagesToGroup();
	},
	// 女の子イラスト全体のオブジェクトを生成
	_createGirlIllust : function() {
		this._girlIllust = new GirlIllust(this);
		this._girlIllust._createGirlImages();
		this._girlIllust._addGirlImagesToGroup();
	},

	// お兄さんイラスト全体を物語作成画面へ加える
	_addManIllustToStoryScene : function() {
		storyScene.addChild(this._manIllust);
	},
	// お姉さんイラスト全体を物語作成画面へ加える
	_addLadyIllustToStoryScene : function() {
		storyScene.addChild(this._ladyIllust);
	},
	// 男の子イラスト全体を物語作成画面へ加える
	_addBoyIllustToStoryScene : function() {
		storyScene.addChild(this._boyIllust);
	},
	// 女の子イラスト全体を物語作成画面へ加える
	_addGirlIllustToStoryScene : function() {
		storyScene.addChild(this._girlIllust);
	},

	// お兄さんイラスト全体を物語作成画面から削除する
	_removeManIllustFromStoryScene : function() {
		storyScene.removeChild(this._manIllust);
	},
	// お姉さんイラスト全体を物語作成画面から削除する
	_removeLadyIllustFromStoryScene : function() {
		storyScene.removeChild(this._ladyIllust);
	},
	// 男の子イラスト全体を物語作成画面から削除する
	_removeBoyIllustFromStoryScene : function() {
		storyScene.removeChild(this._boyIllust);
	},
	// 女の子イラスト全体を物語作成画面から削除する
	_removeGirlIllustFromStoryScene : function() {
		storyScene.removeChild(this._girlIllust);
	},

	// パレットの中にイラストを表示する
	_addIllust : function(illustType) {
		switch(illustType) {
			case "man":
				this._addManIllustToStoryScene();
				break;
			case "lady":
				this._addLadyIllustToStoryScene();
				break;
			case "boy":
				this._addBoyIllustToStoryScene();
				break;
			case "girl":
				this._addGirlIllustToStoryScene();
				break;
		}
	},
	// パレットの中にイラストを表示しない
	_removeIllust : function(illustType) {
		switch(illustType) {
			case "man":
				this._removeManIllustFromStoryScene();
				break;
			case "lady":
				this._removeLadyIllustFromStoryScene();
				break;
			case "boy":
				this._removeBoyIllustFromStoryScene();
				break;
			case "girl":
				this._removeGirlIllustFromStoryScene();
				break;
		}
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removeFromStoryScene();
	},
})