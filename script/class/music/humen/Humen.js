var SCORESHEET_X = 130;
var SCORESHEET_Y = 249;

var Humen = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._scoreSheet = null;
		this._measureController = null;
		this._noteButtonController = null;
		this._state = new NonSelectState(this);
	},

	// スコアシートオブジェクトを生成
	_createScoreSheet : function() {
		var x = SCORESHEET_X;
		var y = SCORESHEET_Y;
		this._scoreSheet = new ScoreSheet(x, y, this);
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
	// 音符ボタン操作オブジェクトを生成
	_createNoteButtonController : function() {
		this._noteButtonController = new NoteButtonController(this);
		this._noteButtonController._createPianoButton();
		this._noteButtonController._createRemoveButton();
	},

	// ステートセッタ
	_setState : function(state) {
		this._state = state;
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._scoreSheet._createNote(animal, measure, beat, scale);
	},
	// 引数のパラメータを持つ音符があるかどうか
	_checkNote : function(measure, beat, scale) {
		return this._scoreSheet._checkNote(measure, beat, scale);
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

	// クリック時の処理
	ontouchend : function() {
		this._state._touchEndBehavior();
	},

	// フレーム処理
	onenterframe : function() {
		this._state._frameBehavior();
	},

	// 選択なしステートセッタ
	_setNonSelectState : function() {
		this._setState(new NonSelectState(this));
	},
	// ピアノ選択ステートセッタ
	_setSelectPianoState : function() {
		this._setState(new SelectPianoState(this));
	},
	// 削除選択ステートセッタ
	_setSelectRemoveState : function() {
		this._setState(new SelectRemoveState(this));
	},

	//　子メソッド
	// 開始小節ゲッタ
	_getStartMeasure : function() {
		return this._measureController._getStartMeasure();
	},
})