var Conversion = Class.create({
	initialize : function() {

	},

	scaleToY : function(scale) {
		var y = null;

		switch(scale) {
			case "C5" :
				y = 111;
				break;
			case "B4" :
				y = 160;
				break;
			case "A4" :
				y = 210;
				break;
			case "G4" :
				y = 259;
				break;
			case "F4" :
				y = 309;
				break;
			case "E4" :
				y = 360;
				break;
			case "D4" :
				y = 408;
				break;
			case "C4" :
				y = 457;
				break;
		}

		return y;
	},

	beatToX : function(beat) {
		var x = null;

		switch(beat) {
			case 1 :
				x = 8;
				break;
			case 2 :
				x = 70;
				break;
			case 3 :
				x = 130;
				break;
			case 4 :
				x = 190;
				break;
		}

		return x;
	},

	yToScaleIndex : function(y) {
		var scale_index = null;

		switch(y) {
			case 111 :
				scale_index = 7;
				break;
			case 160 :
				scale_index = 6;
				break;
			case 210 :
				scale_index = 5;
				break;
			case 259 :
				scale_index = 4;
				break;
			case 309 :
				scale_index = 3;
				break;
			case 360 :
				scale_index = 2;
				break;
			case 408 :
				scale_index = 1;
				break;
			case 457 :
				scale_index = 0;
				break;
			default:
				scale_index = null;
				break;
		}

		return scale_index;
	},

	xToBeatIndex : function(x) {
		var beat_index = null;

		switch(x) {
			case 8 :
			case 250 :
			case 489 :
				beat_index = 0;
				break;
			case 70 :
			case 309 :
			case 549 :
				beat_index = 1;
				break;
			case 130 :
			case 369 :
			case 609 :
				beat_index = 2;
				break;
			case 190 :
			case 429 :
			case 669 :
				beat_index = 3;
				break;
			default:
				beat_index = null;
				break;
		}

		return beat_index;
	},

	blockToMeasure : function(x, left_measure) {
		var measure = null;

		if(x >= (8 + OFFSET_X) * SCALE_X && x < (250 + OFFSET_X) * SCALE_X) {
			measure = left_measure;
		} else if(x >= (250 + OFFSET_X) * SCALE_X && x < (489 + OFFSET_X) * SCALE_X) {
			measure = left_measure + 1;
		} else if(x >= (489 + OFFSET_X) * SCALE_X && x < (725 + OFFSET_X) * SCALE_X) {
			measure = left_measure + 2;
		}

		return measure;
	},

	blockToBeat : function(x) {
		var beat = null;

		if(x >= (8 + OFFSET_X) * SCALE_X && x < (70 + OFFSET_X) * SCALE_X) {
			beat = 1;
		} else if(x >= (70 + OFFSET_X) * SCALE_X && x < (130 + OFFSET_X) * SCALE_X) {
			beat = 2;
		} else if(x >= (130 + OFFSET_X) * SCALE_X && x < (190 + OFFSET_X) * SCALE_X) {
			beat = 3;
		} else if(x >= (190 + OFFSET_X) * SCALE_X && x < (250 + OFFSET_X) * SCALE_X) {
			beat = 4;
		} else if(x >= (250 + OFFSET_X) * SCALE_X && x < (309 + OFFSET_X) * SCALE_X) {
			beat = 1;
		} else if(x >= (309 + OFFSET_X) * SCALE_X && x < (369 + OFFSET_X) * SCALE_X) {
			beat = 2;
		} else if(x >= (369 + OFFSET_X) * SCALE_X && x < (429 + OFFSET_X) * SCALE_X) {
			beat = 3;
		} else if(x >= (429 + OFFSET_X) * SCALE_X && x < (489 + OFFSET_X) * SCALE_X) {
			beat = 4;
		} else if(x >= (489 + OFFSET_X) * SCALE_X && x < (549 + OFFSET_X) * SCALE_X) {
			beat = 1;
		} else if(x >= (549 + OFFSET_X) * SCALE_X && x < (609 + OFFSET_X) * SCALE_X) {
			beat = 2;
		} else if(x >= (609 + OFFSET_X) * SCALE_X && x < (669 + OFFSET_X) * SCALE_X) {
			beat = 3;
		} else if(x >= (669 + OFFSET_X) * SCALE_X && x < (725 + OFFSET_X) * SCALE_X) {
			beat = 4;
		}

		return beat;
	},

	blockToScale : function(y) {
		var scale = null;

		if(y >= (111 + OFFSET_Y) * SCALE_Y && y < (157 + OFFSET_Y) * SCALE_Y) {
			scale = "C5";
		} else if(y >= (157 + OFFSET_Y) * SCALE_Y && y < (206 + OFFSET_Y) * SCALE_Y) {
			scale = "B4";
		} else if(y >= (206 + OFFSET_Y) * SCALE_Y && y < (256 + OFFSET_Y) * SCALE_Y) {
			scale = "A4";
		} else if(y >= (256 + OFFSET_Y) * SCALE_Y && y < (305 + OFFSET_Y) * SCALE_Y) {
			scale = "G4";
		} else if(y >= (305 + OFFSET_Y) * SCALE_Y && y < (355 + OFFSET_Y) * SCALE_Y) {
			scale = "F4";
		} else if(y >= (355 + OFFSET_Y) * SCALE_Y && y < (406 + OFFSET_Y) * SCALE_Y) {
			scale = "E4";
		} else if(y >= (406 + OFFSET_Y) * SCALE_Y && y < (454 + OFFSET_Y) * SCALE_Y) {
			scale = "D4";
		} else if(y >= (454 + OFFSET_Y) * SCALE_Y && y < (503 + OFFSET_Y) * SCALE_Y) {
			scale = "C4";
		}

		return scale;
	},

	yToSound : function(y) {
		var sound = null;

		switch(y) {
			case (111 + OFFSET_Y) * SCALE_Y :
				sound = PIANO_C5;
				break;
			case (160 + OFFSET_Y) * SCALE_Y :
				sound = PIANO_B4;
				break;
			case (210 + OFFSET_Y) * SCALE_Y :
				sound = PIANO_A4;
				break;
			case (259 + OFFSET_Y) * SCALE_Y :
				sound = PIANO_G4;
				break;
			case (309 + OFFSET_Y) * SCALE_Y :
				sound = PIANO_F4;
				break;
			case (360 + OFFSET_Y) * SCALE_Y :
				sound = PIANO_E4;
				break;
			case (408 + OFFSET_Y) * SCALE_Y :
				sound = PIANO_D4;
				break;
			case (457 + OFFSET_Y) * SCALE_Y :
				sound = PIANO_C4;
				break;
			default:
				sound = null;
				break;
		}

		return sound;
	},
})