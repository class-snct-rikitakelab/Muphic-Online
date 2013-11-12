var MeasureBoard = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(measureNumber, path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._measureNumber = null;
	},

	// 小節番号オブジェクトを生成
	_createMeasureNumber : function(measureNumber) {
		var path = LABEL[measureNumber]._path;
		var width = LABEL[measureNumber]._width;
		var height = LABEL[measureNumber]._height;
		var x = this.x + 7;
		var y = this.y + 8;
		this._measureNumber = new MeasureNumber(path, width, height, x, y, parent);
		this._measureNumber._addToMusicScene();
	},

	// 小節番号をセット
	_setMeasureNumber : function(measureNumber) {
		var path = LABEL[measureNumber]._path;
		this._measureNumber._setImage(path);
	},
})