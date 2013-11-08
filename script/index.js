// アプリケーションサイズ比率 4:3
var APP_WIDTH = 1024; // アプリケーションの横幅
var APP_HEIGHT = 768; // アプリケーションの縦幅

// アプリケーションの核を担当するグローバル変数
var core = null;
// トップ画面の描写に必要なグローバル変数
var topScene = null;
// 物語作成画面の描写に必要なグローバル変数
var storyScene = null;
// 作曲画面の描写に必要なグローバル変数
var musicScene = null;

// enchant.jsの初期化
enchant();

// 以下, 画面のロード終了時に実行される処理
window.onload = function() {
	// coreにCoreクラスのインスタンスを与える
	// 引数にはアプリケーションの横幅と縦幅を与える
	core = new enchant.Core(APP_WIDTH, APP_HEIGHT);

	// ロード画面の指定
	core.loadingScene = createLoadingScreen();

	// 画像データの定義とプリロード
	defineLabelImage();
	defineTopImage();
	defineStoryImage();
	defineMusicImage();
	preloadLabelImage();
	preloadTopImage();
	preloadStoryImage();
	preloadMusicImage();
	// 音声データの定義とプリロード
	defineSound();
	preloadSound();

	// 物語作成で使用するハッシュデータの定義
	defineStoryHashData();
	// 作曲で使用するハッシュデータの定義
	defineMusicHashData();

	// 以下, リソースのプリロード終了時に実行される処理
	core.onload = function() {
		// topSceneの生成などを行う
		createTopScreen();
		// storySceneの生成などを行う
		createStoryScreen();
		// musicSceneの生成などを行う
		createMusicScreen();
		// 作曲画面に遷移
		core.replaceScene(topScene);
	};

	// アプリケーションの開始
	core.start();
};