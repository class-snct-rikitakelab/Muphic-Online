var PIANOBUTTON_X = 910;
var PIANOBUTTON_Y = 246;
var REMOVEBUTTON_X = 910;
var REMOVEBUTTON_Y = 346;

var NoteBtnController = enchant.Class.create({
	// コンストラクタ
	initialize : function(parent) {
		this._pianoBtn = null;
		this._pianoBtnStateController = null;
		this._removeBtn = null;
		this._removeBtnStateController = null;
		this._parent = parent;
	},

	// ピアノボタンのオブジェクトを生成
	_createPianoBtn : function() {
		var path = MUSIC_PIANOBUTTON_OFF._path;
		var width = MUSIC_PIANOBUTTON_OFF._width;
		var height = MUSIC_PIANOBUTTON_OFF._height;
		var x = PIANOBUTTON_X;
		var y = PIANOBUTTON_Y;
		this._pianoBtn = new PianoBtn(path, width, height, x, y, this);
		this._pianoBtnStateController = new PianoBtnStateController(this);
		this._pianoBtn._setStateController(this._pianoBtnStateController);
		this._pianoBtnStateController._setObject(this._pianoBtn);
		this._setDarknessPianoBtnState();
		this._pianoBtn._addToMusicScene();
	},
	// 削除ボタンのオブジェクトを生成
	_createRemoveBtn : function() {
		var path = MUSIC_REMOVEBUTTON_OFF._path;
		var width = MUSIC_REMOVEBUTTON_OFF._width;
		var height = MUSIC_REMOVEBUTTON_OFF._height;
		var x = REMOVEBUTTON_X;
		var y = REMOVEBUTTON_Y;
		this._removeBtn = new MusicRemoveBtn(path, width, height, x, y, this);
		this._removeBtnStateController = new MusicRemoveBtnStateController(this);
		this._removeBtn._setStateController(this._removeBtnStateController);
		this._removeBtnStateController._setObject(this._removeBtn);
		this._setDarknessRemoveBtnState();
		this._removeBtn._addToMusicScene();
	},

	// ピアノボタンゲッタ
	_getPianoBtn : function() {
		return this._pianoBtn;
	},
	// 削除ボタンゲッタ
	_getRemoveBtn : function() {
		return this._removeBtn;
	},

	// 子メソッド
	// ピアノボタンへのステートセッタ
	_setDarknessPianoBtnState : function() {
		this._pianoBtnStateController._setDarknessState();
	},
	_setNPushPianoBtnState : function() {
		this._pianoBtnStateController._setNPushState();
	},
	_setNPPianoBtnState : function() {
		this._pianoBtnStateController._setNPState();
	},
	_setPPianoBtnState : function() {
		this._pianoBtnStateController._setPState();
	},
	// 削除ボタンへのステートセッタ
	_setDarknessRemoveBtnState : function() {
		this._removeBtnStateController._setDarknessState();
	},
	_setNPushRemoveBtnState : function() {
		this._removeBtnStateController._setNPushState();
	},
	_setNPRemoveBtnState : function() {
		this._removeBtnStateController._setNPState();
	},
	_setPRemoveBtnState : function() {
		this._removeBtnStateController._setPState();
	},


	// 親メソッド
	// 選択なしステートセッタ
	_setNSelectHumenState : function() {
		this._parent._setNSelectHumenState();
	},
	// ピアノ選択ステートセッタ
	_setSelectPianoHumenState : function() {
		this._parent._setSelectPianoHumenState();
	},
	// 削除選択ステートセッタ
	_setSelectRemoveHumenState : function() {
		this._parent._setSelectRemoveHumenState();
	},
})