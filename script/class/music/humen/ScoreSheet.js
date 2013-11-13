var MEASURE_MAX = 8;
var MEASURE_WIDTH = 240;
var SPEED = 2;

var ScoreSheet = enchant.Class.create(MusicSceneGroup, {
	// コンストラクタ
	initialize : function(x, y, parent) {
		MusicSceneGroup.call(this, parent);
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._measure = new Array(MEASURE_MAX);
		this._lastMeasure = 1;
		this._state = new NonPlayingScoreSheetState(this);
		// 初期化メソッド
		this._assignMeasure();
		this._addMeasureToGroup();
	},

	// 小節プロパティを割り当てる
	_assignMeasure : function() {
		for(var number = 1; number <= this._measure.length; number++) {
			var x = MEASURE_WIDTH * (number - 1);
			var y = 0;
			this._measure[number - 1] = new Measure(number, x, y, this);
		}
	},
	// 小節プロパティを自分自身へ子ノードとして追加
	_addMeasureToGroup : function() {
		for(var number = 1; number <= this._measure.length; number++) {
			this._addToGroup(this._measure[number - 1]);
		}
	},

	// 新しい音符を作る
	_createNote : function(animal, measure, beat, scale) {
		this._measure[measure - 1]._createNote(animal, measure, beat, scale);
		for(var number = this._measure.length; number >= 1; number--) {
			if(this._measure[number - 1]._noteCount > 0) {
				this._lastMeasure = number;
				break;
			}
		}
	},
	// 音符を破棄
	_destroyNote : function(measure, beat, scale) {
		this._measure[measure - 1]._destroyNote(beat, scale);
		for(var number = this._measure.length; number >= 1; number--) {
			if(this._measure[number - 1]._noteCount > 0) {
				this._lastMeasure = number;
				break;
			}
		}
	},
	// 引数のパラメータを持つ音符があるかどうか
	_checkNote : function(measure, beat, scale) {
		return this._measure[measure - 1]._checkNote(beat, scale);
	},

	// 楽譜全体を次に進める
	_scrollScoreSheetNext : function(measure) {
		this.x -= MEASURE_WIDTH * measure;
	},
	// 楽譜全体を前に戻す
	_scrollScoreSheetPrev : function(measure) {
		this.x += MEASURE_WIDTH * measure;
	},
	// 指定した小節の音符全体を加える
	_addMeasureNote : function(measure) {
		this._addToGroup(this._measure[measure - 1]);
	},
	// 指定した小節の音符全体を消す
	_removeMeasureNote : function(measure) {
		this._removeFromGroup(this._measure[measure - 1]);
	},

	// フレーム処理
	onenterframe : function() {
		this._state._frameBehavior();
	},

	// 各種ステートセッタ
	// ステートセッタ
	_setState : function(state) {
		this._state = state;
	},
	// 非再生ステートセッタ
	_setNonPlayingScoreSheetState : function() {
		this._setState(new NonPlayingScoreSheetState(this));
	},
	// 再生ステートセッタ
	_setPlayingScoreSheetState : function() {
		this._setState(new PlayingScoreSheetState(this));
	},

	// 子メソッド
	// 音符への再生ステートセッタ
	_setPlayingNoteState : function() {
		for(var number = 1; number <= this._measure.length; number++) {
			this._measure[number - 1]._setPlayingNoteState();
		}
	},
	// 音符への非再生ステートセッタ
	_setNonPlayingNoteState : function() {
		for(var number = 1; number <= this._measure.length; number++) {
			this._measure[number - 1]._setNonPlayingNoteState();
		}
	},

	// 親メソッド
	// 再生終了セッティング
	_setPlayed : function() {
		this._parent._setPlayed();
	},
})