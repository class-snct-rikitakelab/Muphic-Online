var STORYBUTTON_X = 20;
var STORYBUTTON_Y = 30;
var HUMEN_X = 10;
var HUMEN_Y = 186;
var INTRODIALOG_X = 192;
var INTRODIALOG_Y = 213;

var MusicScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function() {
		// 以下, このクラスのプロパティ
		this._screenBackground = null;
		this._screenBackgroundStateController = null;
		this._storyButton = null;
		this._storyButtonStateController = null;
		this._humen = null;
		this._humenStateController = null;
		this._introDialog = null;
		this._parent = null;
	},

	// 画面全体の背景のオブジェクトを生成
	_createScreenBackground : function() {
		var path = MUSIC_BACKGROUND._path;
		var width = MUSIC_BACKGROUND._width;
		var height = MUSIC_BACKGROUND._height;
		var x = 0;
		var y = 0;
		this._screenBackground = new MusicScreenBackground(path, width, height, x, y, this);
		this._screenBackgroundStateController = new MusicScreenBackgroundStateController(this);
		this._screenBackground._setStateController(this._screenBackgroundStateController);
		this._screenBackgroundStateController._setObject(this._screenBackground);
		this._setDarknessBackgroundState();
		this._screenBackground._addToMusicScene();
	},
	// 物語作成画面への遷移ボタンのオブジェクトを生成
	_createStoryButton : function() {
		var path = MUSIC_CHANGESTORYBUTTON_OFF._path;
		var width = MUSIC_CHANGESTORYBUTTON_OFF._width;
		var height = MUSIC_CHANGESTORYBUTTON_OFF._height;
		var x = STORYBUTTON_X;
		var y = STORYBUTTON_Y;
		this._storyButton = new StoryButton(path, width, height, x, y, this);
		this._storyButtonStateController = new StoryButtonStateController(this);
		this._storyButton._setStateController(this._storyButtonStateController);
		this._storyButtonStateController._setObject(this._storyButton);
		this._setDarknessStoryButtonState();
		this._storyButton._addToMusicScene();
	},
	// 譜面のオブジェクトを生成
	_createHumen : function() {
		var path = MUSIC_HUMEN._path;
		var width = MUSIC_HUMEN._width;
		var height = MUSIC_HUMEN._height;
		var x = HUMEN_X;
		var y = HUMEN_Y;
		this._humen = new Humen(path, width, height, x, y, this);
		this._humenStateController = new HumenStateController(this);
		this._humen._setStateController(this._humenStateController);
		this._humenStateController._setObject(this._humen);
		this._setDarknessHumenState();
		this._humen._addToMusicScene();
	},
	// 導入ダイアログを生成
	_createIntroDialog : function() {
		var x = INTRODIALOG_X;
		var y = INTRODIALOG_Y;
		this._introDialog = new MusicIntroDialog(x, y, this);
		this._introDialog._addToMusicScene();
	},
	// スコアシートオブジェクトを生成
	_createScoreSheet : function() {
		this._humen._createScoreSheet();
	},
	// 再生ボタンオブジェクトを生成
	_createPlayButton : function() {
		this._humen._createPlayButton();
	},
	// 小節操作オブジェクトを生成
	_createMeasureController : function() {
		this._humen._createMeasureController();
	},
	// 音符ボタン操作オブジェクトを生成
	_createNoteButtonController : function() {
		this._humen._createNoteButtonController();
	},

	// ダイアログ削除状態にセッティング
	_setRemoveDialog : function() {
		this._setNonPlayingBackgroundState();
		this._setNonPlayingStoryButtonState();
		this._setNonSelectHumenState();
		this._setNonPlayingPlayButtonState();
		this._setNextButtonState(true);
		this._setPrevButtonState(false);
		this._setDefaultMeasureBoardState();
		this._setNonPushPianoButtonState();
		this._setNonPushRemoveButtonState();
	},

	// 子メソッド
	// 画面全体の背景へのステートセッタ
	_setDarknessBackgroundState : function() {
		this._screenBackgroundStateController._setDarknessState();
	},
	_setNonPlayingBackgroundState : function() {
		this._screenBackgroundStateController._setNonPlayingState();
	},
	// 物語作成画面への遷移ボタンへのステートセッタ
	_setDarknessStoryButtonState : function() {
		this._storyButtonStateController._setDarknessState();
	},
	_setPlayingStoryButtonState : function() {
		this._storyButtonStateController._setPlayingState();
	},
	_setNonPlayingStoryButtonState : function() {
		this._storyButtonStateController._setNonPlayingState();
	},
	// 譜面へのステートセッタ
	_setDarknessHumenState : function() {
		this._humenStateController._setDarknessState();
	},
	_setNonSelectHumenState : function() {
		this._humenStateController._setNonSelectState();
	},
	_setSelectPianoHumenState : function() {
		this._humenStateController._setSelectPianoState();
	},
	_setSelectRemoveHumenState : function() {
		this._humenStateController._setSelectRemoveState();
	},
	_setNonPlayingHumenState : function() {
		this._humenStateController._setNonPlayingState();
	},
	_setPlayingHumenState : function() {
		this._humenStateController._setPlayingState();
	},
	// 再生ボタンへのステートセッタ
	_setNonPlayingPlayButtonState : function() {
		this._humen._setNonPlayingPlayButtonState();
	},
	// 譜めくりボタンへのステートセッタ
	_setNextButtonState : function(hasNextMeasure) {
		this._humen._setNextButtonState(hasNextMeasure);
	},
	// 譜戻しボタンへのステートセッタ
	_setPrevButtonState : function(hasPrevMeasure) {
		this._humen._setPrevButtonState(hasPrevMeasure);
	},
	// 小節ボードへのステートセッタ
	_setDefaultMeasureBoardState : function() {
		this._humen._setDefaultMeasureBoardState();
	},
	// ピアノボタンへのステートセッタ
	_setNonPushPianoButtonState : function() {
		this._humen._setNonPushPianoButtonState();
	},
	// 削除ボタンへのステートセッタ
	_setNonPushRemoveButtonState : function() {
		this._humen._setNonPushRemoveButtonState();
	},
})