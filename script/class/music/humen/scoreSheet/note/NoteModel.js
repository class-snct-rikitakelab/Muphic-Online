var NoteModel = enchant.Class.create({
	// コンストラクタ
	initialize : function(animal, measure, beat, scale, parent) {
		this._animal = animal;
		this._measure = measure;
		this._beat = beat;
		this._scale = scale;
		this._parent = parent;
	},

	// ゲッタ
	_getAnimal : function() {
		return this._animal;
	},
	_getMeasure : function() {
		return this._measure;
	},
	_getBeat : function() {
		return this._beat;
	},
	_getScale : function() {
		return this._scale;
	},
})