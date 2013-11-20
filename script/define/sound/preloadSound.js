var preloadSound = function() {
	// 音声のプリロード
	for(var i = 0; i < 4; i++) {
		core.preload(PIANO["C4"][i]._path);
		core.preload(PIANO["D4"][i]._path);
		core.preload(PIANO["E4"][i]._path);
		core.preload(PIANO["F4"][i]._path);
		core.preload(PIANO["G4"][i]._path);
		core.preload(PIANO["A4"][i]._path);
		core.preload(PIANO["B4"][i]._path);
		core.preload(PIANO["C5"][i]._path);
	}
}