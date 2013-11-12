var Humen = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._scoreSheet = null;
		this._measureController = null;
	},

	// スコアシートオブジェクトを生成
	_createScoreSheet : function() {
		this._scoreSheet = new ScoreSheet(MEASURE_MAX, this.x, 0, this);
		this._scoreSheet._addToMusicScene();
	},
	// 小節操作オブジェクトを生成
	_createMeasureController : function() {
		this._measureController = new MeasureController(this);
		this._measureController._createNextButton();
		this._measureController._createPrevButton();
		this._measureController._createMeasureBoard();
		this._measureController._createMeasureNumber(1, 2, 3);
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._scoreSheet._createNote(animal, measure, beat, scale);
	},

	// 楽譜全体を1小節次に進める
	_scrollScoreSheetNext : function() {
		this._scoreSheet._scrollScoreSheetNext();
	},
	// 楽譜全体を1小節前に戻す
	_scrollScoreSheetPrev : function() {
		this._scoreSheet._scrollScoreSheetPrev();
	},
	// 指定した小節の音符全体を加える
	_addMeasureNote : function(measure) {
		this._scoreSheet._addMeasureNote(measure);
	},
	// 指定した小節の音符全体を消す
	_removeMeasureNote : function(measure) {
		this._scoreSheet._removeMeasureNote(measure);
	},
})