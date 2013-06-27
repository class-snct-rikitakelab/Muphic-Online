var setPreviewFrame = function(game, scene) {
	var preview_frame_top = new Sprite(PREVIEW_FRAME_TOP_W, PREVIEW_FRAME_TOP_H);
	preview_frame_top.image = game.assets[PREVIEW_FRAME_TOP];
	preview_frame_top.originX = 0;
	preview_frame_top.originY = 0;
	preview_frame_top.scaleX = APP_W / STORY_BACKGROUND_W;
	preview_frame_top.scaleY = APP_H / STORY_BACKGROUND_H;
	preview_frame_top.x = 125 * (APP_W / STORY_BACKGROUND_W);
	preview_frame_top.y = 153 * (APP_H / STORY_BACKGROUND_H);
	scene.addChild(preview_frame_top);

	var preview_frame_bottom = new Sprite(PREVIEW_FRAME_BOTTOM_W, PREVIEW_FRAME_BOTTOM_H);
	preview_frame_bottom.image = game.assets[PREVIEW_FRAME_BOTTOM];
	preview_frame_bottom.originX = 0;
	preview_frame_bottom.originY = 0;
	preview_frame_bottom.scaleX = APP_W / STORY_BACKGROUND_W;
	preview_frame_bottom.scaleY = APP_H / STORY_BACKGROUND_H;
	preview_frame_bottom.x = 125 * (APP_W / STORY_BACKGROUND_W);
	preview_frame_bottom.y = 471 * (APP_H / STORY_BACKGROUND_H);
	scene.addChild(preview_frame_bottom);

	var preview_frame_left = new Sprite(PREVIEW_FRAME_LEFT_W, PREVIEW_FRAME_LEFT_H);
	preview_frame_left.image = game.assets[PREVIEW_FRAME_LEFT];
	preview_frame_left.originX = 0;
	preview_frame_left.originY = 0;
	preview_frame_left.scaleX = APP_W / STORY_BACKGROUND_W;
	preview_frame_left.scaleY = APP_H / STORY_BACKGROUND_H;
	preview_frame_left.x = 125 * (APP_W / STORY_BACKGROUND_W);
	preview_frame_left.y = 174 * (APP_H / STORY_BACKGROUND_H);
	scene.addChild(preview_frame_left);

	var preview_frame_right = new Sprite(PREVIEW_FRAME_RIGHT_W, PREVIEW_FRAME_RIGHT_H);
	preview_frame_right.image = game.assets[PREVIEW_FRAME_RIGHT];
	preview_frame_right.originX = 0;
	preview_frame_right.originY = 0;
	preview_frame_right.scaleX = APP_W / STORY_BACKGROUND_W;
	preview_frame_right.scaleY = APP_H / STORY_BACKGROUND_H;
	preview_frame_right.x = 660 * (APP_W / STORY_BACKGROUND_W);
	preview_frame_right.y = 174 * (APP_H / STORY_BACKGROUND_H);
	scene.addChild(preview_frame_right);
}