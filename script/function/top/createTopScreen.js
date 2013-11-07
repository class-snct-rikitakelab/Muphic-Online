var createTopScreen = function() {
	// topSceneにSceneクラスのインスタンスを与える
	topScene = new enchant.Scene();

	// トップ画面全体のインタフェース(外見)をつかさどるtopScreenオブジェクト
	var topScreen = new TopScreen(topScene);

	// 背景を生成
	topScreen._createBackground();
	// アプリケーション開始ボタンを生成
	topScreen._createStartButton();
	topScreen._startButton._addToTopScene();
}