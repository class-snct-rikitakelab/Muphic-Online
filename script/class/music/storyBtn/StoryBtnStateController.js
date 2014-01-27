var StoryBtnStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNPState : function() {
		this._object._setState(new NPStoryBtnState(this._object));
	},
	_setPState : function() {
		this._object._setState(new PStoryBtnState(this._object));
	},
})