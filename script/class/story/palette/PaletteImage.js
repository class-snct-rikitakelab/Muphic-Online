var PaletteImage = enchant.Class.create(enchant.Sprite, {
	initialize : function(imagePath, focusPath, width, height, minX, minY, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[imagePath];
		this.x = minX;
		this.y = minY;
		this._imagePath = imagePath;
		this._minX = minX;
		this._maxX = minX + this.width;
		this._minY = minY;
		this._maxY = minY + this.height;
		this._focus = new PaletteImageFocus(focusPath, this.width, this.height, this._minX, this._minY, this);
		this._parent = parent;
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function() {
		var path = this._imagePath;
		var width = this.width;
		var height = this.height;
		this._parent._createSelectedIllust(path, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removePalette();
	},

	// フォーカス表示処理
	_showFocus : function() {
		storyScene.addChild(this._focus);
	},

	// フォーカス非表示処理
	_removeFocus : function() {
		if(this._focus.scene === storyScene) {
			storyScene.removeChild(this._focus);
		}
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

	// フレーム処理
	onenterframe : function() {
		var mouseOverX = this._mouseOverX(clientX);
		var mouseOverY = this._mouseOverY(clientY);
		if(mouseOverX === true && mouseOverY === true) {
			this._showFocus();
		} else {
			this._removeFocus();
		}
	},
})