var PaletteImage = enchant.Class.create(enchant.Sprite, {
	initialize : function(imagePath, removeFocusPath, width, height, minX, minY, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[imagePath];
		this.x = minX;
		this.y = minY;
		this.opacity = 0.5;
		this._imagePath = imagePath;
		this._removeFocusPath = removeFocusPath;
		this._minX = minX;
		this._maxX = minX + this.width;
		this._minY = minY;
		this._maxY = minY + this.height;
		this._parent = parent;
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function() {
		var imagePath = this._imagePath;
		var removeFocusPath = this._removeFocusPath;
		var width = this.width;
		var height = this.height;
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removePalette();
	},

	_setOpacity : function(opacity) {
		this.opacity = opacity;
	},

	// 引数のx座標値が画像のx座標上にあるかチェック
	_mouseOverX : function(x) {
		if(this._minX <= x && x <= this._maxX) {
			return true;
		} else {
			return false;
		}
	},

	// 引数のy座標値が画像のy座標上にあるかチェック
	_mouseOverY : function(y) {
		if(this._minY <= y && y <= this._maxY) {
			return true;
		} else {
			return false;
		}
	},

	// クリック処理
	ontouchend : function() {
		this._createSelectedIllust();
		this._removePalette();
	},

	// フレーム処理
	onenterframe : function() {
		var mouseOverX = this._mouseOverX(clientX);
		var mouseOverY = this._mouseOverY(clientY);
		if(mouseOverX === true && mouseOverY === true) {
			this._setOpacity(1.0);
		} else {
			this._setOpacity(0.3);
		}
	},
})