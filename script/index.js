// app size ratio 4:3
var APP_W		= 932;
var APP_H		= 700;

enchant();

window.onload = function() {
	var game = new Game(APP_W, APP_H);

	game.loadingScene = createLoadingScene(game);

	// preload file for common
	game.preload(LABEL_0, LABEL_1, LABEL_2, LABEL_3, LABEL_4, LABEL_5, LABEL_6, LABEL_7, LABEL_8, LABEL_9);

	// preload file for top scene
	game.preload(TOP_BACKGROUND, START_BUTTON);

	// preload file for story scene
	game.preload(STORY_BACKGROUND, PREVIEW_FRAME_LEFT, PREVIEW_FRAME_RIGHT, PREVIEW_FRAME_TOP, PREVIEW_FRAME_BOTTOM);
	game.preload(FOREST_1_SUNNY, FOREST_1_CLOUDY, FOREST_1_NIGHT);
	game.preload(FOREST_2_SUNNY, FOREST_2_CLOUDY, FOREST_2_NIGHT);
	game.preload(RIVER_1_SUNNY, RIVER_1_CLOUDY, RIVER_1_NIGHT);
	game.preload(RIVER_2_SUNNY, RIVER_2_CLOUDY, RIVER_2_NIGHT);
	game.preload(TOWN_1_SUNNY, TOWN_1_CLOUDY, TOWN_1_NIGHT);
	game.preload(TOWN_2_SUNNY, TOWN_2_CLOUDY, TOWN_2_NIGHT);
	game.preload(HOUSE_1_SUNNY, HOUSE_1_CLOUDY, HOUSE_1_NIGHT);
	game.preload(HOUSE_2_SUNNY, HOUSE_2_CLOUDY, HOUSE_2_NIGHT);
	game.preload(MAN_FRONT_ENJOY, MAN_FRONT_ANGRY, MAN_FRONT_SAD, MAN_FRONT_GLAD);
	game.preload(MAN_LEFT_ENJOY, MAN_LEFT_ANGRY, MAN_LEFT_SAD, MAN_LEFT_GLAD);
	game.preload(MAN_RIGHT_ENJOY, MAN_RIGHT_ANGRY, MAN_RIGHT_SAD, MAN_RIGHT_GLAD);
	game.preload(MAN_BACK);
	game.preload(DOG_FRONT_ENJOY, DOG_FRONT_ANGRY, DOG_FRONT_SAD, DOG_FRONT_GLAD);
	game.preload(DOG_LEFT_ENJOY, DOG_LEFT_ANGRY, DOG_LEFT_SAD, DOG_LEFT_GLAD);
	game.preload(DOG_RIGHT_ENJOY, DOG_RIGHT_ANGRY, DOG_RIGHT_SAD, DOG_RIGHT_GLAD);
	game.preload(DOG_BACK);

	// preload file for music scene
	game.preload(MUSIC_BACKGROUND, HUMEN, HOUSE, SIGNBOARD);
	game.preload(START_OFF, START_ON, TEMPO_NORMAL, MEASURE_NEXT, MEASURE_PREV, PUT_OFF, PUT_ON);
	game.preload(PIANO_CAT);
	game.preload(PIANO_C4, PIANO_D4, PIANO_E4, PIANO_F4, PIANO_G4, PIANO_A4, PIANO_B4, PIANO_C5);

	game.onload = function() {
		game.replaceScene( createMusicScene(game) );
	};

	game.start();
};