var MeasureBoardStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setDefaultState : function() {
		this._object._setState(new DefaultMeasureBoardState(this._object));
	},
})