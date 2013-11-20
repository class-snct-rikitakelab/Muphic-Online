// ピアノの音声データ
var PIANO;

var defineSound = function() {
	PIANO = new Array(8);
	for(var i = 0; i < 8; i++) {
		PIANO["C4"] = new Array(4);
		PIANO["D4"] = new Array(4);
		PIANO["E4"] = new Array(4);
		PIANO["F4"] = new Array(4);
		PIANO["G4"] = new Array(4);
		PIANO["A4"] = new Array(4);
		PIANO["B4"] = new Array(4);
		PIANO["C5"] = new Array(4);
		for(var j = 0; j < 4; j++) {
			PIANO["C4"][j] = new NormalSound("../sound/piano/pianoC4_" + j.toString() + ".mp3", false);
			PIANO["D4"][j] = new NormalSound("../sound/piano/pianoD4_" + j.toString() + ".mp3", false);
			PIANO["E4"][j] = new NormalSound("../sound/piano/pianoE4_" + j.toString() + ".mp3", false);
			PIANO["F4"][j] = new NormalSound("../sound/piano/pianoF4_" + j.toString() + ".mp3", false);
			PIANO["G4"][j] = new NormalSound("../sound/piano/pianoG4_" + j.toString() + ".mp3", false);
			PIANO["A4"][j] = new NormalSound("../sound/piano/pianoA4_" + j.toString() + ".mp3", false);
			PIANO["B4"][j] = new NormalSound("../sound/piano/pianoB4_" + j.toString() + ".mp3", false);
			PIANO["C5"][j] = new NormalSound("../sound/piano/pianoC5_" + j.toString() + ".mp3", false);
		}
	}
}