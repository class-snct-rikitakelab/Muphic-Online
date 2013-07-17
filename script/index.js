// アプリケーションサイズ比率 4:3
var APP_WIDTH	= 1024;	// アプリケーションの横幅
var APP_HEIGHT	= 768;	// アプリケーションの縦幅

// アプリケーションの核を担当するグローバル変数
var core = null;
// 作曲画面の描写に必要なグローバル変数
var musicScene = null;

// enchant.jsの初期化
enchant();

// 以下, 画面のロード終了時に実行される処理
window.onload = function() {
	// coreにCoreクラスのインスタンスを与える
	// 引数にはアプリケーションの横幅と縦幅を与える
	core = new Core(APP_WIDTH, APP_HEIGHT);

	// ロード画面の指定
	//core.loadingScene = createLoadingScene(core);

	// 数字の画像ファイルのプリロードを行う
	for(var i = 0; i < 10; i++) {
		core.preload(NUMBER_LABELS[i]);
	}

	// 作曲画面に必要な画像・音声ファイルのプリロードを行う
	core.preload(HUMEN, SCALE_HOUSE, SIGNBOARD);
	core.preload(PLAY_BUTTON, MEASURE_NEXT_BUTTON, MEASURE_PREV_BUTTON, ANIMAL_BUTTON_OFF, ANIMAL_BUTTON_ON);
	core.preload(PIANO_CAT);
	core.preload(PIANO_C4, PIANO_D4, PIANO_E4, PIANO_F4, PIANO_G4, PIANO_A4, PIANO_B4, PIANO_C5);

	// 以下, リソースのプリロード終了時に実行される処理
	core.onload = function() {
		// musicSceneの生成などを行う
		createMusicScreen();
		// 作曲画面に遷移
		core.replaceScene( musicScene );
	};

	// アプリケーションの開始
	core.start();
};