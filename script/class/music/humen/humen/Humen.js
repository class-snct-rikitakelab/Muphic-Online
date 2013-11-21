var SCORESHEET_X = 130;
var SCORESHEET_Y = 249;
var PLAYBUTTON_X = 160;
var PLAYBUTTON_Y = 25;

var Humen = enchant.Class.create(MusicSceneSpriteHasState, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSpriteHasState.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._scoreSheet = null;
		this._scoreSheetStateController = null;
		this._playBtn = null;
		this._playBtnStateController = null;
		this._measureController = null;
		this._noteBtnController = null;
		this._beforePlayingStartMeasure = null;
		this._noteCount = 0;
	},

	// スコアシートオブジェクトを生成
	_createScoreSheet : function() {
		var x = SCORESHEET_X;
		var y = SCORESHEET_Y;
		this._scoreSheet = new ScoreSheet(x, y, this);
		this._scoreSheetStateController = new ScoreSheetStateController(this);
		this._scoreSheet._setStateController(this._scoreSheetStateController);
		this._scoreSheetStateController._setObject(this._scoreSheet);
		this._setNPScoreSheetState();
		this._scoreSheet._addToMusicScene();
	},
	// 再生ボタンオブジェクトを生成
	_createPlayBtn : function() {
		var path = MUSIC_PLAYBUTTON_OFF._path;
		var width = MUSIC_PLAYBUTTON_OFF._width;
		var height = MUSIC_PLAYBUTTON_OFF._height;
		var x = PLAYBUTTON_X;
		var y = PLAYBUTTON_Y;
		this._playBtn = new PlayBtn(path, width, height, x, y, this);
		this._playBtnStateController = new PlayBtnStateController(this);
		this._playBtn._setStateController(this._playBtnStateController);
		this._playBtnStateController._setObject(this._playBtn);
		this._setDarknessPlayBtnState();
		this._playBtn._addToMusicScene();
	},
	// 小節操作オブジェクトを生成
	_createMeasureController : function() {
		this._measureController = new MeasureController(this);
		this._measureController._createNextBtn();
		this._measureController._createPrevBtn();
		this._measureController._createMeasureBoard();
		this._measureController._createMeasureNumber(1, 2, 3);
	},
	// 音符ボタン操作オブジェクトを生成
	_createNoteBtnController : function() {
		this._noteBtnController = new NoteBtnController(this);
		this._noteBtnController._createPianoBtn();
		this._noteBtnController._createRemoveBtn();
	},

	// 音符個数ゲッタ
	_getNoteCount : function() {
		return this._noteCount;
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._scoreSheet._createNote(animal, measure, beat, scale);
		this._noteCount++;
	},
	// 音符を破棄
	_destroyNote : function(measure, beat, scale) {
		this._scoreSheet._destroyNote(measure, beat, scale);
		this._noteCount--;
	},
	// 引数のパラメータを持つ音符があるかどうか
	_checkNote : function(measure, beat, scale) {
		return this._scoreSheet._checkNote(measure, beat, scale);
	},

	// 楽譜全体を次に進める
	_scrollScoreSheetNext : function(measure) {
		this._scoreSheet._scrollScoreSheetNext(measure);
	},
	// 楽譜全体を前に戻す
	_scrollScoreSheetPrev : function(measure) {
		this._scoreSheet._scrollScoreSheetPrev(measure);
	},
	// 指定した小節の音符全体を加える
	_addMeasureNote : function(measure) {
		this._scoreSheet._addMeasureNote(measure);
	},
	// 指定した小節の音符全体を消す
	_removeMeasureNote : function(measure) {
		this._scoreSheet._removeMeasureNote(measure);
	},

	// 再生セッティング
	_setPlaying : function() {
		var startMeasure = this._measureController._getStartMeasure();
		this._beforePlayingStartMeasure = startMeasure;
		this._measureController._setMeasureNumber(1, 2, 3);
		this._setPStoryBtnState();
		this._setPHumenState();
		this._setPPlayBtnState();
		this._setPScoreSheetState();
		this._setPNoteState();
		this._setPNextBtnState();
		this._setPPrevBtnState();
		this._setPPianoBtnState();
		this._setPRemoveBtnState();
		for(var i = 0; i < MEASURE_MAX; i++) {
			this._addMeasureNote(i + 1);
		}
		this._scrollScoreSheetPrev(startMeasure - 1);
	},
	// 再生終了セッティング
	_setPlayed : function() {
		var startMeasure = this._beforePlayingStartMeasure;
		this._measureController._setMeasureNumber(startMeasure, startMeasure + 1, startMeasure + 2);
		this._scoreSheet._setX(SCORESHEET_X);
		this._scoreSheet._setY(SCORESHEET_Y);
		this._scrollScoreSheetNext(startMeasure - 1);
		for(var i = 0; i < MEASURE_MAX; i++) {
			if(i === startMeasure - 1 || i === startMeasure || i === startMeasure + 1) {
				this._addMeasureNote(i + 1);
			} else {
				this._removeMeasureNote(i + 1);
			}
		}
		this._setNPStoryBtnState();
		this._setNPHumenState();
		this._setNPPlayBtnState();
		this._setNPScoreSheetState();
		this._setNPNoteState();
		this._setNPNextBtnState();
		this._setNPPrevBtnState();
		this._setNPPianoBtnState();
		this._setNPRemoveBtnState();
	},

	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[MUSIC_HUMEN_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[MUSIC_HUMEN._path];
		}
	},

	// クリック時の処理
	ontouchend : function() {
		this._state._touchEndBehavior();
	},

	// フレーム処理
	onenterframe : function() {
		this._state._frameBehavior();
	},

	// 親メソッド
	// 物語作成画面への遷移ボタンへのステートセッタ
	_setPStoryBtnState : function() {
		this._parent._setPStoryBtnState();
	},
	_setNPStoryBtnState : function() {
		this._parent._setNPStoryBtnState();
	},
	// 譜面へのステートセッタ
	_setNSelectHumenState : function() {
		this._parent._setNSelectHumenState();
	},
	_setSelectPianoHumenState : function() {
		this._parent._setSelectPianoHumenState();
	},
	_setSelectRemoveHumenState : function() {
		this._parent._setSelectRemoveHumenState();
	},
	_setNPHumenState : function() {
		this._parent._setNPHumenState();
	},
	_setPHumenState : function() {
		this._parent._setPHumenState();
	},

	//　子メソッド
	// 開始小節ゲッタ
	_getStartMeasure : function() {
		return this._measureController._getStartMeasure();
	},
	// 再生ボタンへのステートセッタ
	_setDarknessPlayBtnState : function() {
		this._playBtnStateController._setDarknessState();
	},
	_setNPPlayBtnState : function() {
		this._playBtnStateController._setNPState();
	},
	_setPPlayBtnState : function() {
		this._playBtnStateController._setPState();
	},
	// スコアシートへのステートセッタ
	_setNPScoreSheetState : function() {
		this._scoreSheetStateController._setNPState();
	},
	_setPScoreSheetState : function() {
		this._scoreSheetStateController._setPState();
	},
	// 音符へのステートセッタ
	_setNPNoteState : function() {
		this._scoreSheet._setNPNoteState();
	},
	_setPNoteState : function() {
		this._scoreSheet._setPNoteState();
	},
	// 譜めくりボタンへのステートセッタ
	_setNextBtnState : function(hasNextMeasure) {
		this._measureController._setNextBtnState(hasNextMeasure);
	},
	_setNPNextBtnState : function() {
		this._measureController._setNPNextBtnState();
	},
	_setPNextBtnState : function() {
		this._measureController._setPNextBtnState();
	},
	// 譜戻しボタンへのステートセッタ
	_setPrevBtnState : function(hasPrevMeasure) {
		this._measureController._setPrevBtnState(hasPrevMeasure);
	},
	_setNPPrevBtnState : function() {
		this._measureController._setNPPrevBtnState();
	},
	_setPPrevBtnState : function() {
		this._measureController._setPPrevBtnState();
	},
	// 小節ボードへのステートセッタ
	_setDefaultMeasureBoardState : function() {
		this._measureController._setDefaultMeasureBoardState();
	},
	// ピアノボタンへのステートセッタ
	_setNPushPianoBtnState : function() {
		this._noteBtnController._setNPushPianoBtnState();
	},
	_setNPPianoBtnState : function() {
		this._noteBtnController._setNPPianoBtnState();
	},
	_setPPianoBtnState : function() {
		this._noteBtnController._setPPianoBtnState();
	},
	// 削除ボタンへのステートセッタ
	_setNPushRemoveBtnState : function() {
		this._noteBtnController._setNPushRemoveBtnState();
	},
	_setNPRemoveBtnState : function() {
		this._noteBtnController._setNPRemoveBtnState();
	},
	_setPRemoveBtnState : function() {
		this._noteBtnController._setPRemoveBtnState();
	},
})