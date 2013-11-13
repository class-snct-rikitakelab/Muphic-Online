var FOCUS_X_OFFSET = 1;
var FOCUS_Y_OFFSET = -1;

var SelectPianoState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 以下, このクラスのプロパティ
		var noteName = "cat";
		var path = MUSIC_ANIMAL["cat"]._path;
		var width = MUSIC_ANIMAL["cat"]._width;
		var height = MUSIC_ANIMAL["cat"]._height;
		var x = null;
		var y = null;
		this._notePutFocus = new NotePutFocus(path, width, height, x, y, parent);
		this._noteName = "cat";
		this._isFocusExist = false;
	},

	_touchEndBehavior : function() {
		this._createNoteWithFocus();
	},

	_frameBehavior : function() {
		var mOverX = mouseOverX(clientX, HUMENROAD_LEFT_X, HUMENROAD_RIGHT_X, 0, 0);
		var mOverY = mouseOverY(clientY, HUMENROAD_TOP_Y, HUMENROAD_BOTTOM_Y, 0, 0);
		if(mOverX && mOverY) {
			var startMeasure = this._parent._getStartMeasure();
			var measure = startMeasure + xBoxToMeasure[clientX];
			var beat = xBoxToBeat[clientX];
			var scale = yBoxToScale[clientY];
			var x = HUMENROAD_LEFT_X + MEASURE_WIDTH * (measure - startMeasure) + beatToX[beat] + FOCUS_X_OFFSET;
			var y = HUMENROAD_TOP_Y + scaleToY[scale] + FOCUS_Y_OFFSET;
			this._setNotePutFocusPoints(x, y);
			this._changeFocusDisplay(measure, beat, scale);
		}　else {
			this._removeNotePutFocus();
		}
	},

	// 音符配置フォーカスを画面上へ加える
	_addNotePutFocus : function() {
		this._notePutFocus._addToMusicScene();
		this._isFocusExist = true;
	},
	// 音符配置フォーカスを画面上から消す
	_removeNotePutFocus : function() {
		this._notePutFocus._removeFromMusicScene();
		this._isFocusExist = false;

	},
	// 音符配置フォーカスのx, y座標値指定
	_setNotePutFocusPoints : function(x, y) {
		this._notePutFocus._setX(x);
		this._notePutFocus._setY(y);
	},
	// マウスカーソルの下に音符が置いてあるか否かでフォーカス表示・非表示を切り替え
	_changeFocusDisplay : function(measure, beat, scale) {
		var noteIsExist = this._parent._checkNote(measure, beat, scale);
		if(noteIsExist) {
			this._removeNotePutFocus();
		} else {
			this._addNotePutFocus();
		}
	},
	// フォーカスが譜面上に表示されていれば音符を生成する
	_createNoteWithFocus : function() {
		if(this._isFocusExist) {
			var noteName = this._noteName;
			var startMeasure = this._parent._getStartMeasure();
			var measure = startMeasure + xBoxToMeasure[clientX];
			var beat = xBoxToBeat[clientX];
			var scale = yBoxToScale[clientY];
			this._parent._createNote(noteName, measure, beat, scale);
		}
	},
})