var createLoadingScene = function(game) {
	var loading_scene = new Scene();
	loading_scene.backgroundColor = "#FFFFA0";

	var loading_label = new Label();
	loading_label.text = "ちょっとまってね!";
	loading_label.font = "100px bold monospace";
	loading_label.color = "#000000";
	loading_label.textAlign = "center";
	loading_label.width = APP_W;
	loading_label.height = 100;
	loading_label.x = 0;
	loading_label.y = 250;

	var loading_label_back = new Label();
	loading_label_back.text = "ちょっとまってね!";
	loading_label_back.font = "100px bold monospace";
	loading_label_back.color = "#BBBBBB";
	loading_label_back.textAlign = "center";
	loading_label_back.width = APP_W;
	loading_label_back.height = 100;
	loading_label_back.x = loading_label.x + 4;
	loading_label_back.y = loading_label.y - 4;

	var createOnpu = function(color, x, y) {
		var onpu = new Label();
		onpu.text = "♪";
		onpu.font = "100px bold monospace";
		onpu.color = color;
		onpu.textAlign = "center";
		onpu.width = 100;
		onpu.height = 100;
		onpu.x = x;
		onpu.y = y;

		return onpu;
	};

	loading_scene.addChild(loading_label_back);
	loading_scene.addChild(loading_label);
	loading_scene.addChild( createOnpu("#ED1A3D", 116, loading_label.y + 120) );
	loading_scene.addChild( createOnpu("#FFB74C", 216, loading_label.y + 120) );
	loading_scene.addChild( createOnpu("#FFD400", 316, loading_label.y + 120) );
	loading_scene.addChild( createOnpu("#008000", 416, loading_label.y + 120) );
	loading_scene.addChild( createOnpu("#0000FF", 516, loading_label.y + 120) );
	loading_scene.addChild( createOnpu("#234794", 616, loading_label.y + 120) );
	loading_scene.addChild( createOnpu("#A757A8", 716, loading_label.y + 120) );

	loading_scene.addEventListener('load', function(e) {
		var core = enchant.Core.instance;
		core.removeScene(core.loadingScene);
		core.dispatchEvent(e);
	});

	return loading_scene;
}