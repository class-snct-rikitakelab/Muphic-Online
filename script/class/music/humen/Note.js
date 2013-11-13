var Note = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, index, measure, beat, scale, sound, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		this._setTouchEnabled(false);
		// 以下, このクラスのプロパティ
		this._index = index;
		this._measure = measure;
		this._beat = beat;
		this._scale = scale;
		this._sound = sound;
	},

	// _indexセッタ
	_setIndex : function(index) {
		this._index = index;
	},
})