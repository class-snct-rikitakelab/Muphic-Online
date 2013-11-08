var AnimalSign = enchant.Class.create(enchant.Sprite, {
	initialize : function(animalName) {
		var path = MUSIC_ANIMAL[animalName]._path;
		var width = MUSIC_ANIMAL[animalName]._width;
		var height = MUSIC_ANIMAL[animalName]._height;

		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.opacity = 0.5;
		this._parent = null;
	},

	// クリック時の処理
	ontouchend : function(event) {
		var measure = this._parent._takeClickMeasure(event.x);
		var beat = this._parent._takeClickBeat(event.x);
		var scale = this._parent._takeClickScale(event.y);

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