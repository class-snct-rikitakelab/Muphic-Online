var PaletteImageFocus = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._parent = parent;
	},

	// フォーカスを非表示
	_removeFocus : function() {
		storyScene.removeChild(this);
	},

	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removePalette();
	},

	// マウスクリック時の処理
	ontouchend : function() {
		this._removeFocus();
		this._parent._createSelectedIllust();
		this._parent._removePalette();
	},
})