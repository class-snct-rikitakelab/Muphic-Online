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
		this._playButton = null;
		this._playButtonStateController = null;
		this._measureController = null;
		this._noteButtonController = null;
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
		this._setNonPlayingScoreSheetState();
		this._scoreSheet._addToMusicScene();
	},
	// 再生ボタンオブジェクトを生成
	_createPlayButton : function() {
		var path = MUSIC_PLAYBUTTON_OFF._path;
		var width = MUSIC_PLAYBUTTON_OFF._width;
		var height = MUSIC_PLAYBUTTON_OFF._height;
		var x = PLAYBUTTON_X;
		var y = PLAYBUTTON_Y;
		this._playButton = new PlayButton(path, width, height, x, y, this);
		this._playButtonStateController = new PlayButtonStateController(this);
		this._playButton._setStateController(this._playButtonStateController);
		this._playButtonStateController._setObject(this._playButton);
		this._setDarknessPlayButtonState();
		this._playButton._addToMusicScene();
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
		this._setPlayingStoryButtonState();
		this._setPlayingHumenState();
		this._setPlayingPlayButtonState();
		this._setPlayingScoreSheetState();
		this._setPlayingNoteState();
		this._setPlayingNextButtonState();
		this._setPlayingPrevButtonState();
		this._setPlayingPianoButtonState();
		this._setPlayingRemoveButtonState();
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
		this._setNonPlayingStoryButtonState();
		this._setNonPlayingHumenState();
		this._setNonPlayingPlayButtonState();
		this._setNonPlayingScoreSheetState();
		this._setNonPlayingNoteState();
		this._setNonPlayingNextButtonState();
		this._setNonPlayingPrevButtonState();
		this._setNonPlayingPianoButtonState();
		this._setNonPlayingRemoveButtonState();
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
	_setPlayingStoryButtonState : function() {
		this._parent._setPlayingStoryButtonState();
	},
	_setNonPlayingStoryButtonState : function() {
		this._parent._setNonPlayingStoryButtonState();
	},
	// 譜面へのステートセッタ
	_setNonSelectHumenState : function() {
		this._parent._setNonSelectHumenState();
	},
	_setSelectPianoHumenState : function() {
		this._parent._setSelectPianoHumenState();
	},
	_setSelectRemoveHumenState : function() {
		this._parent._setSelectRemoveHumenState();
	},
	_setNonPlayingHumenState : function() {
		this._parent._setNonPlayingHumenState();
	},
	_setPlayingHumenState : function() {
		this._parent._setPlayingHumenState();
	},

	//　子メソッド
	// 開始小節ゲッタ
	_getStartMeasure : function() {
		return this._measureController._getStartMeasure();
	},
	// 再生ボタンへのステートセッタ
	_setDarknessPlayButtonState : function() {
		this._playButtonStateController._setDarknessState();
	},
	_setNonPlayingPlayButtonState : function() {
		this._playButtonStateController._setNonPlayingState();
	},
	_setPlayingPlayButtonState : function() {
		this._playButtonStateController._setPlayingState();
	},
	// スコアシートへのステートセッタ
	_setNonPlayingScoreSheetState : function() {
		this._scoreSheetStateController._setNonPlayingState();
	},
	_setPlayingScoreSheetState : function() {
		this._scoreSheetStateController._setPlayingState();
	},
	// 音符へのステートセッタ
	_setNonPlayingNoteState : function() {
		this._scoreSheet._setNonPlayingNoteState();
	},
	_setPlayingNoteState : function() {
		this._scoreSheet._setPlayingNoteState();
	},
	// 譜めくりボタンへのステートセッタ
	_setNextButtonState : function(hasNextMeasure) {
		this._measureController._setNextButtonState(hasNextMeasure);
	},
	_setNonPlayingNextButtonState : function() {
		this._measureController._setNonPlayingNextButtonState();
	},
	_setPlayingNextButtonState : function() {
		this._measureController._setPlayingNextButtonState();
	},
	// 譜戻しボタンへのステートセッタ
	_setPrevButtonState : function(hasPrevMeasure) {
		this._measureController._setPrevButtonState(hasPrevMeasure);
	},
	_setNonPlayingPrevButtonState : function() {
		this._measureController._setNonPlayingPrevButtonState();
	},
	_setPlayingPrevButtonState : function() {
		this._measureController._setPlayingPrevButtonState();
	},
	// 小節ボードへのステートセッタ
	_setDefaultMeasureBoardState : function() {
		this._measureController._setDefaultMeasureBoardState();
	},
	// ピアノボタンへのステートセッタ
	_setNonPushPianoButtonState : function() {
		this._noteButtonController._setNonPushPianoButtonState();
	},
	_setNonPlayingPianoButtonState : function() {
		this._noteButtonController._setNonPlayingPianoButtonState();
	},
	_setPlayingPianoButtonState : function() {
		this._noteButtonController._setPlayingPianoButtonState();
	},
	// 削除ボタンへのステートセッタ
	_setNonPushRemoveButtonState : function() {
		this._noteButtonController._setNonPushRemoveButtonState();
	},
	_setNonPlayingRemoveButtonState : function() {
		this._noteButtonController._setNonPlayingRemoveButtonState();
	},
	_setPlayingRemoveButtonState : function() {
		this._noteButtonController._setPlayingRemoveButtonState();
	},
})