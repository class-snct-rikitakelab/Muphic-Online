var ItemPaletteImage = enchant.Class.create(StorySceneSprite, {
	initialize : function(imagePath, thumbnailPath, removeFocusPath, imageWidth, imageHeight, thumbnailWidth, thumbnailHeight, x, y, parent) {
		StorySceneSprite.call(this, thumbnailPath, thumbnailWidth, thumbnailHeight, x, y, parent);
		this.opacity = 0.5;
		// 以下, このクラスのプロパティ
		this._imagePath = imagePath;
		this._imageWidth = imageWidth;
		this._imageHeight = imageHeight;
		this._removeFocusPath = removeFocusPath;
	},

	// 選択された半透明画像のオブジェクト生成を親に依頼
	_createSelectedIllust : function() {
		var imagePath = this._imagePath;
		var removeFocusPath = this._removeFocusPath;
		var width = this._imageWidth;
		var height = this._imageHeight;
		this._parent._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
	// パレットの削除を親に依頼
	_removePalette : function() {
		this._parent._removePalette();
	},

	// クリック処理
	ontouchend : function() {
		this._createSelectedIllust();
		this._removePalette();
	},

	// フレーム処理
	onenterframe : function() {
		var leftX = this.x;
		var rightX = this.x + this.width;
		var topY = this.y;
		var bottomY = this.y + this.height;
		var mOverX = mouseOverX(clientX, leftX, rightX, 0, 0);
		var mOverY = mouseOverY(clientY, topY, bottomY, 0, 0);
		if(mOverX === true && mOverY === true) {
			this._setOpacity(1.0);
		} else {
			this._setOpacity(0.3);
		}
	},
})