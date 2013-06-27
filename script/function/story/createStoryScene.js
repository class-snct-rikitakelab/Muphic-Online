var createStoryScene = function(game) {
	var story_scene = new Scene();

	// add story scene background
	var story_back = new MySprite(STORY_BACKGROUND, STORY_BACKGROUND_W, STORY_BACKGROUND_H, 0, 0, (APP_W / STORY_BACKGROUND_W), (APP_H / STORY_BACKGROUND_H), (0 * (APP_W / STORY_BACKGROUND_W)), (0 * (APP_H / STORY_BACKGROUND_H)), game);
	story_back.setScene(story_scene);
	story_back.addToScene();

	// create sample preview
	// add background
	var preview_background = new PreviewBackground(FOREST_2_SUNNY, PREVIEW_W, PREVIEW_H, 0, 0, (APP_W / STORY_BACKGROUND_W), (APP_H / STORY_BACKGROUND_H), (PREVIEW_X * (APP_W / STORY_BACKGROUND_W)), (PREVIEW_Y * (APP_H / STORY_BACKGROUND_H)), game);
	preview_background.setScene(story_scene);
	preview_background.addToScene();

	// add man
	var preview_man = new PreviewObject(MAN_FRONT_ENJOY, MAN_FRONT_W, MAN_FRONT_H, 0, 0, (APP_W / STORY_BACKGROUND_W), (APP_H / STORY_BACKGROUND_H), (450 * (APP_W / STORY_BACKGROUND_W)), (280 * (APP_H / STORY_BACKGROUND_H)), game);
	preview_man.setScene(story_scene);
	preview_man.addToScene();

	// add dog
	var preview_dog = new PreviewObject(DOG_FRONT_ENJOY, DOG_FRONT_W, DOG_FRONT_H, 0, 0, (APP_W / STORY_BACKGROUND_W), (APP_H / STORY_BACKGROUND_H), (350 * (APP_W / STORY_BACKGROUND_W)), (350 * (APP_H / STORY_BACKGROUND_H)), game);
	preview_dog.setScene(story_scene);
	preview_dog.addToScene();

	// add preview screen frame
	setPreviewFrame(game, story_scene);

	return story_scene;
}