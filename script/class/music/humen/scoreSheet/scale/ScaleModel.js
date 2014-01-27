var ScaleModel = enchant.Class.create({
	// コンストラクタ
	initialize : function(scale, parent) {
		this._scale = scale;
		this._parent = parent;
	},

	// ゲッタ
	_getScale : function() {
		return this._scale;
	},
})