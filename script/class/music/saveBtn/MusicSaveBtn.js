var MusicSaveBtn = enchant.Class.create({
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		this._view = new MusicSaveBtnView(path, width, height, x, y, this);
		this._controller = new MusicSaveBtnController(this);
		this._stateController = new MusicSaveBtnStateController(this);
		this._view._setStateController(this._stateController);
		this._stateController._setObject(this._view);
		this._setDarknessState();
		this._parent = parent;
	},

	// コントローラのメソッド
	_saveMusicNote : function() {
		var notes = new Array();
		for(var m = 1; m <= 8; m++) {
			for(var b = 1; b <= 4; b++) {
				if(this._parent._humen._checkNote(m, b, "C4")) {
					notes.push(this._parent._humen._scoreSheet._measure[m-1]._beat[b-1]._scale["C4"]._view._note);
				} else if(this._parent._humen._checkNote(m, b, "D4")) {
					notes.push(this._parent._humen._scoreSheet._measure[m-1]._beat[b-1]._scale["D4"]._view._note);
				} else if(this._parent._humen._checkNote(m, b, "E4")) {
					notes.push(this._parent._humen._scoreSheet._measure[m-1]._beat[b-1]._scale["E4"]._view._note);
				} else if(this._parent._humen._checkNote(m, b, "F4")) {
					notes.push(this._parent._humen._scoreSheet._measure[m-1]._beat[b-1]._scale["F4"]._view._note);
				} else if(this._parent._humen._checkNote(m, b, "G4")) {
					notes.push(this._parent._humen._scoreSheet._measure[m-1]._beat[b-1]._scale["G4"]._view._note);
				} else if(this._parent._humen._checkNote(m, b, "A4")) {
					notes.push(this._parent._humen._scoreSheet._measure[m-1]._beat[b-1]._scale["A4"]._view._note);
				} else if(this._parent._humen._checkNote(m, b, "B4")) {
					notes.push(this._parent._humen._scoreSheet._measure[m-1]._beat[b-1]._scale["B4"]._view._note);
				} else if(this._parent._humen._checkNote(m, b, "C5")) {
					notes.push(this._parent._humen._scoreSheet._measure[m-1]._beat[b-1]._scale["C5"]._view._note);
				}
			}
		}
		var docs = new Array();
		for(var i = 0; i < notes.length; i++) {
			var _user_id = USER_ID;
			var _animal = notes[i]._getAnimal();
			var _measure = notes[i]._getMeasure();
			var _beat = notes[i]._getBeat();
			var _scale = notes[i]._getScale();
			var _save_date = (new Date()).toString();
			docs[i] = {
				"user_id" : _user_id,
				"animal" : _animal,
				"measure" : _measure,
				"beat" : _beat,
				"scale" : _scale,
				"save_date" : _save_date
			}
		}
		this._controller._saveMusicNote(docs);
	},

	// ボタンへの暗転ステートセッタ
	_setDarknessState : function() {
		this._stateController._setDarknessState();
	},
	// ボタンへの再生ステートセッタ
	_setPState : function() {
		this._stateController._setPState();
	},
	// ボタンへの非再生ステートセッタ
	_setNPState : function() {
		this._stateController._setNPState();
	},

	// ゲッタ
	_getView : function() {
		return this._view;
	},
	_getController : function() {
		return this._controller;
	},
})