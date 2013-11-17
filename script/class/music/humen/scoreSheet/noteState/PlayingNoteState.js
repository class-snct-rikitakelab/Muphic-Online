var JUMP_HIGH = 3;
var JUMP_CYCLE = 8;
var HOUSE_X = 250;
var APPEAR_LINE_X = 960;

var PlayingNoteState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 以下, このクラスのプロパティ
		var measure = this._parent._measure;
		var beat = this._parent._beat;
		this._moveX = MEASURE_WIDTH * measure + BEAT_WIDTH * beat;
		this._jumpY = this._parent.y;
		this._walkCount = 0;
	},

	_touchEndBehavior : function() {

	},

	_frameBehavior : function() {
		this._moveToLeft();
		this._noteAnimation();
		this._passAppearLine();
		this._passScaleHouse();
	},

	// x座標を移動
	_moveToLeft : function() {
		this._moveX -= SPEED;
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
	// 音符が姿を現すラインの通過チェック
	_passAppearLine : function() {
		if(this._moveX <= APPEAR_LINE_X) {
			this._showNote();
		} else {
			this._hideNote();
		}
	},
	// 音符が姿を消していくラインの通過チェック
	_passScaleHouse : function() {
		if(this._moveX <= HOUSE_X) {
			this._parent._play();
			this._parent._setState(new FadeOutNoteState(this._parent));
		}
	},
	// 音符を表示
	_showNote : function() {
		this._parent._setVisible(true);
	},
	// 音符を非表示
	_hideNote : function() {
		this._parent._setVisible(false);
	},
})