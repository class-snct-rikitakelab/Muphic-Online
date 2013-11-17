var PIANOBUTTON_X = 910;
var PIANOBUTTON_Y = 246;
var REMOVEBUTTON_X = 910;
var REMOVEBUTTON_Y = 346;

var NoteButtonController = enchant.Class.create({
	// コンストラクタ
	initialize : function(parent) {
		this._pianoButton = null;
		this._pianoButtonStateController = null;
		this._removeButton = null;
		this._removeButtonStateController = null;
		this._parent = parent;
	},

	// ピアノボタンのオブジェクトを生成
	_createPianoButton : function() {
		var path = MUSIC_PIANOBUTTON_OFF._path;
		var width = MUSIC_PIANOBUTTON_OFF._width;
		var height = MUSIC_PIANOBUTTON_OFF._height;
		var x = PIANOBUTTON_X;
		var y = PIANOBUTTON_Y;
		this._pianoButton = new PianoButton(path, width, height, x, y, this);
		this._pianoButtonStateController = new PianoButtonStateController(this);
		this._pianoButton._setStateController(this._pianoButtonStateController);
		this._pianoButtonStateController._setObject(this._pianoButton);
		this._setDarknessPianoButtonState();
		this._pianoButton._addToMusicScene();
	},
	// 削除ボタンのオブジェクトを生成
	_createRemoveButton : function() {
		var path = MUSIC_REMOVEBUTTON_OFF._path;
		var width = MUSIC_REMOVEBUTTON_OFF._width;
		var height = MUSIC_REMOVEBUTTON_OFF._height;
		var x = REMOVEBUTTON_X;
		var y = REMOVEBUTTON_Y;
		this._removeButton = new MusicRemoveButton(path, width, height, x, y, this);
		this._removeButtonStateController = new MusicRemoveButtonStateController(this);
		this._removeButton._setStateController(this._removeButtonStateController);
		this._removeButtonStateController._setObject(this._removeButton);
		this._setDarknessRemoveButtonState();
		this._removeButton._addToMusicScene();
	},

	// ピアノボタンゲッタ
	_getPianoButton : function() {
		return this._pianoButton;
	},
	// 削除ボタンゲッタ
	_getRemoveButton : function() {
		return this._removeButton;
	},

	// 子メソッド
	// ピアノボタンへのステートセッタ
	_setDarknessPianoButtonState : function() {
		this._pianoButtonStateController._setDarknessState();
	},
	_setNonPushPianoButtonState : function() {
		this._pianoButtonStateController._setNonPushState();
	},
	_setNonPlayingPianoButtonState : function() {
		this._pianoButtonStateController._setNonPlayingState();
	},
	_setPlayingPianoButtonState : function() {
		this._pianoButtonStateController._setPlayingState();
	},
	// 削除ボタンへのステートセッタ
	_setDarknessRemoveButtonState : function() {
		this._removeButtonStateController._setDarknessState();
	},
	_setNonPushRemoveButtonState : function() {
		this._removeButtonStateController._setNonPushState();
	},
	_setNonPlayingRemoveButtonState : function() {
		this._removeButtonStateController._setNonPlayingState();
	},
	_setPlayingRemoveButtonState : function() {
		this._removeButtonStateController._setPlayingState();
	},


	// 親メソッド
	// 選択なしステートセッタ
	_setNonSelectHumenState : function() {
		this._parent._setNonSelectHumenState();
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