var Start = Class.create(MySprite, {
	initialize : function(image, w, h, originX, originY, scaleX, scaleY, x, y, game) {
		MySprite.call(this, image, w, h, originX, originY, scaleX, scaleY, x, y, game);
		this.state		= "stop";
	},

	_touchEnable : function() {
		this.opacity		= 1.0;
		this.touchEnabled	= true;
	},

	_touchDisable : function() {
		this.opacity		= 0.5;
		this.touchEnabled	= false;
	},

	ontouchend : function(e) {
		if(this.scene.animal_index === -1) {
			return;
		}
		for(var i = 0; i < MEASURE_MAX; i++) {
			for(var j = 0; j < 8; j++) {
				for(var k = 0; k < 4; k++) {
					if(this.scene.humen.measures[i].notes[j][k].exist === true) {
						this.scene.humen.measures[i].notes[j][k].animal.x = this.scene.humen.measures[i].notes[j][k].absoluteX;
						this.scene.humen.measures[i].notes[j][k].animal.y = this.scene.humen.measures[i].notes[j][k].absoluteY;
						this.scene.humen.measures[i].notes[j][k].animal.baseX = this.scene.humen.measures[i].notes[j][k].absoluteX;
						this.scene.humen.measures[i].notes[j][k].animal.baseY = this.scene.humen.measures[i].notes[j][k].absoluteY;
						this.scene.humen.measures[i].notes[j][k].animal.last = this.scene.humen.measures[i].notes[j][k].last;
					}
				}
			}
		}
		for(var i = 0; i <= this.scene.animal_index; i++) {
			this.scene.animals[i].walk_flag = true;
			this.scene.animals[i].played_flag = false;
			this.scene.animals[i].opacity = 1.0;
		}
		this.scene.signboard.setSignboardLabels(1);
		this.scene.signboard.showSignboardLabels();
		this.scene.humen.paintHumen(1);
		this.state = "start";
	},

	onenterframe : function(e) {
		if(this.state === "start") {
			this._touchDisable();
		} else if(this.state === "stop") {
			this._touchEnable();
		}
	},
})