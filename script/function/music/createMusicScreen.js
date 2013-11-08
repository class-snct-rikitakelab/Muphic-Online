var MEASURE_MAX = 8;

// 作曲画面のレイアウトなどを生成する
var createMusicScreen = function() {
	// musicSceneにSceneクラスのインスタンスを与える
	musicScene = new enchant.Scene();
	// 作曲画面の背景色を24ビットカラーで指定
	musicScene.backgroundColor = "#FFFCC0";

	// 作曲画面全体のインタフェース(外見)をつかさどるmusicScreenオブジェクト
	var musicScreen = new MusicScreen();
	// musicScreenの親プロパティにmusicSceneを与える
	musicScreen.parent = musicScene;

	// 作曲画面全体の仲介を担当するオブジェクトを生成
	musicScreen._createMusicMediator();
	// 物語作成画面への遷移ボタンを生成
	musicScreen._createChangeStoryButton();
	// 再生ボタンを生成
	musicScreen._createPlayButton();
	// 動物ボタン(ネコボタン)を生成
	musicScreen._createAnimalButton();
	// 削除ボタンを生成
	musicScreen._createModosuButton();
	// 音階を表す家を生成
	musicScreen._createScaleHouse();
	// 譜面を生成
	musicScreen._createHumen();
	// 小節を1つ次に進めるボタンを生成
	musicScreen._createMeasureNextButton();
	// 小節を1つ前に戻すボタンを生成
	musicScreen._createMeasurePrevButton();
	// 譜面上で小節番号を表示するサインボードを生成
	musicScreen._createSignboards();
	// 譜面の論理的なデータや処理をつかさどるオブジェクトを生成
	musicScreen._createScoreData(MEASURE_MAX, 1);

	// 譜面の初期化
	musicScreen._musicMediator._initializeScore();
}