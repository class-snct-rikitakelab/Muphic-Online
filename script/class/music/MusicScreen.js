var STORYBUTTON_X = 20;
var STORYBUTTON_Y = 30;
var SAVEBUTTON_X = 700;
var SAVEBUTTON_Y = 100;
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
		this._storyBtn = null;
		this._storyBtnStateController = null;
		this._saveBtn = null;
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
	_createStoryBtn : function() {
		var path = MUSIC_CHANGESTORYBUTTON_OFF._path;
		var width = MUSIC_CHANGESTORYBUTTON_OFF._width;
		var height = MUSIC_CHANGESTORYBUTTON_OFF._height;
		var x = STORYBUTTON_X;
		var y = STORYBUTTON_Y;
		this._storyBtn = new StoryBtn(path, width, height, x, y, this);
		this._storyBtnStateController = new StoryBtnStateController(this);
		this._storyBtn._setStateController(this._storyBtnStateController);
		this._storyBtnStateController._setObject(this._storyBtn);
		this._setDarknessStoryBtnState();
		this._storyBtn._addToMusicScene();
	},
	// 保存ボタンのオブジェクトを生成
	_createSaveBtn : function() {
		var path = MUSIC_SAVEBUTTON_OFF._path;
		var width = MUSIC_SAVEBUTTON_OFF._width;
		var height = MUSIC_SAVEBUTTON_OFF._height;
		var x = SAVEBUTTON_X;
		var y = SAVEBUTTON_Y;
		this._saveBtn = new MusicSaveBtn(path, width, height, x, y, this);
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
	_createPlayBtn : function() {
		this._humen._createPlayBtn();
	},
	// 小節操作オブジェクトを生成
	_createMeasureController : function() {
		this._humen._createMeasureController();
	},
	// 音符ボタン操作オブジェクトを生成
	_createNoteBtnController : function() {
		this._humen._createNoteBtnController();
	},

	// ダイアログ削除状態にセッティング
	_setRemoveDialog : function() {
		this._setNPBackgroundState();
		this._setNPStoryBtnState();
		this._setNPSaveBtnState();
		this._setNSelectHumenState();
		this._setNPPlayBtnState();
		this._setNextBtnState(true);
		this._setPrevBtnState(false);
		this._setDefaultMeasureBoardState();
		this._setNPushPianoBtnState();
		this._setNPushRemoveBtnState();
	},

	// 子メソッド
	// 画面全体の背景へのステートセッタ
	_setDarknessBackgroundState : function() {
		this._screenBackgroundStateController._setDarknessState();
	},
	_setNPBackgroundState : function() {
		this._screenBackgroundStateController._setNPState();
	},
	// 物語作成画面への遷移ボタンへのステートセッタ
	_setDarknessStoryBtnState : function() {
		this._storyBtnStateController._setDarknessState();
	},
	_setPStoryBtnState : function() {
		this._storyBtnStateController._setPState();
	},
	_setNPStoryBtnState : function() {
		this._storyBtnStateController._setNPState();
	},
	// 保存ボタンへのステートセッタ
	_setDarknessSaveBtnState : function() {
		this._saveBtn._setDarknessState();
	},
	_setPSaveBtnState : function() {
		this._saveBtn._setPState();
	},
	_setNPSaveBtnState : function() {
		this._saveBtn._setNPState();
	},
	// 譜面へのステートセッタ
	_setDarknessHumenState : function() {
		this._humenStateController._setDarknessState();
	},
	_setNSelectHumenState : function() {
		this._humenStateController._setNSelectState();
	},
	_setSelectPianoHumenState : function() {
		this._humenStateController._setSelectPianoState();
	},
	_setSelectRemoveHumenState : function() {
		this._humenStateController._setSelectRemoveState();
	},
	_setNPHumenState : function() {
		this._humenStateController._setNPState();
	},
	_setPHumenState : function() {
		this._humenStateController._setPState();
	},
	// 再生ボタンへのステートセッタ
	_setNPPlayBtnState : function() {
		this._humen._setNPPlayBtnState();
	},
	// 譜めくりボタンへのステートセッタ
	_setNextBtnState : function(hasNextMeasure) {
		this._humen._setNextBtnState(hasNextMeasure);
	},
	// 譜戻しボタンへのステートセッタ
	_setPrevBtnState : function(hasPrevMeasure) {
		this._humen._setPrevBtnState(hasPrevMeasure);
	},
	// 小節ボードへのステートセッタ
	_setDefaultMeasureBoardState : function() {
		this._humen._setDefaultMeasureBoardState();
	},
	// ピアノボタンへのステートセッタ
	_setNPushPianoBtnState : function() {
		this._humen._setNPushPianoBtnState();
	},
	// 削除ボタンへのステートセッタ
	_setNPushRemoveBtnState : function() {
		this._humen._setNPushRemoveBtnState();
	},
})