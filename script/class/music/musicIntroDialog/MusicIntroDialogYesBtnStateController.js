var MusicIntroDialogYesBtnStateController = enchant.Class.create(StateController, {
	// コンストラクタ
	initialize : function(parent) {
		StateController.call(this, parent);
	},

	_setWaitPushState : function() {
		this._object._setState(new WaitPushMusicIntroDialogYesBtnState(this._object));
	},
})