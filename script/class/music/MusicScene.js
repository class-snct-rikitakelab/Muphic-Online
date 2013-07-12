var SCALE_X	= APP_W / MUSIC_BACKGROUND_W;
var SCALE_Y	= APP_H / MUSIC_BACKGROUND_H;

var MusicScene = Class.create(Scene, {
	initialize : function() {
		Scene.call(this);
		this.game				= null;
		this.humen				= null;			// シーンが持つべき譜面オブジェクトを保持するプロパティ
		this.house				= null;			// シーンが持つべき家（音階）オブジェクトを保持するプロパティ
		this.start				= null;			// シーンが持つべき「きく」ボタンオブジェクトを保持するプロパティ
		this.measure_next		= null;			// シーンが持つべき「次の小節表示」ボタンオブジェクトを保持するプロパティ
		this.measure_prev		= null;			// シーンが持つべき「前の小節表示」ボタンオブジェクトを保持するプロパティ
		this.tempo				= null;			// シーンが持つべき「曲の速さ変更」ボタンオブジェクトを保持するプロパティ
		this.put				= null;			// シーンが持つべき「おく」ボタンオブジェクトを保持するプロパティ
		this.signboard			= null;
		this.conversion			= null;
		this.new_left_measure	= 1;
		this.left_measure		= 1;			// 現在表示されている譜面上でもっとも左側に表示されている小節の番号を保持するプロパティ
		this.animals			= new Array();	// 複数の動物（音符）オブジェクトを保持する配列プロパティ
		this.animal_index		= -1;			// 動物（音符）オブジェクトの最後の配列の番号を保持するプロパティ
	},

	setGame : function(game) {
		this.game = game;
	},

	setHumen : function(humen) {
		this.humen = humen;
	},

	setHouse : function(house) {
		this.house = house;
	},

	setStart : function(start) {
		this.start = start;
	},

	setMeasureNext : function(measure_next) {
		this.measure_next = measure_next;
	},

	setMeasurePrev : function(measure_prev) {
		this.measure_prev = measure_prev;
	},

	setTempo : function(tempo) {
		this.tempo = tempo;
	},

	setPut : function(put) {
		this.put = put;
	},

	setSignboard : function(signboard) {
		this.signboard = signboard;
	},

	setConversion : function(conversion) {
		this.conversion = conversion;
	},

	addToScene : function(object) {
		this.addChild(object);
	},

	removeFromScene : function(object) {
		this.removeChild(object);
	},

	onenterframe : function(e) {
		// 「次の小節表示」ボタンが押されたとき
		if(this.new_left_measure > this.left_measure) {
			// left_measureの値を更新
			this.left_measure = this.new_left_measure;
			// 譜面上に表示される小節番号を書き換え
			this.signboard.setSignboardLabels(this.left_measure);
			this.signboard.showSignboardLabels();
			// 譜面上に表示されている動物（音符）を一度消す
			this.humen.resetForNext(this.left_measure);
			// 譜面上に新しい動物（音符）を描画
			this.humen.paintHumen(this.left_measure);
		}
		// 「前の小節表示」ボタンが押されたとき
		if(this.new_left_measure < this.left_measure) {
			// left_measureの値を更新
			this.left_measure = this.new_left_measure;
			// 譜面上に表示される小節番号を書き換え
			this.signboard.setSignboardLabels(this.left_measure);
			this.signboard.showSignboardLabels();
			// 譜面上に表示されている動物（音符）を一度消す
			this.humen.resetForPrev(this.left_measure);
			// 譜面上に新しい動物（音符）を描画
			this.humen.paintHumen(this.left_measure);
		}
	},

	ontouchend : function(e) {
		if(this.put.state === "non put" || this.start.state === "start") {
			return;
		}
		if(e.x >= (8 + OFFSET_X) * SCALE_X && e.x <= (729 + OFFSET_X) * SCALE_X) {
			if(e.y >= (111 + OFFSET_Y) * SCALE_Y && e.y <= (499 + OFFSET_Y) * SCALE_Y) {
				var measure	= this.conversion.blockToMeasure(e.x, this.left_measure);
				var beat	= this.conversion.blockToBeat(e.x);
				var scale	= this.conversion.blockToScale(e.y);

				this.animal_index++;
				this.animals[this.animal_index] = new Animal(PIANO_CAT, PIANO_CAT_W, PIANO_CAT_H, SCALE_X, SCALE_Y, null, null, this.game);
				this.animals[this.animal_index].setGame(this.game);
				this.animals[this.animal_index].setScene(this);
				this.humen.setAnimal(this.animals[this.animal_index], measure, scale, beat, false);
			}
		}
	},
})