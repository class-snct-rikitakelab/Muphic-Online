var NextButton = enchant.Class.create(MusicSceneSpriteHasState, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSpriteHasState.call(this, path, width, height, x, y, parent);
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[MUSIC_NEXTBUTTON_ON._path];
		} else {
			this.image = core.assets[MUSIC_NEXTBUTTON_OFF._path];
		}
	},
	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[MUSIC_NEXTBUTTON_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[MUSIC_NEXTBUTTON_OFF._path];
		}
	},

	// クリック処理
	ontouchend : function() {
		var oldStartMeasure = this._parent._getStartMeasure();
		var newStartMeasure = oldStartMeasure + 1;
		this._state._touchEndBehavior(oldStartMeasure, newStartMeasure);
	},

	// フレーム処理
	onenterframe : function() {
		this._state._frameBehavior();
	},

	// 親メソッド
	// 開始小節セッタ
	_setStartMeasure : function(startMeasure) {
		this._parent._setStartMeasure(startMeasure);
	},
	// 小節番号セッタ
	_setMeasureNumber : function(number1, number2, number3) {
		this._parent._setMeasureNumber(number1, number2, number3);
	},
	// 楽譜全体を次に進める
	_scrollScoreSheetNext : function(measure) {
		this._parent._scrollScoreSheetNext(measure);
	},
	// 指定した小節の音符全体を加える
	_addMeasureNote : function(measure) {
		this._parent._addMeasureNote(measure);
	},
	// 指定した小節の音符全体を消す
	_removeMeasureNote : function(measure) {
		this._parent._removeMeasureNote(measure);
	},
	// これ以上小節を譜めくり出来るか
	_checkHasNextMeasure : function() {
		return this._parent._checkHasNextMeasure();
	},
	// これ以上小節を譜戻し出来るか
	_checkHasPrevMeasure : function() {
		return this._parent._checkHasPrevMeasure();
	},
	// 譜めくりボタンのステートセッタ
	_setNextButtonState : function(hasNextMeasure) {
		this._parent._setNextButtonState(hasNextMeasure);
	},
	// 譜戻しボタンのステートセッタ
	_setPrevButtonState : function(hasPrevMeasure) {
		this._parent._setPrevButtonState(hasPrevMeasure);
	},
})