var PreviewBackground = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._minX = x + STORY_LEFT_PREVIEWFRAME._width;
		this._maxX = x + width - STORY_RIGHT_PREVIEWFRAME._width;
		this._minY = y + STORY_TOP_PREVIEWFRAME._height;
		this._maxY = y + height - STORY_BOTTOM_PREVIEWFRAME._height;
		this._parent = parent;
	},

	// 画像をセット
	_setBackgroundImage : function(path) {
		this.image = core.assets[path];
	},

	// 物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},
	// 物語作成画面から削除する
	_removeFromStoryScene : function() {
		storyScene.removeChild(this);
	},

	// 引数のx座標値が画像のx座標上にあるかチェック
	_mouseOverX : function(x, leftOffset, rightOffset) {
		if(this._minX + leftOffset <= x && x <= this._maxX + rightOffset) {
			return true;
		} else {
			return false;
		}
	},
	// 引数のy座標値が画像のy座標上にあるかチェック
	_mouseOverY : function(y, topOffset, bottomOffset) {
		if(this._minY + topOffset <= y && y <= this._maxY + bottomOffset) {
			return true;
		} else {
			return false;
		}
	},

	// フレーム処理
	onenterframe : function() {
		if(this._parent._selectedIllust === null) {
			return;
		}
		var leftOffset = 0;
		var rightOffset = -this._parent._selectedIllust.width;
		var topOffset = 0;
		var bottomOffset = -this._parent._selectedIllust.height;
		var mouseOverX = this._mouseOverX(clientX, leftOffset, rightOffset);
		var mouseOverY = this._mouseOverY(clientY, topOffset, bottomOffset);
		if(mouseOverX === true && mouseOverY === true) {
			this._parent._setSelectedIllustX(clientX);
			this._parent._setSelectedIllustY(clientY);
			this._parent._addSelectedIllustToStoryScene();
		} else {
			this._parent._removeSelectedIllustFromStoryScene();
		}
	},
})