var PaletteCloseButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(paletteType, path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._paletteType = paletteType;
		this._parent = parent;
	},

	ontouchend : function() {
		this._parent._setNotDarkScreenBackground();
		this._parent._setCanPushMusicButton();
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
})