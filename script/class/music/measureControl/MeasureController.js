var NEXTBUTTON_X = 860;
var NEXTBUTTON_Y = 651;
var PREVBUTTON_X = 130;
var PREVBUTTON_Y = 651;
var MEASUREBOARD_1_X = 354;
var MEASUREBOARD_1_Y = 204;
var MEASUREBOARD_2_X = 593;
var MEASUREBOARD_2_Y = 204;
var MEASUREBOARD_3_X = 832;
var MEASUREBOARD_3_Y = 204;

var MeasureController = enchant.Class.create({
	initialize : function(parent) {
		this._nextButton = null;
		this._prevButton = null;
		this._measureBoard = new Array(3);
		this._startMeasure = 1;
		this._parent = parent;
	},

	// 譜めくりボタンのオブジェクトを生成
	_createNextButton : function() {
		var path = MUSIC_NEXTBUTTON_OFF._path;
		var width = MUSIC_NEXTBUTTON_OFF._width;
		var height = MUSIC_NEXTBUTTON_OFF._height;
		var x = NEXTBUTTON_X;
		var y = NEXTBUTTON_Y;
		this._nextButton = new NextButton(path, width, height, x, y, this);
		this._nextButton._addToMusicScene();
	},
	// 譜戻しボタンのオブジェクトを生成
	_createPrevButton : function() {
		var path = MUSIC_PREVBUTTON_OFF._path;
		var width = MUSIC_PREVBUTTON_OFF._width;
		var height = MUSIC_PREVBUTTON_OFF._height;
		var x = PREVBUTTON_X;
		var y = PREVBUTTON_Y;
		this._prevButton = new PrevButton(path, width, height, x, y, this);
		this._prevButton._addToMusicScene();
	},
	// 小節ボードのオブジェクトを生成
	_createMeasureBoard : function() {
		var path = MUSIC_MEASUREBOARD._path;
		var width = MUSIC_MEASUREBOARD._width;
		var height = MUSIC_MEASUREBOARD._height;
		this._measureBoard[0] = new MeasureBoard(1, path, width, height, MEASUREBOARD_1_X, MEASUREBOARD_1_Y, this);
		this._measureBoard[0]._addToMusicScene();
		this._measureBoard[1] = new MeasureBoard(2, path, width, height, MEASUREBOARD_2_X, MEASUREBOARD_2_Y, this);
		this._measureBoard[1]._addToMusicScene();
		this._measureBoard[2] = new MeasureBoard(3, path, width, height, MEASUREBOARD_3_X, MEASUREBOARD_3_Y, this);
		this._measureBoard[2]._addToMusicScene();
	},
	// 小節ボードの小節番号のオブジェクトを生成
	_createMeasureNumber : function(number1, number2, number3) {
		this._measureBoard[0]._createMeasureNumber(number1);
		this._measureBoard[1]._createMeasureNumber(number2);
		this._measureBoard[2]._createMeasureNumber(number3);
	},

	// ゲッタ群
	// 開始小節ゲッタ
	_getStartMeasure : function() {
		return this._startMeasure;
	},
	// セッタ群
	// 小節ボードの小節番号セッタ
	_setMeasureNumber : function(number1, number2, number3) {
		this._measureBoard[0]._setMeasureNumber(number1);
		this._measureBoard[1]._setMeasureNumber(number2);
		this._measureBoard[2]._setMeasureNumber(number3);
	},
	// 開始小節セッタ
	_setStartMeasure : function(startMeasure) {
		this._startMeasure = startMeasure;
	},

	// これ以上小節を譜めくり出来るか
	_checkHasNextMeasure : function() {
		if(this._startMeasure === MEASURE_MAX - 2) {
			return false;
		} else {
			return true;
		}
	},
	// これ以上小節を譜戻し出来るか
	_checkHasPrevMeasure : function() {
		if(this._startMeasure === 1) {
			return false;
		} else {
			return true;
		}
	},

	// 楽譜全体を次に進める
	_scrollScoreSheetNext : function(measure) {
		this._parent._scrollScoreSheetNext(measure);
	},
	// 楽譜全体を前に戻す
	_scrollScoreSheetPrev : function(measure) {
		this._parent._scrollScoreSheetPrev(measure);
	},
	// 指定した小節の音符全体を加える
	_addMeasureNote : function(measure) {
		this._parent._addMeasureNote(measure);
	},
	// 指定した小節の音符全体を消す
	_removeMeasureNote : function(measure) {
		this._parent._removeMeasureNote(measure);
	},

	// 譜めくりボタンのステートセッタ
	_setNextButtonState : function(hasNextMeasure) {
		if(hasNextMeasure) {
			this._nextButton._setState(new HasNextState(this._nextButton));
		} else {
			this._nextButton._setState(new NonNextState(this._nextButton));
		}
	},
	// 譜めくりボタンの再生ステートセッタ
	_setPlayingNextButtonState : function() {
		this._nextButton._setBeforePlayingState(this._nextButton._state);
		this._nextButton._setState(new PlayingNextButtonState(this._nextButton));
	},
	// 譜めくりボタンの非再生ステートセッタ
	_setNonPlayingNextButtonState : function() {
		this._nextButton._setState(this._nextButton._beforePlayingState);
	},
	// 譜戻しボタンのステートセッタ
	_setPrevButtonState : function(hasPrevMeasure) {
		if(hasPrevMeasure) {
			this._prevButton._setState(new HasPrevState(this._prevButton));
		} else {
			this._prevButton._setState(new NonPrevState(this._prevButton));
		}
	},
	// 譜戻しボタンの再生ステートセッタ
	_setPlayingPrevButtonState : function() {
		this._prevButton._setBeforePlayingState(this._prevButton._state);
		this._prevButton._setState(new PlayingPrevButtonState(this._prevButton));
	},
	// 譜戻しボタンの非再生ステートセッタ
	_setNonPlayingPrevButtonState : function() {
		this._prevButton._setState(this._prevButton._beforePlayingState);
	},
})