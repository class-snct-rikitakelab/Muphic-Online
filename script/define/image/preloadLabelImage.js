var preloadLabelImage = function() {
	// ラベルの画像のプリロード
	for(var i = 0; i < 10; i++) {
		core.preload(LABEL[i]._path);
	}
}