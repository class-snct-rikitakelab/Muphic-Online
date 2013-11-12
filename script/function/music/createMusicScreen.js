// 作曲画面のレイアウトなどを生成する
var createMusicScreen = function() {
	// musicSceneにSceneクラスのインスタンスを与える
	musicScene = new enchant.Scene();

	// 作曲画面全体のインタフェース(外見)をつかさどるmusicScreenオブジェクト
	var musicScreen = new MusicScreen(musicScene);

	// 画面全体の背景を生成
	musicScreen._createScreenBackground();
	// 物語作成画面への遷移ボタンを生成
	musicScreen._createStoryButton();
	// 譜面を生成
	musicScreen._createHumen();
	// 小節操作オブジェクトを生成
	musicScreen._humen._createMeasureController();
	// スコアシートオブジェクトを生成
	musicScreen._humen._createScoreSheet();

	musicScreen._humen._createNote("cat", 1, 1, "C4");
	musicScreen._humen._createNote("cat", 1, 2, "C4");
	musicScreen._humen._createNote("cat", 1, 3, "D4");
	musicScreen._humen._createNote("cat", 1, 4, "D4");
	musicScreen._humen._createNote("cat", 2, 1, "E4");
	musicScreen._humen._createNote("cat", 2, 2, "E4");
	musicScreen._humen._createNote("cat", 2, 3, "F4");
	musicScreen._humen._createNote("cat", 2, 4, "F4");
	musicScreen._humen._createNote("cat", 3, 1, "G4");
	musicScreen._humen._createNote("cat", 3, 2, "G4");
	musicScreen._humen._createNote("cat", 3, 3, "A4");
	musicScreen._humen._createNote("cat", 3, 4, "A4");
	musicScreen._humen._createNote("cat", 4, 1, "B4");
	musicScreen._humen._createNote("cat", 4, 2, "B4");
	musicScreen._humen._createNote("cat", 4, 3, "C5");
	musicScreen._humen._createNote("cat", 4, 4, "C5");
	musicScreen._humen._createNote("cat", 5, 1, "C4");
	musicScreen._humen._createNote("cat", 5, 2, "C4");
	musicScreen._humen._createNote("cat", 5, 3, "D4");
	musicScreen._humen._createNote("cat", 5, 4, "D4");
	musicScreen._humen._createNote("cat", 6, 1, "E4");
	musicScreen._humen._createNote("cat", 6, 2, "E4");
	musicScreen._humen._createNote("cat", 6, 3, "F4");
	musicScreen._humen._createNote("cat", 6, 4, "F4");
	musicScreen._humen._createNote("cat", 7, 1, "G4");
	musicScreen._humen._createNote("cat", 7, 2, "G4");
	musicScreen._humen._createNote("cat", 7, 3, "A4");
	musicScreen._humen._createNote("cat", 7, 4, "A4");
	musicScreen._humen._createNote("cat", 8, 1, "B4");
	musicScreen._humen._createNote("cat", 8, 2, "B4");
	musicScreen._humen._createNote("cat", 8, 3, "C5");
	musicScreen._humen._createNote("cat", 8, 4, "C5");

	musicScreen._humen._removeMeasureNote(4);
	musicScreen._humen._removeMeasureNote(5);
	musicScreen._humen._removeMeasureNote(6);
	musicScreen._humen._removeMeasureNote(7);
	musicScreen._humen._removeMeasureNote(8);
}