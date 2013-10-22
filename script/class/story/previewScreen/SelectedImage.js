var SelectedImage = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this.opacity = 0.5;
		this._path = path;
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
		var path = this._path;
		var width = this.width;
		var height = this.height;
		var x = event.x;
		var y = event.y;
		this._parent._createIllust(path, width, height, x, y);
		this._parent._addToStoryScene();
	},
})