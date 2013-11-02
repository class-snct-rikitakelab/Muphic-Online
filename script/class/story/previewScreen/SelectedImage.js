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
		this._parent._setCanPushAllIllustButton();
		this._parent._setCanPushRemoveButton();
		this._parent._setHaveSelectedIllust(false);
	},
})