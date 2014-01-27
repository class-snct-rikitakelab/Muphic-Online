var NEXTBUTTON_X = 860;
var NEXTBUTTON_Y = 651;
var PREVBUTTON_X = 130;
var PREVBUTTON_Y = 651;
var MEASUREBOARD_X = [ 354, 593, 832 ];
var MEASUREBOARD_Y = [ 204, 204, 204 ];

var MeasureController = enchant.Class.create({
	initialize : function(parent) {
		this._nextBtn = null;
		this._nextBtnStateController = null;
		this._prevBtn = null;
		this._prevBtnStateController = null;
		this._measureBoard = new Array(3);
		this._measureBoardStateController = new Array(3);
		this._startMeasure = 1;
		this._parent = parent;
	},

	// 譜めくりボタンのオブジェクトを生成
	_createNextBtn : function() {
		var path = MUSIC_NEXTBUTTON_OFF._path;
		var width = MUSIC_NEXTBUTTON_OFF._width;
		var height = MUSIC_NEXTBUTTON_OFF._height;
		var x = NEXTBUTTON_X;
		var y = NEXTBUTTON_Y;
		this._nextBtn = new NextBtn(path, width, height, x, y, this);
		this._nextBtnStateController = new NextBtnStateController(this);
		this._nextBtn._setStateController(this._nextBtnStateController);
		this._nextBtnStateController._setObject(this._nextBtn);
		this._setDarknessNextBtnState();
		this._nextBtn._addToMusicScene();
	},
	// 譜戻しボタンのオブジェクトを生成
	_createPrevBtn : function() {
		var path = MUSIC_PREVBUTTON_OFF._path;
		var width = MUSIC_PREVBUTTON_OFF._width;
		var height = MUSIC_PREVBUTTON_OFF._height;
		var x = PREVBUTTON_X;
		var y = PREVBUTTON_Y;
		this._prevBtn = new PrevBtn(path, width, height, x, y, this);
		this._prevBtnStateController = new PrevBtnStateController(this);
		this._prevBtn._setStateController(this._prevBtnStateController);
		this._prevBtnStateController._setObject(this._prevBtn);
		this._setDarknessPrevBtnState();
		this._prevBtn._addToMusicScene();
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
	_setDarknessNextBtnState : function() {
		this._nextBtnStateController._setDarknessState();
	},
	_setNextBtnState : function(hasNextMeasure) {
		if(hasNextMeasure) {
			this._nextBtnStateController._setHasNextState();
		} else {
			this._nextBtnStateController._setNNextState();
		}
	},
	_setNPNextBtnState : function() {
		this._nextBtnStateController._setNPState();
	},
	_setPNextBtnState : function() {
		this._nextBtnStateController._setPState();
	},
	// 譜戻しボタンへのステートセッタ
	_setDarknessPrevBtnState : function() {
		this._prevBtnStateController._setDarknessState();
	},
	_setPrevBtnState : function(hasPrevMeasure) {
		if(hasPrevMeasure) {
			this._prevBtnStateController._setHasPrevState();
		} else {
			this._prevBtnStateController._setNPrevState();
		}
	},
	_setNPPrevBtnState : function() {
		this._prevBtnStateController._setNPState();
	},
	_setPPrevBtnState : function() {
		this._prevBtnStateController._setPState();
	},
})