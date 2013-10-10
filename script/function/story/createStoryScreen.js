var createStoryScreen = function() {
	// storySceneにSceneクラスのインスタンスを与える
	storyScene = new enchant.Scene();
	// 物語作成画面の背景色を24ビットカラーで指定
	storyScene.backgroundColor = "#FFFCC0";

	// 物語作成画面全体のインタフェース(外見)をつかさどるstoryScreenオブジェクト
	var storyScreen = new StoryScreen();
	// musicScreenの親プロパティにmusicSceneを与える
	storyScreen.parent = storyScene;

	// 物語作成画面全体の仲介を担当するオブジェクトを生成
	storyScreen._createStoryMediator();
	// 作曲モードへの遷移ボタンを生成
	storyScreen._createChangeMusicButton();
	// プレビュー画面のオブジェクトを生成
	storyScreen._createPreviewScreen();
	// プレビュー画面データのオブジェクトを生成
	storyScreen._createPreviewScreenData();
	// じんぶつイラストボタンのオブジェクトを生成
	storyScreen._createHumanIllustButton();
	// どうぶつイラストボタンのオブジェクトを生成
	storyScreen._createAnimalIllustButton();
	// あいてむイラストボタンのオブジェクトを生成
	storyScreen._createItemIllustButton();
	// はいけいイラストボタンのオブジェクトを生成
	storyScreen._createBackgroundIllustButton();

	storyScreen._storyMediator._createFrame();
	storyScreen._storyMediator._createBackground();
	storyScreen._storyMediator._createWeather();

	storyScreen._storyMediator._setBackgroundImage(STORY_PREVIEWBACKGROUND_RIVER2._path);
	storyScreen._storyMediator._setWeatherImage(STORY_PREVIEWWEATHER_SUN._path);

	storyScreen._storyMediator._createObject("man", "front", "enjoy", 700, 450);
	storyScreen._storyMediator._createObject("dog", "front", "enjoy", 620, 510);
	storyScreen._storyMediator._createObject("turtle", "right", "enjoy", 450, 520);
	storyScreen._storyMediator._createObject("bird", "left", "enjoy", 550, 520);

	storyScreen._storyMediator._showPreviewScreen();

	// 以下山下担当分のテストコード
	storyScreen._createPalette();
	storyScreen._storyMediator._palette._createManPropertyButton();
	storyScreen._storyMediator._palette._createLadyPropertyButton();
	storyScreen._storyMediator._palette._createBoyPropertyButton();
	storyScreen._storyMediator._palette._createGirlPropertyButton();
	storyScreen._storyMediator._palette._createManImages();
	storyScreen._storyMediator._palette._createLadyImages();
	storyScreen._storyMediator._palette._createBoyImages();
	storyScreen._storyMediator._palette._createGirlImages();
	storyScreen._storyMediator._palette._manPropertyButton._setIsPush(true);
	storyScreen._storyMediator._palette._showManImages();
}