var Note = enchant.Class.create({
	// コンストラクタ
	initialize : function(path, width, height, x, y, animal, measure, beat, scale, parent) {
		this._model = new NoteModel(animal, measure, beat, scale, this);
		this._view = new NoteView(path, width, height, x, y, this);
		this._stateController = new NoteStateController(this);
		this._view._setStateController(this._stateController);
		this._stateController._setObject(this._view);
		this._setNPState();
		this._parent = parent;
	},

	// モデルのメソッド
	_getAnimal : function() {
		return this._model._getAnimal();
	},
	_getMeasure : function() {
		return this._model._getMeasure();
	},
	_getBeat : function() {
		return this._model._getBeat();
	},
	_getScale : function() {
		return this._model._getScale();
	},

	// 音符への再生ステートセッタ
	_setPState : function() {
		this._stateController._setPState();
	},
	// 音符への非再生ステートセッタ
	_setNPState : function() {
		this._stateController._setNPState();
		this._view._setX(this._view._getHomeX());
		this._view._setY(this._view._getHomeY());
		this._view._setOpacity(1.0);
		this._view._setVisible(true);
		this._view._setTouchEnabled(false);
	},

	// ゲッタ
	_getModel : function() {
		return this._model;
	},
	_getView : function() {
		return this._view;
	},
})