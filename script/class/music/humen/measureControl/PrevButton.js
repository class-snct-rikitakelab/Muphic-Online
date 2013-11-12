var PrevButton = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._state = new NonPrevState(this);
	},

	// ステートセッタ
	_setState : function(state) {
		this._state = state;
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[MUSIC_PREVBUTTON_ON._path];
		} else {
			this.image = core.assets[MUSIC_PREVBUTTON_OFF._path];
		}
	},

	// クリック処理
	ontouchend : function() {
		var oldStartMeasure = this._parent._getStartMeasure();
		var newStartMeasure = oldStartMeasure - 1;
		this._parent._setStartMeasure(newStartMeasure);
		this._parent._setMeasureNumber(newStartMeasure, newStartMeasure + 1, newStartMeasure + 2);
		this._parent._scrollScoreSheetPrev();
		this._parent._removeMeasureNote(oldStartMeasure + 2);
		this._parent._addMeasureNote(newStartMeasure);
		var hasNextMeasure = this._parent._checkHasNextMeasure();
		this._parent._setNextButtonState(hasNextMeasure);
		var hasPrevMeasure = this._parent._checkHasPrevMeasure();
		this._parent._setPrevButtonState(hasPrevMeasure);
	},

	// フレーム処理
	onenterframe : function() {
		this._state._stateBehavior();
	},
})