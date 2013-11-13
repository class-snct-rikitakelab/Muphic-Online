var FadeOutNoteState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 以下, このクラスのプロパティ
		this._jumpY = this._parent.y;
		this._walkCount = 0;
		this._opacity = 1.0;
	},

	_touchEndBehavior : function() {

	},

	_frameBehavior : function() {
		this._noteAnimation();
		this._noteFadeOut();
	},

	// 音符のアニメーション
	_noteAnimation : function() {
		if(this._walkCount === JUMP_CYCLE * 2) {
			this._jumpY += JUMP_HIGH;
			this._parent._setY(this._jumpY);
			this._walkCount = 0;
		} else if(this._walkCount === JUMP_CYCLE) {
			this._jumpY -= JUMP_HIGH;
			this._parent._setY(this._jumpY);
			this._walkCount++;
		} else {
			this._walkCount++;
		}
	},
	// 音符のフェードアウト
	_noteFadeOut : function() {
		if(this._opactiy === 0.1) {
			this._opacity = 0.0;
			this._parent._setOpacity(this._opacity);
		} else if(this._opacity > 0.1) {
			this._opacity -= 0.1;
			this._parent._setOpacity(this._opacity);
		}
	},
})