var createMusicScene = function(game) {
	var music_scene = new MusicScene();
	music_scene.setGame(game);

	var conversion = new Conversion();
	music_scene.setConversion(conversion);

	var signboard = new Signboard(3);
	music_scene.setSignboard(signboard);

	// add music scene background
	var music_background = new MySprite(MUSIC_BACKGROUND, MUSIC_BACKGROUND_W, MUSIC_BACKGROUND_H, SCALE_X, SCALE_Y, 0, 0, game);
	music_scene.addToScene(music_background);

	var humen = new Humen(HUMEN, HUMEN_W, HUMEN_H, SCALE_X, SCALE_Y, (((MUSIC_BACKGROUND_W / 2) - (HUMEN_W / 2)) * SCALE_X), (190 * SCALE_Y), game, MEASURE_MAX);
	humen.setGame(game);
	humen.setScene(music_scene);
	music_scene.setHumen(humen);
	music_scene.addToScene(humen);

	var measure_next = new MeasureNext(MEASURE_NEXT, MEASURE_NEXT_W, MEASURE_NEXT_H, SCALE_X, SCALE_Y, (860 * SCALE_X), (702 * SCALE_Y), game);
	measure_next.setScene(music_scene);
	music_scene.setMeasureNext(measure_next);
	music_scene.addToScene(measure_next);

	var measure_prev = new MeasurePrev(MEASURE_PREV, MEASURE_PREV_W, MEASURE_PREV_H, SCALE_X, SCALE_Y, (130 * SCALE_X), (702 * SCALE_Y), game);
	measure_prev.setScene(music_scene);
	music_scene.setMeasurePrev(measure_prev);
	music_scene.addToScene(measure_prev);

	var house = new MySprite(HOUSE, HOUSE_W, HOUSE_H, SCALE_X, SCALE_Y, (16 * SCALE_X), (143 * SCALE_Y), game);
	house.setScene(music_scene);
	music_scene.setHouse(house);
	music_scene.addToScene(house);

	var start = new Start(START_OFF, START_OFF_W, START_OFF_H, SCALE_X, SCALE_Y, (210 * SCALE_X), (30 * SCALE_Y), game);
	start.setScene(music_scene);
	music_scene.setStart(start);
	music_scene.addToScene(start);

	var put = new Put(PUT_OFF, PUT_OFF_W, PUT_OFF_H, SCALE_X, SCALE_Y, (919 * SCALE_X), (680 * SCALE_Y), game);
	put.setGame(game);
	put.setScene(music_scene);
	music_scene.setPut(put);
	music_scene.addToScene(put);

	music_scene.signboard.makeSignboards(game);
	music_scene.signboard.makeSignboardLabels(game);
	music_scene.signboard.setGame(game);
	music_scene.signboard.setScene(music_scene);
	music_scene.signboard.setSignboardLabels(music_scene.left_measure);
	music_scene.signboard.showSignboards();
	music_scene.signboard.showSignboardLabels();

	makeSampleData(game, music_scene, humen);

	humen.resetForInit(music_scene.left_measure);
	humen.paintHumen(music_scene.left_measure);

	return music_scene;
}