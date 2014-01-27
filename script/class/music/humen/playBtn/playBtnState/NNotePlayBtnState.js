var NNotePlayBtnState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 初期化メソッド
		this._parent._setTouchEnabled(false);
		this._parent._setOpacity(0.5);
	},

	_touchEndBehavior : function() {

	},

	_frameBehavior : function() {
		if(this._parent._getNoteCount() > 0) {
			this._parent._setState(new NPPlayBtnState(this._parent));
		}
	},
})