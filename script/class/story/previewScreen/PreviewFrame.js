var PreviewFrame = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._parent = parent;
	},

	// フレーム全体を物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},
	// フレーム全体を物語作成画面から削除する
	_removeFromStoryScene : function() {
		storyScene.removeChild(this);
	},

	// 引数のx座標値が画像のx座標上にあるかチェック
	_mouseOverX : function(x, leftX, rightX, leftOffset, rightOffset) {
		if(leftX + leftOffset <= x && x <= rightX + rightOffset) {
			return true;
		} else {
			return false;
		}
	},
	// 引数のy座標値が画像のy座標上にあるかチェック
	_mouseOverY : function(y, topY, bottomY, topOffset, bottomOffset) {
		if(topY + topOffset <= y && y <= bottomY + bottomOffset) {
			return true;
		} else {
			return false;
		}
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
			var mouseOverX = this._mouseOverX(clientX, leftX, rightX, leftOffset, rightOffset);
			var mouseOverY = this._mouseOverY(clientY, topY, bottomY, topOffset, bottomOffset);
			if(mouseOverX === true && mouseOverY === true) {
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