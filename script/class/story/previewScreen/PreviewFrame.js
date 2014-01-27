var PreviewFrame = enchant.Class.create(StorySceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
	},

	// フレーム処理
	onenterframe : function() {
		var selectedIllust = this._parent._selectedIllust;
		var removeButtonPush = this._parent._removeButton._isPush;
		if(selectedIllust !== null) {
			var leftX = PREVIEWSCREEN_LEFT_X;
			var rightX = PREVIEWSCREEN_RIGHT_X;
			var topY = PREVIEWSCREEN_TOP_Y;
			var bottomY = PREVIEWSCREEN_BOTTOM_Y;
			var leftOffset = 10;
			var rightOffset = - 10;
			var topOffset = 10;
			var bottomOffset = - 10;
			var mOverX = mouseOverX(clientX, leftX, rightX, leftOffset, rightOffset);
			var mOverY = mouseOverY(clientY, topY, bottomY, topOffset, bottomOffset);
			if(mOverX === true && mOverY === true) {
				var selectedIllustWidth = this._parent._selectedIllust.width;
				var selectedIllustHeight = this._parent._selectedIllust.height;
				if((clientX >= rightX + rightOffset - selectedIllustWidth && clientX <= rightX + rightOffset) && (clientY >= bottomY + bottomOffset - selectedIllustHeight && clientY <= bottomY + bottomOffset)) {
					this._parent._setSelectedIllustX(rightX + rightOffset - selectedIllustWidth);
					this._parent._setSelectedIllustY(bottomY + bottomOffset - selectedIllustHeight);
				} else if(clientY >= bottomY + bottomOffset - selectedIllustHeight && clientY <= bottomY + bottomOffset) {
					this._parent._setSelectedIllustX(clientX);
					this._parent._setSelectedIllustY(bottomY + bottomOffset - selectedIllustHeight);
				} else if(clientX >= rightX + rightOffset - selectedIllustWidth && clientX <= rightX + rightOffset) {
					this._parent._setSelectedIllustX(rightX + rightOffset - selectedIllustWidth);
					this._parent._setSelectedIllustY(clientY);
				} else {
					this._parent._setSelectedIllustX(clientX);
					this._parent._setSelectedIllustY(clientY);
				}
				this._parent._addSelectedIllustToStoryScene();
				this._parent._setHaveSelectedIllust(true);
			} else {
				var haveSelectedIllust = this._parent._getHaveSelectedIllust();
				if(haveSelectedIllust === true) {
					this._parent._addSelectedIllustToStoryScene();
				} else {
					this._parent._removeSelectedIllustFromStoryScene();
				}
			}
		}
	},
})