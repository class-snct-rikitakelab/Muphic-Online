var MusicRemoveBtnStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setDarknessState : function() {
		this._object._setState(new DarknessState(this._object));
	},
	_setNPushState : function() {
		this._object._setState(new NPushRemoveState(this._object));
	},
	_setPushState : function() {
		this._object._setState(new PushRemoveState(this._object));
	},
	_setSwitchedOffState : function() {
		this._object._setState(new SwitchedOffRemoveState(this._object));
	},
	_setSwitchedOnState : function() {
		this._object._setState(new SwitchedOnRemoveState(this._object));
	},
	_setNPState : function() {
		this._object._setState(new (this._object._getBeforePlayingState())(this._object));
	},
	_setPState : function() {
		this._object._setBeforePlayingState(this._object._getState().constructor);
		this._object._setState(new PMusicRemoveBtnState(this._object));
	},
})