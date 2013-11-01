var ItemPaletteIllust = enchant.Class.create({
	initialize : function(parent) {
		this._foodIllust = null;
		this._fashionIllust = null;
		this._interiorIllust = null;
		this._goodslIllust = null;
		this._parent = parent;
	},

	// たべものイラスト全体のオブジェクトを生成
	_createFoodIllust : function() {
		this._foodIllust = new FoodIllust(this);
		this._foodIllust._createFoodImages();
		this._foodIllust._addFoodImagesToGroup();
	},
	// ファッションイラスト全体のオブジェクトを生成
	_createFashionIllust : function() {
		this._fashionIllust = new FashionIllust(this);
		this._fashionIllust._createFashionImages();
		this._fashionIllust._addFashionImagesToGroup();
	},
	// インテリアイラスト全体のオブジェクトを生成
	_createInteriorIllust : function() {
		this._interiorIllust = new InteriorIllust(this);
		this._interiorIllust._createInteriorImages();
		this._interiorIllust._addInteriorImagesToGroup();
	},
	// グッズイラスト全体のオブジェクトを生成
	_createGoodsIllust : function() {
		this._goodsIllust = new GoodsIllust(this);
		this._goodsIllust._createGoodsImages();
		this._goodsIllust._addGoodsImagesToGroup();
	},

	// たべものイラスト全体を物語作成画面へ加える
	_addFoodIllustToStoryScene : function() {
		storyScene.addChild(this._foodIllust);
	},
	// ファッションイラスト全体を物語作成画面へ加える
	_addFashionIllustToStoryScene : function() {
		storyScene.addChild(this._fashionIllust);
	},
	// インテリアイラスト全体を物語作成画面へ加える
	_addInteriorIllustToStoryScene : function() {
		storyScene.addChild(this._interiorIllust);
	},
	// グッズイラスト全体を物語作成画面へ加える
	_addGoodsIllustToStoryScene : function() {
		storyScene.addChild(this._goodsIllust);
	},

	// たべものイラスト全体を物語作成画面から削除する
	_removeFoodIllustFromStoryScene : function() {
		storyScene.removeChild(this._foodIllust);
	},
	// ファッションイラスト全体を物語作成画面から削除する
	_removeFashionIllustFromStoryScene : function() {
		storyScene.removeChild(this._fashionIllust);
	},
	// インテリアイラスト全体を物語作成画面から削除する
	_removeInteriorIllustFromStoryScene : function() {
		storyScene.removeChild(this._interiorIllust);
	},
	// グッズイラスト全体を物語作成画面から削除する
	_removeGoodsIllustFromStoryScene : function() {
		storyScene.removeChild(this._goodsIllust);
	},

	// パレットの中にイラストを表示する
	_addIllust : function(illustType) {
		switch(illustType) {
			case "food":
				this._addFoodIllustToStoryScene();
				break;
			case "fashion":
				this._addFashionIllustToStoryScene();
				break;
			case "interior":
				this._addInteriorIllustToStoryScene();
				break;
			case "goods":
				this._addGoodsIllustToStoryScene();
				break;
		}
	},
	// パレットの中にイラストを表示しない
	_removeIllust : function(illustType) {
		switch(illustType) {
			case "food":
				this._removeFoodIllustFromStoryScene();
				break;
			case "fashion":
				this._removeFashionIllustFromStoryScene();
				break;
			case "interior":
				this._removeInteriorIllustFromStoryScene();
				break;
			case "goods":
				this._removeGoodsIllustFromStoryScene();
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