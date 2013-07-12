var PreviewScreen = Class.create({
	initialize : function() {
		this.object_name = new Array();
		this.object_num = 0;
		this.background = null;
	},

	setBackground : function(background) {
		this.background = background;
	},

	addObject : function(object) {
		this.object_name[this.object_num] = object;
		this.object_num++;
	},

	setPreviewFrame : function(game, scene) {
		// create top frame
		var preview_frame_top = new MySprite(PREVIEW_FRAME_TOP, PREVIEW_FRAME_TOP_W, PREVIEW_FRAME_TOP_H, 0, 0, (APP_W / STORY_BACKGROUND_W), (APP_H / STORY_BACKGROUND_H), (125 * (APP_W / STORY_BACKGROUND_W)), (153 * (APP_H / STORY_BACKGROUND_H)), game);
		preview_frame_top.setScene(scene);
		preview_frame_top.addToScene();

		// create bottom frame
		var preview_frame_bottom = new MySprite(PREVIEW_FRAME_BOTTOM, PREVIEW_FRAME_BOTTOM_W, PREVIEW_FRAME_BOTTOM_H, 0, 0, (APP_W / STORY_BACKGROUND_W), (APP_H / STORY_BACKGROUND_H), (125 * (APP_W / STORY_BACKGROUND_W)), (471 * (APP_H / STORY_BACKGROUND_H)), game);
		preview_frame_bottom.setScene(scene);
		preview_frame_bottom.addToScene();

		// create left frame
		var preview_frame_left = new MySprite(PREVIEW_FRAME_LEFT, PREVIEW_FRAME_LEFT_W, PREVIEW_FRAME_LEFT_H, 0, 0, (APP_W / STORY_BACKGROUND_W), (APP_H / STORY_BACKGROUND_H), (125 * (APP_W / STORY_BACKGROUND_W)), (174 * (APP_H / STORY_BACKGROUND_H)), game);
		preview_frame_left.setScene(scene);
		preview_frame_left.addToScene();

		// create right frame
		var preview_frame_right = new MySprite(PREVIEW_FRAME_RIGHT, PREVIEW_FRAME_RIGHT_W, PREVIEW_FRAME_RIGHT_H, 0, 0, (APP_W / STORY_BACKGROUND_W), (APP_H / STORY_BACKGROUND_H), (660 * (APP_W / STORY_BACKGROUND_W)), (174 * (APP_H / STORY_BACKGROUND_H)), game);
		preview_frame_right.setScene(scene);
		preview_frame_right.addToScene();
	},
});