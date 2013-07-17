// <summary>
// 作曲画面のレイアウトなどを生成する
// </summary>
var createMusicScreen = function() {
	// musicSceneにSceneクラスのインスタンスを与える
	musicScene = new Scene();
	// 作曲画面の背景色を24ビットカラーで指定
	musicScene.backgroundColor = "#FFFCC0";

	// 作曲画面で使用するデータを定義したハッシュデータ群を生成
	createDataHash();

	// 作曲画面全体のインタフェース(外見)をつかさどるmusicScreenオブジェクト
	var musicScreen = new MusicScreen();
	// musicScreenの親プロパティにmusicSceneを与える
	musicScreen.parent = musicScene;

	// 動物(ネコボタン)を生成
	musicScreen._createAnimalButton();
	// 譜面を生成
	musicScreen._createHumen();

	// 再生ボタンを生成
	musicScreen._humen._createPlayButton();
	// 譜面上で小節番号を表示するサインボードを生成
	musicScreen._humen._createSignboards();
	// 音階を表す家を生成
	musicScreen._humen._createScaleHouse();
	// 小節を1つ次に進めるボタンを生成
	musicScreen._humen._createMeasureNextButton();
	// 小節を1つ前に戻すボタンを生成
	musicScreen._humen._createMeasurePrevButton();

	// 譜面の論理的なデータや処理をつかさどるオブジェクトを生成
	musicScreen._humen._createScore(8, 1);

	// 以下, サンプルデータ生成に必要な記述
	musicScreen._humen._createAnimal("cat", 1, 2, "C4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 1, 3, "D4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 1, 4, "E4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 2, 1, "F4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 2, 2, "D4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 2, 3, "E4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 2, 4, "C4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 3, 1, "G4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 3, 1, "E4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 3, 2, "C4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 3, 3, "C5", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 3, 3, "G4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 3, 4, "C4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 4, 1, "B4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 4, 1, "G4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 4, 2, "C4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 4, 3, "C5", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 4, 3, "G4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 4, 4, "C4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 5, 1, "D4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 5, 2, "G4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 5, 3, "A4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 5, 4, "B4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 6, 1, "C5", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 6, 2, "A4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 6, 3, "B4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 6, 4, "G4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 7, 1, "D4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 7, 2, "C4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 7, 3, "G4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 7, 3, "D4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 7, 4, "C4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 8, 1, "F4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 8, 1, "D4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 8, 2, "C4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 8, 3, "G4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 8, 3, "D4", TEMPO_SPEED, FADE_OUT_SPEED, true);
	musicScreen._humen._createAnimal("cat", 8, 4, "C4", TEMPO_SPEED, FADE_OUT_SPEED, true);

	// 譜面の初期化
	musicScreen._humen._score._initializeScore();
}