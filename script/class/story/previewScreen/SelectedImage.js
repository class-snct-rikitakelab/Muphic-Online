var SelectedImage = enchant.Class.create(enchant.Sprite, {
	initialize : function(imagePath, focusPath, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[imagePath];
		this.x = x;
		this.y = y;
		this.opacity = 0.5;
		this._imagePath = imagePath;
		this._focusPath = focusPath;
		this._parent = parent;
	},

	// x座標をセット
	_setX : function(x) {
		this.x = x;
	},
	// y座標をセット
	_setY : function(y) {
		this.y = y;
	},

	// 半透明画像を物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},
	// 半透明画像を物語作成画面から削除する
	_removeFromStoryScene : function() {
		storyScene.removeChild(this);
	},

	// クリック時の処理
	ontouchend : function(event) {
		var imagePath = this._imagePath;
		var focusPath = this._focusPath;
		var width = this.width;
		var height = this.height;
		var x = event.x;
		var y = event.y;
		this._parent._createIllust(imagePath, focusPath, width, height, x, y);
		this._parent._addToStoryScene();
		this._parent._destroySelectedIllust();
	},
})