var PreviewScreenData = enchant.Class.create({
	initialize : function() {
		this._humansCount = 0;
		this._animalsCount = 0;
		this._itemsCount = 0;
	},

	_humansCountIncrement : function() {
		this._humansCount++;
	},

	_animalsCountIncrement : function() {
		this._animalsCount++;
	},

	_itemsCountIncrement : function() {
		this._itemsCount++;
	},
})