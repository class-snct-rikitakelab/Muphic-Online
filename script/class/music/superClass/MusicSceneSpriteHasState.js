var MusicSceneSpriteHasState = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		this._state = null;
		this._beforePlayingState = null;
		this._stateController = null;
	},

	// ゲッタ群
	_getState : function() {
		return this._state;
	},
	_getBeforePlayingState : function() {
		return this._beforePlayingState;
	},
	_getStateController : function() {
		return this._stateController;
	},
	// セッタ群
	_setState : function(state) {
		this._state = state;
	},
	_setBeforePlayingState : function(beforePlayingState) {
		this._beforePlayingState = beforePlayingState;
	},
	_setStateController : function(stateController) {
		this._stateController = stateController;
	},
})