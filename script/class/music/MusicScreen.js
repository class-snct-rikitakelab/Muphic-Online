var STORYBUTTON_X = 20;
var STORYBUTTON_Y = 30;
var HUMEN_X = 10;
var HUMEN_Y = 186;

var MusicScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function() {
		// 以下, このクラスのプロパティ
		this._screenBackground = null;
		this._storyButton = null;
		this._humen = null;
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
		this._humen._addToMusicScene();
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

	// 子メソッド
	// 物語作成画面遷移ボタンへの再生ステートセッタ
	_setPlayingStoryButtonState : function() {
		this._storyButton._setPlayingStoryButtonState();
	},
	// 物語作成画面遷移ボタンへの非再生ステートセッタ
	_setNonPlayingStoryButtonState : function() {
		this._storyButton._setNonPlayingStoryButtonState();
	},
})