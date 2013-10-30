var createStoryScreen = function() {
	// storySceneにSceneクラスのインスタンスを与える
	storyScene = new enchant.Scene();

	// 物語作成画面全体のインタフェース(外見)をつかさどるstoryScreenオブジェクト
	var storyScreen = new StoryScreen(storyScene);

	// 画面全体の背景を生成
	storyScreen._createScreenBackground();
	// 作曲画面への遷移ボタンを生成
	storyScreen._createMusicButton();
	// プレビュー画面のオブジェクトを生成
	storyScreen._createPreviewScreen();
	// イラストボタンのオブジェクトを生成
	storyScreen._createIllustButton();

	// 画面全体の背景を表示
	storyScreen._screenBackground._addToStoryScene();
	// 作曲画面への遷移ボタンを表示
	storyScreen._musicButton._addToStoryScene();
	// プレビュー画面を表示
	storyScreen._previewScreen._addRemoveButton();
	// イラストボタンを表示
	storyScreen._illustButton._addToStoryScene();

	// 背景セット
	storyScreen._previewScreen._setBackgroundImage(STORY_PREVIEWBACKGROUND_EMPTY._path);
	// 天気セット
	storyScreen._previewScreen._setWeatherImage(STORY_PREVIEWWEATHER_EMPTY._path);

	storyScreen._previewScreen._addPreviewScreen();
}