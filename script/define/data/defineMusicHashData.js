// 以下のハッシュテーブルはすべてグローバル変数として利用可能

// 音階から音源を取得できるハッシュテーブル
var scaleToSound = new Array();
// y座標値から音階を取得できるハッシュテーブル
var yToScale = new Array();
// 音階からy座標値を取得できるハッシュテーブル
var scaleToY = new Array();
// x座標値から拍を取得できるハッシュテーブル
var xToBeat = new Array();
// 拍からx座標値を取得できるハッシュテーブル
var beatToX = new Array();
// 譜面上のマス目のx座標値から小節を取得できるハッシュテーブル
var xBoxToMeasure = new Array();
// 譜面上のマス目のx座標値から拍を取得できるハッシュテーブル
var xBoxToBeat = new Array();
// 譜面上のマス目のy座標値から音階を取得できるハッシュテーブル
var yBoxToScale = new Array();

var defineMusicHashData = function() {
	// scaleToSoundの中身の定義
	scaleToSound["C4"] = PIANO_C4._path;
	scaleToSound["D4"] = PIANO_D4._path;
	scaleToSound["E4"] = PIANO_E4._path;
	scaleToSound["F4"] = PIANO_F4._path;
	scaleToSound["G4"] = PIANO_G4._path;
	scaleToSound["A4"] = PIANO_A4._path;
	scaleToSound["B4"] = PIANO_B4._path;
	scaleToSound["C5"] = PIANO_C5._path;

	// yToScaleの中身の定義
	yToScale[300] = "C5";
	yToScale[349] = "B4";
	yToScale[399] = "A4";
	yToScale[448] = "G4";
	yToScale[498] = "F4";
	yToScale[549] = "E4";
	yToScale[597] = "D4";
	yToScale[646] = "C4";

	// scaleToYの中身の定義
	scaleToY["C5"] = 0;
	scaleToY["B4"] = 49; // +49
	scaleToY["A4"] = 99; // +50
	scaleToY["G4"] = 148; // +49
	scaleToY["F4"] = 198; // +50
	scaleToY["E4"] = 249; // +51
	scaleToY["D4"] = 297; // +48
	scaleToY["C4"] = 346; // +49

	// xToBeatの中身の定義
	xToBeat[128] = 1;
	xToBeat[188] = 2;
	xToBeat[248] = 3;
	xToBeat[308] = 4;
	xToBeat[368] = 1;
	xToBeat[428] = 2;
	xToBeat[488] = 3;
	xToBeat[548] = 4;
	xToBeat[608] = 1;
	xToBeat[668] = 2;
	xToBeat[728] = 3;
	xToBeat[788] = 4;

	// beatToXの中身の定義
	beatToX[1] = 0;
	beatToX[2] = 60;
	beatToX[3] = 120;
	beatToX[4] = 180;

	// xBoxToMeasureの中身の定義
	for(var i = 0; i < 3; i++) {
		for(var j = 129; j < 189; j += 0.5) {
			xBoxToMeasure[j + (240 * i)] = i;
		}
	}
	for(var i = 0; i < 3; i++) {
		for(var j = 189; j < 249; j += 0.5) {
			xBoxToMeasure[j + (240 * i)] = i;
		}
	}
	for(var i = 0; i < 3; i++) {
		for(var j = 249; j < 309; j += 0.5) {
			xBoxToMeasure[j + (240 * i)] = i;
		}
	}
	for(var i = 0; i < 3; i++) {
		for(var j = 309; j < 369; j += 0.5) {
			xBoxToMeasure[j + (240 * i)] = i;
		}
	}

	// xBoxToBeatの中身の定義
	for(var i = 0; i < 3; i++) {
		for(var j = 129; j < 189; j += 0.5) {
			xBoxToBeat[j + (240 * i)] = 1;
		}
	}
	for(var i = 0; i < 3; i++) {
		for(var j = 189; j < 249; j += 0.5) {
			xBoxToBeat[j + (240 * i)] = 2;
		}
	}
	for(var i = 0; i < 3; i++) {
		for(var j = 249; j < 309; j += 0.5) {
			xBoxToBeat[j + (240 * i)] = 3;
		}
	}
	for(var i = 0; i < 3; i++) {
		for(var j = 309; j < 369; j += 0.5) {
			xBoxToBeat[j + (240 * i)] = 4;
		}
	}

	// yBoxToScaleの中身の定義
	for(var i = 250; i < 299; i++) {
		yBoxToScale[i] = "C5";
	}
	for(var i = 299; i < 349; i++) {
		yBoxToScale[i] = "B4";
	}
	for(var i = 349; i < 398; i++) {
		yBoxToScale[i] = "A4";
	}
	for(var i = 398; i < 448; i++) {
		yBoxToScale[i] = "G4";
	}
	for(var i = 448; i < 499; i++) {
		yBoxToScale[i] = "F4";
	}
	for(var i = 499; i < 547; i++) {
		yBoxToScale[i] = "E4";
	}
	for(var i = 547; i < 596; i++) {
		yBoxToScale[i] = "D4";
	}
	for(var i = 596; i < 639; i++) {
		yBoxToScale[i] = "C4";
	}
}