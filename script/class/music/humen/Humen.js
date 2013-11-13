var SCORESHEET_X = 130;
var SCORESHEET_Y = 249;
var PLAYBUTTON_X = 160;
var PLAYBUTTON_Y = 25;

var Humen = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._scoreSheet = null;
		this._playButton = null;
		this._measureController = null;
		this._noteButtonController = null;
		this._beforePlayingStartMeasure = null;
		this._noteCount = 0;
		this._state = new NonSelectState(this);
		this._beforePlayingState = null;
	},

	// スコアシートオブジェクトを生成
	_createScoreSheet : function() {
		var x = SCORESHEET_X;
		var y = SCORESHEET_Y;
		this._scoreSheet = new ScoreSheet(x, y, this);
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
		for(var i = 0; i < MEASURE_MAX; i++) {
			this._addMeasureNote(i + 1);
		}
		this._scrollScoreSheetPrev(startMeasure - 1);
		this._setPlayingStoryButtonState();
		this._setPlayingHumenState();
		this._setPlayingPlayButtonState();
		this._setPlayingScoreSheetState();
		this._setPlayingNoteState();
		this._setPlayingNextButtonState();
		this._setPlayingPrevButtonState();
		this._setPlayingPianoButtonState();
		this._setPlayingMusicRemoveButtonState();
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
		this._setNonPlayingMusicRemoveButtonState();
	},

	// クリック時の処理
	ontouchend : function() {
		this._state._touchEndBehavior();
	},

	// フレーム処理
	onenterframe : function() {
		this._state._frameBehavior();
	},

	// 各種ステートセッタ
	// ステートセッタ
	_setState : function(state) {
		this._state = state;
	},
	_setBeforePlayingState : function(state) {
		this._beforePlayingState = state;
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
	// 再生ステートセッタ
	_setPlayingHumenState : function() {
		this._setBeforePlayingState(this._state);
		this._setState(new PlayingHumenState(this));
	},
	// 非再生ステートセッタ
	_setNonPlayingHumenState : function() {
		this._setState(this._beforePlayingState);
	},

	// 親メソッド
	// 物語作成画面遷移ボタンへの再生ステートセッタ
	_setPlayingStoryButtonState : function() {
		this._parent._setPlayingStoryButtonState();
	},
	// 物語作成画面遷移ボタンへの非再生ステートセッタ
	_setNonPlayingStoryButtonState : function() {
		this._parent._setNonPlayingStoryButtonState();
	},

	//　子メソッド
	// 開始小節ゲッタ
	_getStartMeasure : function() {
		return this._measureController._getStartMeasure();
	},
	// 再生ボタンへの再生ステートセッタ
	_setPlayingPlayButtonState : function() {
		this._playButton._setPlayingPlayButtonState();
	},
	// 再生ボタンへの非再生ステートセッタ
	_setNonPlayingPlayButtonState : function() {
		this._playButton._setNonPlayingPlayButtonState();
	},
	// スコアシートへの再生ステートセッタ
	_setPlayingScoreSheetState : function() {
		this._scoreSheet._setPlayingScoreSheetState();
	},
	// スコアシートへの非再生ステートセッタ
	_setNonPlayingScoreSheetState : function() {
		this._scoreSheet._setNonPlayingScoreSheetState();
	},
	// 音符への再生ステートセッタ
	_setPlayingNoteState : function() {
		this._scoreSheet._setPlayingNoteState();
	},
	// 音符への非再生ステートセッタ
	_setNonPlayingNoteState : function() {
		this._scoreSheet._setNonPlayingNoteState();
	},
	// 譜めくりボタンへの再生ステートセッタ
	_setPlayingNextButtonState : function() {
		this._measureController._setPlayingNextButtonState();
	},
	// 譜めくりボタンへの非再生ステートセッタ
	_setNonPlayingNextButtonState : function() {
		this._measureController._setNonPlayingNextButtonState();
	},
	// 譜戻しボタンへの再生ステートセッタ
	_setPlayingPrevButtonState : function() {
		this._measureController._setPlayingPrevButtonState();
	},
	// 譜戻しボタンへの非再生ステートセッタ
	_setNonPlayingPrevButtonState : function() {
		this._measureController._setNonPlayingPrevButtonState();
	},
	// ピアノボタンへの再生ステートセッタ
	_setPlayingPianoButtonState : function() {
		this._noteButtonController._setPlayingPianoButtonState();
	},
	// ピアノボタンへの非再生ステートセッタ
	_setNonPlayingPianoButtonState : function() {
		this._noteButtonController._setNonPlayingPianoButtonState();
	},
	// 削除ボタンへの再生ステートセッタ
	_setPlayingMusicRemoveButtonState : function() {
		this._noteButtonController._setPlayingMusicRemoveButtonState();
	},
	// 削除ボタンへの非再生ステートセッタ
	_setNonPlayingMusicRemoveButtonState : function() {
		this._noteButtonController._setNonPlayingMusicRemoveButtonState();
	},
})