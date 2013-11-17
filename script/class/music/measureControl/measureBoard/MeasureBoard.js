var MeasureBoard = enchant.Class.create(MusicSceneSpriteHasState, {
	// コンストラクタ
	initialize : function(measureNumber, path, width, height, x, y, parent) {
		MusicSceneSpriteHasState.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._measureNumber = null;
		// 初期化メソッド
		this._setTouchEnabled(false);
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

	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[MUSIC_MEASUREBOARD_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[MUSIC_MEASUREBOARD._path];
		}
	},

	// クリック時の処理
	ontouchend : function() {
		this._state._touchEndBehavior();
	},
	// フレーム処理
	onenterframe : function() {
		this._state._frameBehavior();
	},
})