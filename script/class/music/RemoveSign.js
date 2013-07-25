var RemoveSign = enchant.Class.create(enchant.Sprite, {
	initialize : function() {
		enchant.Sprite.call(this, REMOVE_CURSOR_WIDTH, REMOVE_CURSOR_HEIGHT);
		this.image		= core.assets[REMOVE_CURSOR];

		this._parent	= null;
	},

	_setCursorImage : function() {
		this.image = core.assets[REMOVE_CURSOR];
	},

	_setBoxImage : function() {
		this.image = core.assets[REMOVE_BOX];
	},

	ontouchend : function(event) {
		var measure	= this._parent._takeClickMeasure(event.x);
		var beat	= this._parent._takeClickBeat(event.x);
		var scale	= this._parent._takeClickScale(event.y);

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