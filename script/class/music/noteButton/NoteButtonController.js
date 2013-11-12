var PIANOBUTTON_X = 910;
var PIANOBUTTON_Y = 246;
var REMOVEBUTTON_X = 910;
var REMOVEBUTTON_Y = 346;

var NoteButtonController = enchant.Class.create({
	// コンストラクタ
	initialize : function(parent) {
		this._pianoButton = null;
		this._removeButton = null;
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

	// 親メソッド
	// 選択なしステートセッタ
	_setNonSelectState : function() {
		this._parent._setNonSelectState();
	},
	// ピアノ選択ステートセッタ
	_setSelectPianoState : function() {
		this._parent._setSelectPianoState();
	},
	// 削除選択ステートセッタ
	_setSelectRemoveState : function() {
		this._parent._setSelectRemoveState();
	},
})