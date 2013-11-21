var YESBUTTON_X = 270;
var YESBUTTON_Y = 270;

var MusicIntroDialog = enchant.Class.create(MusicSceneGroup, {
	// コンストラクタ
	initialize : function(x, y, parent) {
		MusicSceneGroup.call(this, parent);
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._dialogFrame = null;
		this._yesBtn = null;
		this._yesBtnStateController = null;
		// 初期化メソッド
		this._createDialogFrame();
		this._createYesBtn();
	},

	// ダイアログのフレームを生成
	_createDialogFrame : function() {
		var path = MUSIC_INTRO_DIALOG._path;
		var width = MUSIC_INTRO_DIALOG._width;
		var height = MUSIC_INTRO_DIALOG._height;
		var x = 0;
		var y = 0;
		this._dialogFrame = new MusicIntroDialogFrame(path, width, height, x, y, this);
		this._addToGroup(this._dialogFrame);
	},
	// 「はい」ボタンを生成
	_createYesBtn : function() {
		var path = MUSIC_YESBUTTON_OFF._path;
		var width = MUSIC_YESBUTTON_OFF._width;
		var height = MUSIC_YESBUTTON_OFF._height;
		var x = YESBUTTON_X;
		var y = YESBUTTON_Y;
		this._yesBtn = new MusicIntroDialogYesBtn(path, width, height, x, y, this);
		this._yesBtnStateController = new MusicIntroDialogYesBtnStateController(this);
		this._yesBtn._setStateController(this._yesBtnStateController);
		this._yesBtnStateController._setObject(this._yesBtn);
		this._setWaitPushYesBtnState();
		this._addToGroup(this._yesBtn);
	},

	// 親メソッド
	_setRemoveDialog : function() {
		this._parent._setRemoveDialog();
	},

	// 子メソッド
	// 「はい」ボタンへのステートセッタ
	_setWaitPushYesBtnState : function() {
		this._yesBtnStateController._setWaitPushState();
	},
})