var AnimalSign = enchant.Class.create(enchant.Sprite, {
	initialize : function(animalName) {
		var animalImage		= animalsData[animalName].image;
		var animalWidth		= animalsData[animalName].width;
		var animalHeight	= animalsData[animalName].height;

		enchant.Sprite.call(this, animalWidth, animalHeight);
		this.image		= core.assets[animalImage];
		this.opacity	= 0.5;

		this._parent	= null;
	},

	ontouchend : function(event) {
		var measure	= this._parent._takeClickMeasure(event.x);
		var beat	= this._parent._takeClickBeat(event.x);
		var scale	= this._parent._takeClickScale(event.y);

		for(var i = 0, max = this._parent._getNotesLength(); i < max; i++) {
			if(measure === this._parent._getNoteMeasure(i)) {
				if(beat === this._parent._getNoteBeat(i)) {
					if(scale === this._parent._getNoteScale(i)) {
						return;
					}
				}
			}
		}
		musicScene.removeChild(this);
		this._parent._createAnimal("cat", measure, beat, scale, TEMPO_SPEED, FADE_OUT_SPEED, false);
	},
})