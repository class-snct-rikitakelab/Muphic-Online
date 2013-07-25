var createTopScreen = function() {
	// topSceneにSceneクラスのインスタンスを与える
	topScene = new enchant.Scene();

	// トップ画面全体のインタフェース(外見)をつかさどるtopScreenオブジェクト
	var topScreen = new TopScreen();
	// topScreenの親プロパティにtopSceneを与える
	topScreen.parent = topScene;

	// トップ画面全体の仲介を担当するオブジェクトを生成
	topScreen._createTopMediator();
	// 背景を生成
	topScreen._createBackground();
	// アプリケーション開始ボタンを生成
	topScreen._createStartButton();
}