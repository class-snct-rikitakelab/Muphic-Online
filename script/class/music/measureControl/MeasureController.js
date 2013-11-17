var NEXTBUTTON_X = 860;
var NEXTBUTTON_Y = 651;
var PREVBUTTON_X = 130;
var PREVBUTTON_Y = 651;
var MEASUREBOARD_X = [ 354, 593, 832 ];
var MEASUREBOARD_Y = [ 204, 204, 204 ];

var MeasureController = enchant.Class.create({
	initialize : function(parent) {
		this._nextButton = null;
		this._nextButtonStateController = null;
		this._prevButton = null;
		this._prevButtonStateController = null;
		this._measureBoard = new Array(3);
		this._measureBoardStateController = new Array(3);
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
		this._nextButtonStateController = new NextButtonStateController(this);
		this._nextButton._setStateController(this._nextButtonStateController);
		this._nextButtonStateController._setObject(this._nextButton);
		this._setDarknessNextButtonState();
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
		this._prevButtonStateController = new PrevButtonStateController(this);
		this._prevButton._setStateController(this._prevButtonStateController);
		this._prevButtonStateController._setObject(this._prevButton);
		this._setDarknessPrevButtonState();
		this._prevButton._addToMusicScene();
	},
	// 小節ボードのオブジェクトを生成
	_createMeasureBoard : function() {
		var path = MUSIC_MEASUREBOARD._path;
		var width = MUSIC_MEASUREBOARD._width;
		var height = MUSIC_MEASUREBOARD._height;
		for(var i = 0; i < this._measureBoard.length; i++) {
			this._measureBoard[i] = new MeasureBoard(i + 1, path, width, height, MEASUREBOARD_X[i], MEASUREBOARD_Y[i], this);
			this._measureBoardStateController[i] = new MeasureBoardStateController(this);
			this._measureBoard[i]._setStateController(this._measureBoardStateController[i]);
			this._measureBoardStateController[i]._setObject(this._measureBoard[i]);
			this._setDarknessMeasureBoardState(i);
			this._measureBoard[i]._addToMusicScene();
		}
	},
	// 小節ボードの小節番号のオブジェクトを生成
	_createMeasureNumber : function(number1, number2, number3) {
		this._measureBoard[0]._createMeasureNumber(number1);
		this._measureBoard[1]._createMeasureNumber(number2);
		this._measureBoard[2]._createMeasureNumber(number3);
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

	// ゲッタ
	_getStartMeasure : function() {
		return this._startMeasure;
	},
	// セッタ
	_setStartMeasure : function(startMeasure) {
		this._startMeasure = startMeasure;
	},
	_setMeasureNumber : function(number1, number2, number3) {
		this._measureBoard[0]._setMeasureNumber(number1);
		this._measureBoard[1]._setMeasureNumber(number2);
		this._measureBoard[2]._setMeasureNumber(number3);
	},

	// 子メソッド
	// 小節ボードへのステートセッタ
	_setDarknessMeasureBoardState : function(index) {
		this._measureBoardStateController[index]._setDarknessState();
	},
	_setDefaultMeasureBoardState : function() {
		for(var i = 0; i < this._measureBoard.length; i++) {
			this._measureBoardStateController[i]._setDefaultState();
		}
	},
	// 譜めくりボタンへのステートセッタ
	_setDarknessNextButtonState : function() {
		this._nextButtonStateController._setDarknessState();
	},
	_setNextButtonState : function(hasNextMeasure) {
		if(hasNextMeasure) {
			this._nextButtonStateController._setHasNextState();
		} else {
			this._nextButtonStateController._setNonNextState();
		}
	},
	_setNonPlayingNextButtonState : function() {
		this._nextButtonStateController._setNonPlayingState();
	},
	_setPlayingNextButtonState : function() {
		this._nextButtonStateController._setPlayingState();
	},
	// 譜戻しボタンへのステートセッタ
	_setDarknessPrevButtonState : function() {
		this._prevButtonStateController._setDarknessState();
	},
	_setPrevButtonState : function(hasPrevMeasure) {
		if(hasPrevMeasure) {
			this._prevButtonStateController._setHasPrevState();
		} else {
			this._prevButtonStateController._setNonPrevState();
		}
	},
	_setNonPlayingPrevButtonState : function() {
		this._prevButtonStateController._setNonPlayingState();
	},
	_setPlayingPrevButtonState : function() {
		this._prevButtonStateController._setPlayingState();
	},
})