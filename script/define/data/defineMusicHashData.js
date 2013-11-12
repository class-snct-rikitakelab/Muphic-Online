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
	scaleToY["C5"] = 249;
	scaleToY["B4"] = 298; // +49
	scaleToY["A4"] = 348; // +50
	scaleToY["G4"] = 397; // +49
	scaleToY["F4"] = 447; // +50
	scaleToY["E4"] = 498; // +51
	scaleToY["D4"] = 546; // +48
	scaleToY["C4"] = 595; // +49

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
	beatToX[1] = 11;
	beatToX[2] = 71;
	beatToX[3] = 131;
	beatToX[4] = 191;

	// xBoxToBeatの中身の定義
	for(var i = 0; i < 3; i++) {
		for(var j = 128; j < 188; j += 0.5) {
			xBoxToBeat[j + (240 * i)] = 1;
		}
	}
	for(var i = 0; i < 3; i++) {
		for(var j = 188; j < 248; j += 0.5) {
			xBoxToBeat[j + (240 * i)] = 2;
		}
	}
	for(var i = 0; i < 3; i++) {
		for(var j = 248; j < 308; j += 0.5) {
			xBoxToBeat[j + (240 * i)] = 3;
		}
	}
	for(var i = 0; i < 3; i++) {
		for(var j = 308; j < 368; j += 0.5) {
			xBoxToBeat[j + (240 * i)] = 4;
		}
	}

	// yBoxToScaleの中身の定義
	for(var i = 300; i < 349; i++) {
		yBoxToScale[i] = "C5";
	}
	for(var i = 349; i < 399; i++) {
		yBoxToScale[i] = "B4";
	}
	for(var i = 399; i < 448; i++) {
		yBoxToScale[i] = "A4";
	}
	for(var i = 448; i < 498; i++) {
		yBoxToScale[i] = "G4";
	}
	for(var i = 498; i < 549; i++) {
		yBoxToScale[i] = "F4";
	}
	for(var i = 549; i < 597; i++) {
		yBoxToScale[i] = "E4";
	}
	for(var i = 597; i < 646; i++) {
		yBoxToScale[i] = "D4";
	}
	for(var i = 646; i < 692; i++) {
		yBoxToScale[i] = "C4";
	}
}