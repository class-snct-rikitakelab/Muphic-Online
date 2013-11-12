var MEASURE_MAX = 8;
var MEASURE_WIDTH = 240;

var ScoreSheet = enchant.Class.create(MusicSceneGroup, {
	// コンストラクタ
	initialize : function(x, y, parent) {
		MusicSceneGroup.call(this, parent);
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._measure = new Array(MEASURE_MAX);
		this._assignMeasure();
		this._addMeasureToGroup();
	},

	// 小節プロパティを割り当てる
	_assignMeasure : function() {
		for(var i = 0; i < this._measure.length; i++) {
			var number = i + 1;
			var x = this.x + MEASURE_WIDTH * i;
			var y = this.y;
			this._measure[i] = new Measure(number, x, y, this);
		}
	},
	// 小節プロパティを自分自身へ子ノードとして追加
	_addMeasureToGroup : function() {
		for(var i = 0; i < this._measure.length; i++) {
			this._addToGroup(this._measure[i]);
			this._addMeasureNote(i + 1);
		}
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._measure[measure - 1]._createNote(animal, measure, beat, scale);
	},
	// 引数のパラメータを持つ音符があるかどうか
	_checkNote : function(measure, beat, scale) {
		return this._measure[measure - 1]._checkNote(beat, scale);
	},

	// 楽譜全体を1小節次に進める
	_scrollScoreSheetNext : function() {
		for(var i = 0; i < this._measure.length; i++) {
			this._measure[i].x -= MEASURE_WIDTH;
		}
	},
	// 楽譜全体を1小節前に戻す
	_scrollScoreSheetPrev : function() {
		for(var i = 0; i < this._measure.length; i++) {
			this._measure[i].x += MEASURE_WIDTH;
		}
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