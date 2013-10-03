// ピアノの音声データ
var PIANO_C4;
var PIANO_D4;
var PIANO_E4;
var PIANO_F4;
var PIANO_G4;
var PIANO_A4;
var PIANO_B4;
var PIANO_C5;

var defineSound = function() {
	PIANO_C4 = new NormalSound("../sound/piano/pianoC4.mp3");
	PIANO_D4 = new NormalSound("../sound/piano/pianoD4.mp3");
	PIANO_E4 = new NormalSound("../sound/piano/pianoE4.mp3");
	PIANO_F4 = new NormalSound("../sound/piano/pianoF4.mp3");
	PIANO_G4 = new NormalSound("../sound/piano/pianoG4.mp3");
	PIANO_A4 = new NormalSound("../sound/piano/pianoA4.mp3");
	PIANO_B4 = new NormalSound("../sound/piano/pianoB4.mp3");
	PIANO_C5 = new NormalSound("../sound/piano/pianoC5.mp3");
}