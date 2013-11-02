var createLoadingScreen = function() {
	var loadingScene = new enchant.Scene();
	loadingScene.backgroundColor = "#FEEC62";

	var sprite = new enchant.Sprite(590, 429);
	enchant.Core.instance.load("../image/loading/nowLoading.png", function() {
		sprite.image = core.assets["../image/loading/nowLoading.png"];
		sprite.x = (APP_WIDTH - 590) / 2;
		sprite.y = (APP_HEIGHT - 429) / 2;
		loadingScene.addChild(sprite);
	});

	/*
	// リソースファイルを1つ読み込む度に実行される
	loadingScene.addEventListener('progress', function(event) {
		// 進行度表示の更新
		progressLabel.text = parseInt((event.loaded / event.total) * 100) + "%";
	});
	*/

	loadingScene.addEventListener('load', function(event) {
		var core = enchant.Core.instance;
		core.removeScene(core.loadingScene);
		core.dispatchEvent(event);
	});

	return loadingScene;
	/*
	var loadingScene = new enchant.Scene();
	loadingScene.backgroundColor = "#FEEC62";

	// "ちょっとまってね"の描画
	drawLabel(4, 247, 1024, 116, "ちょっとまってね", "gray", "112px", loadingScene);
	drawLabel(0, 250, 1024, 116, "ちょっとまってね", "black", "112px", loadingScene);

	// "♪"の描画
	drawLabel(162, 400, 100, 100, "♪", "#ED1A3D", "96px", loadingScene);
	drawLabel(262, 400, 100, 100, "♪", "#F15A22", "96px", loadingScene);
	drawLabel(362, 400, 100, 100, "♪", "#FFD400", "96px", loadingScene);
	drawLabel(462, 400, 100, 100, "♪", "#008000", "96px", loadingScene);
	drawLabel(562, 400, 100, 100, "♪", "#0067C0", "96px", loadingScene);
	drawLabel(662, 400, 100, 100, "♪", "#234794", "96px", loadingScene);
	drawLabel(762, 400, 100, 100, "♪", "#A757A8", "96px", loadingScene);

	// "じゅんびちゅう"の描画
	drawLabel(0, 520, 1024, 68, "じゅんびちゅう", "gray", "64px", loadingScene);

	// 進行度パーセンテージの描画
	var progressLabel = new enchant.Label();
	progressLabel.text = 0 + "%";
	progressLabel.textAlign = "center";
	progressLabel.color = "gray";
	progressLabel.font = "64px Paratino";
	progressLabel.width = 1024;
	progressLabel.height = 68;
	progressLabel.x = 0;
	progressLabel.y = 590;
	loadingScene.addChild(progressLabel);

	// リソースファイルを1つ読み込む度に実行される
	loadingScene.addEventListener('progress', function(event) {
		// 進行度表示の更新
		progressLabel.text = parseInt((event.loaded / event.total) * 100) + "%";
	});

	loadingScene.addEventListener('load', function(event) {
		var core = enchant.Core.instance;
		core.removeScene(core.loadingScene);
		core.dispatchEvent(event);
	});

	return loadingScene;
	*/
}