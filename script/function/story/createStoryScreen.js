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

	// 物語作成画面全体の仲介を担当するオブジェクトを生成
	storyScreen._createStoryMediator();
	// 作曲モードへの遷移ボタンを生成
	storyScreen._createChangeMusicButton();
	// プレビュー画面のオブジェクトを生成
	storyScreen._createPreviewScreen();
	// プレビュー画面データのオブジェクトを生成
	storyScreen._createPreviewScreenData();

	storyScreen._storyMediator._createFrame();
	storyScreen._storyMediator._createBackground();
	storyScreen._storyMediator._createWeather();

	storyScreen._storyMediator._setBackgroundImage(RIVER_1);
	storyScreen._storyMediator._setWeatherImage(SUN);

	storyScreen._storyMediator._createObject("manFrontEnjoy", 700, 450);
	storyScreen._storyMediator._createObject("dogFrontEnjoy", 620, 510);
	storyScreen._storyMediator._createObject("turtleRightEnjoy", 450, 520);
	storyScreen._storyMediator._createObject("birdLeftEnjoy", 550, 520);

	storyScreen._storyMediator._showPreviewScreen();
}