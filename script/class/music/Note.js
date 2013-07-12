var Note = Class.create({
	initialize : function(animal, exist, measure, scale, beat, measureX, measureY, absoluteX, absoluteY) {
		this.animal		= animal;
		this.exist		= exist;
		this.measure	= measure;
		this.scale		= scale;
		this.beat		= beat;
		this.measureX	= measureX;
		this.measureY	= measureY;
		this.absoluteX	= absoluteX;
		this.absoluteY	= absoluteY;
		this.last		= false;
	},

	setAnimal : function(animal) {
		this.animal = animal;
	},

	setExist : function(exist) {
		this.exist = exist;
	},

	setMeasure : function(measure) {
		this.measure = measure;
	},

	setScale : function(scale) {
		this.scale = scale;
	},

	setBeat : function(beat) {
		this.beat = beat;
	},

	setMeasureX : function(x) {
		this.measureX = x;
	},

	setMeasureY : function(y) {
		this.measureY = y;
	},

	setAbsoluteX : function(x) {
		this.absoluteX = x;
	},

	setAbsoluteY : function(y) {
		this.absoluteY = y;
	},

	setLast : function(last) {
		this.last = last;
	},

	addToHumen : function() {
		this.animal.scene.addChild(this.animal);
	},

	showToHumen : function() {
		this.animal.visible = true;
	},

	hideFromHumen : function() {
		this.animal.visible = false;
	},
})