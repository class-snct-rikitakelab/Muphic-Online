var PaletteCloseButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent){

		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._parent = parent;
	},

	ontouchend : function() {
		this._parent._parent._musicButton._setTouchEnable(true);
		this._parent._parent._musicButton._setDarkImage(false);
		this._parent._parent._illustButton._humanButton._setTouchEnable(true);
		this._parent._parent._illustButton._humanButton._setDarkImage(false);
		this._parent._parent._illustButton._animalButton._setTouchEnable(true);
		this._parent._parent._illustButton._animalButton._setDarkImage(false);
		this._parent._parent._illustButton._itemButton._setTouchEnable(true);
		this._parent._parent._illustButton._itemButton._setDarkImage(false);
		this._parent._parent._illustButton._backgroundButton._setTouchEnable(true);
		this._parent._parent._illustButton._backgroundButton._setDarkImage(false);
		var property = this._parent._propertyButton._getPushButton();
		this._parent._removeFromStoryScene();
		this._parent._paletteIllust._removeIllust(property);
	},

})