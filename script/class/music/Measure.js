var Measure = Class.create({
	initialize : function(num) {
		this.num		= num;
		this.notes		= new Array(8);
		this.conversion	= null;

		for(var i = 0; i < 8; i++) {
			this.notes[i] = new Array(4);
			for(var j = 0; j < 4; j++) {
				this.notes[i][j] = new Note(null, false, null, null, null, null, null, null, null);
			}
		}
	},

	setConversion : function(conversion) {
		this.conversion = conversion;
	},

	setNote : function(animal, measure, scale, beat, measureX, measureY, absoluteX, absoluteY, last) {
		var scale_index	= this.conversion.yToScaleIndex(measureY);
		var beat_index	= this.conversion.xToBeatIndex(measureX);

		this.notes[scale_index][beat_index].setAnimal(animal);
		this.notes[scale_index][beat_index].setExist(true);
		this.notes[scale_index][beat_index].setMeasure(measure);
		this.notes[scale_index][beat_index].setScale(scale);
		this.notes[scale_index][beat_index].setBeat(beat);
		this.notes[scale_index][beat_index].setMeasureX(measureX);
		this.notes[scale_index][beat_index].setMeasureY(measureY);
		this.notes[scale_index][beat_index].setAbsoluteX(absoluteX);
		this.notes[scale_index][beat_index].setAbsoluteY(absoluteY);
		this.notes[scale_index][beat_index].setLast(last);
		this.notes[scale_index][beat_index].addToHumen();
	},
})