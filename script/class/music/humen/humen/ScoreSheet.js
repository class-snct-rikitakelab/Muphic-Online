var MEASURE_MAX = 8;
var MEASURE_WIDTH = 240;

var ScoreSheet = enchant.Class.create(MusicSceneGroup, {
	// コンストラクタ
	initialize : function(measureMax, x, y, parent) {
		MusicSceneGroup.call(this, parent);
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._measure = new Array(measureMax);
		this._assignMeasure();
		this._addMeasureToGroup();
	},

	// 小節プロパティを割り当てる
	_assignMeasure : function() {
		for(var i = 0; i < this._measure.length; i++) {
			this._measure[i] = new Measure(i + 1, this);
		}
	},
	// 小節プロパティを自分自身へ子ノードとして追加
	_addMeasureToGroup : function() {
		for(var i = 0; i < this._measure.length; i++) {
			this._addToGroup(this._measure[i]);
		}
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._measure[measure - 1]._createNote(animal, measure, beat, scale);
	},

	// 楽譜全体を1小節次に進める
	_scrollScoreSheetNext : function() {
		var x = this.x - MEASURE_WIDTH;
		this.x = Math.floor(x);
	},
	// 楽譜全体を1小節前に戻す
	_scrollScoreSheetPrev : function() {
		var x = this.x + MEASURE_WIDTH;
		this.x = Math.floor(x);
	},
	// 指定した小節の音符全体を加える
	_addMeasureNote : function(measure) {
		this._measure[measure - 1]._addToMusicScene();
	},
	// 指定した小節の音符全体を消す
	_removeMeasureNote : function(measure) {
		this._measure[measure - 1]._removeFromMusicScene();
	},
})