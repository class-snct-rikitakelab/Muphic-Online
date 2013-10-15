var createStoryScreen = function() {
	// storySceneにSceneクラスのインスタンスを与える
	storyScene = new enchant.Scene();
	// 物語作成画面の背景色を24ビットカラーで指定
	storyScene.backgroundColor = "#FFFCC0";

	// 物語作成画面全体のインタフェース(外見)をつかさどるstoryScreenオブジェクト
	var storyScreen = new StoryScreen(storyScene);

	// 作曲画面への遷移ボタンを生成
	storyScreen._createMusicButton();
	// プレビュー画面のオブジェクトを生成
	storyScreen._createPreviewScreen();
	// イラストボタンのオブジェクトを生成
	storyScreen._createIllustButton();

	// 作曲画面への遷移ボタンを表示
	storyScreen._musicButton._addToStoryScene();
	// プレビュー画面を表示
	storyScreen._previewScreen._addToStoryScene();
	// イラストボタンを表示
	storyScreen._illustButton._addToStoryScene();

	// 背景セット
	storyScreen._previewScreen._setBackgroundImage(STORY_PREVIEWBACKGROUND_RIVER1._path);
	// 天気セット
	storyScreen._previewScreen._setWeatherImage(STORY_PREVIEWWEATHER_MOON._path);
	// イラストセット
	storyScreen._previewScreen._createIllust("man", "front", "enjoy", 700, 450);
	storyScreen._previewScreen._createIllust("dog", "front", "enjoy", 620, 510);
	storyScreen._previewScreen._createIllust("turtle", "right", "enjoy", 450, 520);
	storyScreen._previewScreen._createIllust("bird", "left", "enjoy", 550, 520);

	storyScreen._previewScreen._addToStoryScene();

	// 以下山下担当分のテストコード
	storyScreen._createPalette();
	storyScreen._palette._addToStoryScene();
	storyScreen._palette._addIllust("man");
}