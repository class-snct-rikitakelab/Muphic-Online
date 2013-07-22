var createStoryScreen = function() {
	// storySceneにSceneクラスのインスタンスを与える
	storyScene = new enchant.Scene();
	// 物語作成画面の背景色を24ビットカラーで指定
	storyScene.backgroundColor = "#FFFCC0";

	// 物語作成画面全体のインタフェース(外見)をつかさどるstoryScreenオブジェクト
	var storyScreen = new StoryScreen();
	// musicScreenの親プロパティにmusicSceneを与える
	storyScreen.parent = storyScene;

	// 物語作成画面で使用するデータを定義したハッシュデータ群を生成
	createStoryDataHash();

	// 作曲モードへの遷移ボタンを生成
	storyScreen._createChangeMusicButton();

	// プレビュー画面のフレームを生成
	storyScreen._createPreviewScreen();

	storyScreen._previewScreen._createFrame();
	storyScreen._previewScreen._createBackground();
	storyScreen._previewScreen._createWeather();

	storyScreen._previewScreen._setBackgroundImage(RIVER_1);
	storyScreen._previewScreen._setWeatherImage(SUN);

	storyScreen._previewScreen._createObject("manFrontEnjoy", 700, 450);
	storyScreen._previewScreen._createObject("dogFrontEnjoy", 620, 510);
	storyScreen._previewScreen._createObject("turtleRightEnjoy", 450, 520);
	storyScreen._previewScreen._createObject("birdLeftEnjoy", 550, 520);

	storyScreen._previewScreen._showPreviewScreen();
}