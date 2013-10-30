var PaletteCloseButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._parent = parent;
	},

	ontouchend : function() {
		this._parent._setNotDarkScreenBackground();
		this._parent._setCanPushMusicButton();
		this._parent._setCanPushAllIllustButton();
		this._parent._setCanPushRemoveButton();
		var illustType = this._parent._propertyButton._getPushButton();
		this._parent._removeFromStoryScene();
		this._parent._paletteIllust._removeIllust(illustType);
	},
})