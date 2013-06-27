var createTopScene = function(game) {
	var top_scene = new Scene();

	var top_background = new MySprite(TOP_BACKGROUND, TOP_BACKGROUND_W, TOP_BACKGROUND_H, 0, 0, (APP_W / TOP_BACKGROUND_W), (APP_H / TOP_BACKGROUND_H), (0 * (APP_W / TOP_BACKGROUND_W)), (0 * (APP_H / TOP_BACKGROUND_H)), game);
	top_background.setScene(top_scene);
	top_background.addToScene();

	var start_button = new MySprite(START_BUTTON, START_BUTTON_W, START_BUTTON_H, 0, 0, 1.0, 1.0, 525, 300, game);
	start_button.setScene(top_scene);
	start_button.addToScene();
	// add touch event
	start_button.addEventListener(Event.TOUCH_END, function() {
		game.replaceScene( createStoryScene(game) );
	});

	return top_scene;
}