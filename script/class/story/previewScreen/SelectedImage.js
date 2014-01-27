var SelectedImage = enchant.Class.create(StorySceneSprite, {
	initialize : function(imagePath, focusPath, width, height, x, y, parent) {
		StorySceneSprite.call(this, imagePath, width, height, x, y, parent);
		this.opacity = 0.5;
		// 以下, このクラスのプロパティ
		this._imagePath = imagePath;
		this._focusPath = focusPath;
	},

	// クリック時の処理
	ontouchend : function() {
		var imagePath = this._imagePath;
		var focusPath = this._focusPath;
		var width = this.width;
		var height = this.height;
		var x;
		var y;
		var leftX = PREVIEWSCREEN_LEFT_X;
		var rightX = PREVIEWSCREEN_RIGHT_X;
		var topY = PREVIEWSCREEN_TOP_Y;
		var bottomY = PREVIEWSCREEN_BOTTOM_Y;
		var leftOffset = 10;
		var rightOffset = - 10;
		var topOffset = 10;
		var bottomOffset = - 10;
		var selectedIllustWidth = this.width;
		var selectedIllustHeight = this.height;
		if((clientX >= rightX + rightOffset - selectedIllustWidth && clientX <= rightX + rightOffset) && (clientY >= bottomY + bottomOffset - selectedIllustHeight && clientY <= bottomY + bottomOffset)) {
			x = rightX + rightOffset - selectedIllustWidth;
			y = bottomY + bottomOffset - selectedIllustHeight;
		} else if(clientY >= bottomY + bottomOffset - selectedIllustHeight && clientY <= bottomY + bottomOffset) {
			x = clientX;
			y = bottomY + bottomOffset - selectedIllustHeight;
		} else if(clientX >= rightX + rightOffset - selectedIllustWidth && clientX <= rightX + rightOffset) {
			x = rightX + rightOffset - selectedIllustWidth;
			y = clientY;
		} else {
			x = clientX;
			y = clientY;
		}
		this._parent._removeSelectedIllustFromStoryScene();
		this._parent._destroySelectedIllust();
		this._parent._createIllust(imagePath, focusPath, width, height, x, y);
		this._parent._addOneIllust(this._parent._illust.length - 1);
		this._parent._setCanPushMusicButton();
		this._parent._setCanPushSaveButton();
		this._parent._setCanPushLoadButton();
		this._parent._setCanPushAllIllustButton();
		this._parent._setCanPushRemoveButton();
		this._parent._setHaveSelectedIllust(false);
	},
})