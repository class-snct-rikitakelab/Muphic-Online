var RemoveSign = enchant.Class.create(enchant.Sprite, {
	initialize : function() {
		var path = MUSIC_REMOVECURSOR._path;
		var width = MUSIC_REMOVECURSOR._width;
		var height = MUSIC_REMOVECURSOR._height;

		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this._parent = null;
	},

	_setCursorImage : function() {
		this.image = core.assets[MUSIC_REMOVECURSOR._path];
	},

	_setBoxImage : function() {
		this.image = core.assets[MUSIC_REMOVEBOX._path];
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
						this._parent._removeNote(i);
						this._setCursorImage();
						break;
					}
				}
			}
		}
	},
})