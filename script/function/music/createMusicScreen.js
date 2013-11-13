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
	// 再生ボタンを生成
	musicScreen._createPlayButton();
	// 小節操作オブジェクトを生成
	musicScreen._createMeasureController();
	// スコアシートオブジェクトを生成
	musicScreen._createScoreSheet();
	// 音符ボタン操作オブジェクトを生成
	musicScreen._createNoteButtonController();

	musicScreen._humen._removeMeasureNote(4);
	musicScreen._humen._removeMeasureNote(5);
	musicScreen._humen._removeMeasureNote(6);
	musicScreen._humen._removeMeasureNote(7);
	musicScreen._humen._removeMeasureNote(8);
}