var PaletteCloseButton = enchant.Class.create(StorySceneSprite, {
	initialize : function(paletteType, path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._paletteType = paletteType;
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[STORY_PALETTECLOSEBUTTON_ON._path];
		} else {
			this.image = core.assets[STORY_PALETTECLOSEBUTTON_OFF._path];
		}
	},

	// クリック処理
	ontouchend : function() {
		this._parent._setNotDarkScreenBackground();
		this._parent._setCanPushMusicButton();
		this._parent._setCanPushSaveButton();
		this._parent._setCanPushLoadButton();
		this._parent._setCanPushAllIllustButton();
		this._parent._setCanPushRemoveButton();
		switch(this._paletteType) {
			case "item":
				this._parent._removeFromStoryScene();
				this._parent._paletteIllust._removeIllust("food");
				this._parent._paletteIllust._removeIllust("fashion");
				this._parent._paletteIllust._removeIllust("interior");
				this._parent._paletteIllust._removeIllust("goods");
				break;
			default:
				var illustType = this._parent._propertyButton._getPushButton();
				this._parent._removeFromStoryScene();
				this._parent._paletteIllust._removeIllust(illustType);
				break;
		}
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
			this._setOnOffImage("on");
		} else {
			this._setOnOffImage("off");
		}
	},
})