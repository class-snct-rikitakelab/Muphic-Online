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
	storyScreen._previewScreen._addRemoveButton();
	// イラストボタンを表示
	storyScreen._illustButton._addToStoryScene();

	// 背景セット
	storyScreen._previewScreen._setBackgroundImage(STORY_PREVIEWBACKGROUND_RIVER1._path);
	// 天気セット
	storyScreen._previewScreen._setWeatherImage(STORY_PREVIEWWEATHER_MOON._path);
	// イラストセット
	storyScreen._previewScreen._createIllust(STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._path, STORY_PREVIEWOBJECT_MAN_FRONT_REMOVEFOCUS._path, STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._width, STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._height, 700, 450);
	storyScreen._previewScreen._createIllust(STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._path, STORY_PREVIEWOBJECT_MAN_FRONT_REMOVEFOCUS._path, STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._width, STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._height, 650, 450);
	storyScreen._previewScreen._createIllust(STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._path, STORY_PREVIEWOBJECT_MAN_FRONT_REMOVEFOCUS._path, STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._width, STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._height, 700, 400);

	storyScreen._previewScreen._addPreviewScreen();

	// 以下山下担当分のテストコード
	//storyScreen._createHumanPalette();
	//storyScreen._humanPalette._addToStoryScene();
	//storyScreen._humanPalette._addIllust("man");
	storyScreen._createAnimalPalette();
	storyScreen._animalPalette._addToStoryScene();
	storyScreen._animalPalette._addIllust("dog");
}