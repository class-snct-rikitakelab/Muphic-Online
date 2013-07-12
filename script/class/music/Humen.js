var MEASURE_MAX			= 4;
var TEMPO_SPEED			= 4;
var OFFSET_X			= 119;
var OFFSET_Y			= 189;
var MEASURE_OFFSET_X	= 239;

var Humen = Class.create(MySprite, {
	initialize : function(image, w, h, scaleX, scaleY, x, y, game, measure_num) {
		MySprite.call(this, image, w, h, scaleX, scaleY, x, y, game);
		this.measure_num	= measure_num;
		this.measures		= new Array();
		this.last			= 0;

		for(var i = 0; i < this.measure_num; i++) {
			this.measures[i] = new Measure(i + 1);
		}
	},

	setAnimal : function(animal, measure, scale, beat, sample_flag) {
		var x			= this.scene.conversion.beatToX(beat);
		var y			= this.scene.conversion.scaleToY(scale);
		var measureX	= this.scene.conversion.beatToX(beat);
		var measureY	= this.scene.conversion.scaleToY(scale);
		var absoluteX	= null;
		var absoluteY	= null;
		var beat_index	= this.scene.conversion.xToBeatIndex(x);
		var scale_index	= this.scene.conversion.yToScaleIndex(y);

		if(this.measures[measure - 1].notes[scale_index][beat_index].exist === true) {
			return;
		}

		if(measure > (this.scene.left_measure + 1) && beat === 1) {
			x += MEASURE_OFFSET_X * 2 + 2;
		} else if(measure > this.scene.left_measure && beat === 1) {
			x += MEASURE_OFFSET_X + 2;
		} else if(measure > this.scene.left_measure + 1) {
			x += MEASURE_OFFSET_X * 2;
		} else if(measure > this.scene.left_measure) {
			x += MEASURE_OFFSET_X;
		}

		if(beat === 1) {
			absoluteX = (this.scene.conversion.beatToX(beat) + MEASURE_OFFSET_X * (measure - 1) + OFFSET_X + 2) * SCALE_X;
			absoluteY = (y + OFFSET_Y) * SCALE_Y;
		} else {
			absoluteX = (this.scene.conversion.beatToX(beat) + MEASURE_OFFSET_X * (measure - 1) + OFFSET_X) * SCALE_X;
			absoluteY = (y + OFFSET_Y) * SCALE_Y;
		}

		animal.x		= (x + OFFSET_X) * SCALE_X;
		animal.y		= (y + OFFSET_Y) * SCALE_Y;
		animal.baseX	= (x + OFFSET_X) * SCALE_X;
		animal.baseY	= (y + OFFSET_Y) * SCALE_Y;

		if(absoluteX > this.last) {
			this._resetAllLast();
			this.last = absoluteX;
			this.measures[measure - 1].setConversion(this.scene.conversion);
			this.measures[measure - 1].setNote(animal, measure, scale, beat, measureX, measureY, absoluteX, absoluteY, true);
		} else {
			this.measures[measure - 1].setConversion(this.scene.conversion);
			this.measures[measure - 1].setNote(animal, measure, scale, beat, measureX, measureY, absoluteX, absoluteY, false);
		}

		animal.setSound();

		if(sample_flag === false) {
			animal.playSound();
		} 
	},

	paintHumen : function(left_measure) {
		for(var i = 0; i < 8; i++) {
			for(var j = 0; j < 4; j++) {
				for(var k = -1; k <= 1; k++) {
					if(this.measures[left_measure + k].notes[i][j].exist === true) {
						var x = null;
						var y = null;

						if(this.measures[left_measure + k].notes[i][j].beat === 1) {
							x = (this.measures[left_measure + k].notes[i][j].measureX + OFFSET_X + MEASURE_OFFSET_X * (k + 1) + 2) * SCALE_X;
							y = (this.measures[left_measure + k].notes[i][j].measureY + OFFSET_Y) * SCALE_Y;
						} else {
							x = (this.measures[left_measure + k].notes[i][j].measureX + OFFSET_X + MEASURE_OFFSET_X * (k + 1)) * SCALE_X;
							y = (this.measures[left_measure + k].notes[i][j].measureY + OFFSET_Y) * SCALE_Y;
						}
						this.measures[left_measure + k].notes[i][j].animal.x = x;
						this.measures[left_measure + k].notes[i][j].animal.y = y;
						this.measures[left_measure + k].notes[i][j].animal.baseX = x;
						this.measures[left_measure + k].notes[i][j].animal.baseY = y;
						this.measures[left_measure + k].notes[i][j].showToHumen();
					}
				}
			}
		}
	},

	resetForInit : function(left_measure) {
		for(var i = 0; i < 8; i++) {
			for(var j = 0; j < 4; j++) {
				for(var k = 0; k < 3; k++) {
					if(this.measures[left_measure + k].notes[i][j].exist === true) {
						this.measures[left_measure + k].notes[i][j].hideFromHumen();
					}
				}
			}
		}
	},

	resetForNext : function(left_measure) {
		for(var i = 0; i < 8; i++) {
			for(var j = 0; j < 4; j++) {
				for(var k = -2; k <= 0; k++) {
					if(this.measures[left_measure + k].notes[i][j].exist === true) {
						this.measures[left_measure + k].notes[i][j].hideFromHumen();
					}
				}
			}
		}
	},

	resetForPrev : function(left_measure) {
		for(var i = 0; i < 8; i++) {
			for(var j = 0; j < 4; j++) {
				for(var k = 2; k >= 0; k--) {
					if(this.measures[left_measure + k].notes[i][j].exist === true) {
						this.measures[left_measure + k].notes[i][j].hideFromHumen();
					}
				}
			}
		}
	},

	_resetAllLast : function() {
		for(var i = 0; i < MEASURE_MAX; i++) {
			for(var j = 0; j < 8; j++) {
				for(var k = 0; k < 4; k++) {
					if(this.scene.humen.measures[i].notes[j][k].exist === true) {
						this.scene.humen.measures[i].notes[j][k].last = false;
					}
				}
			}
		}
	},
})