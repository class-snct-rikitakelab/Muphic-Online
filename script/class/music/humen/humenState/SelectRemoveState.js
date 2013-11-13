var HUMENROAD_LEFT_X = 129;
var HUMENROAD_RIGHT_X = 845;
var HUMENROAD_TOP_Y = 250;
var HUMENROAD_BOTTOM_Y = 638;

var SelectRemoveState = enchant.Class.create(State, {
	// コンストラクタ
	initialize : function(parent) {
		State.call(this, parent);
		// 以下, このクラスのプロパティ
		var path = MUSIC_REMOVEFOCUS_LIGHT._path;
		var width = MUSIC_REMOVEFOCUS_LIGHT._width;
		var height = MUSIC_REMOVEFOCUS_LIGHT._height;
		var x = clientX;
		var y = clientY;
		this._removeFocus = new NoteRemoveFocus(path, width, height, x, y, parent);
		this._isFocusExist = false;
		this._isFocusDeep = false;
	},

	_touchEndBehavior : function() {
		this._destroyNoteWithFocus();
	},

	_frameBehavior : function() {
		var mOverX = mouseOverX(clientX, HUMENROAD_LEFT_X, HUMENROAD_RIGHT_X, 0, 0);
		var mOverY = mouseOverY(clientY, HUMENROAD_TOP_Y, HUMENROAD_BOTTOM_Y, 0, 0);
		if(mOverX && mOverY) {
			var startMeasure = this._parent._getStartMeasure();
			var measure = startMeasure + xBoxToMeasure[clientX];
			var beat = xBoxToBeat[clientX];
			var scale = yBoxToScale[clientY];
			var x = HUMENROAD_LEFT_X + MEASURE_WIDTH * (measure - startMeasure) + beatToX[beat];
			var y = HUMENROAD_TOP_Y + scaleToY[scale];
			this._setRemoveFocusPoints(x, y);
			this._assignRemoveFocusImage(measure, beat, scale);
			this._addRemoveFocus();
		}　else {
			this._removeRemoveFocus();
		}
	},

	// 削除フォーカスを画面上へ加える
	_addRemoveFocus : function() {
		this._removeFocus._addToMusicScene();
		this._isFocusExist = true;
	},
	// 削除フォーカスを画面上から消す
	_removeRemoveFocus : function() {
		this._removeFocus._removeFromMusicScene();
		this._isFocusExist = false;
	},
	// 削除フォーカスのx, y座標値指定
	_setRemoveFocusPoints : function(x, y) {
		this._removeFocus._setX(x);
		this._removeFocus._setY(y);
	},
	// 削除フォーカスの画像指定
	_assignRemoveFocusImage : function(measure, beat, scale) {
		var noteIsExist = this._parent._checkNote(measure, beat, scale);
		if(noteIsExist) {
			this._removeFocus._setDeepFocusImage();
			this._isFocusDeep = true;
		} else {
			this._removeFocus._setLightFocusImage();
			this._isFocusDeep = false;
		}
	},
	// フォーカスが濃い状態ならば音符を破棄する
	_destroyNoteWithFocus : function() {
		if(this._isFocusExist && this._isFocusDeep) {
			var startMeasure = this._parent._getStartMeasure();
			var measure = startMeasure + xBoxToMeasure[clientX];
			var beat = xBoxToBeat[clientX];
			var scale = yBoxToScale[clientY];
			this._parent._destroyNote(measure, beat, scale);
		}
	},
})