var createLoadingScreen = function(game) {
	var progress		= 0;
	var loaded			= 0;
	var total			= 0;
	var progressCount	= 0;

	var loadingScene				= new enchant.Scene();
	loadingScene.backgroundColor	= "#FEEC62";

	var waitingLabel		= new enchant.Label();
	waitingLabel.text		= "ちょっとまってね";
	waitingLabel.textAlign	= "center";
	waitingLabel.color		= "black";
	waitingLabel.font		= "112px Paratino";
	waitingLabel.width		= 1024;
	waitingLabel.height		= 116;
	waitingLabel.x			= (APP_WIDTH - waitingLabel.width) / 2;
	waitingLabel.y			= 250;

	var waitingBackLabel		= new enchant.Label();
	waitingBackLabel.text		= "ちょっとまってね";
	waitingBackLabel.textAlign	= "center";
	waitingBackLabel.color		= "gray";
	waitingBackLabel.font		= "112px Paratino";
	waitingBackLabel.width		= 1024;
	waitingBackLabel.height		= 116;
	waitingBackLabel.x			= waitingLabel.x + 4;
	waitingBackLabel.y			= waitingLabel.y - 3;

	loadingScene.addChild(waitingBackLabel);
	loadingScene.addChild(waitingLabel);

	var createOnpu = function(color, x, y) {
		var onpu		= new enchant.Label();
		onpu.text		= "♪";
		onpu.textAlign	= "center";
		onpu.color		= color;
		onpu.font		= "96px Paratino";
		onpu.width		= 100;
		onpu.height		= 100;
		onpu.x			= x;
		onpu.y			= y;
		loadingScene.addChild(onpu);
	};

	createOnpu("#ED1A3D", 162, (waitingLabel.y + 150));
	createOnpu("#F15A22", 262, (waitingLabel.y + 150));
	createOnpu("#FFD400", 362, (waitingLabel.y + 150));
	createOnpu("#008000", 462, (waitingLabel.y + 150));
	createOnpu("#0067C0", 562, (waitingLabel.y + 150));
	createOnpu("#234794", 662, (waitingLabel.y + 150));
	createOnpu("#A757A8", 762, (waitingLabel.y + 150));

	var loadingLabel		= new enchant.Label();
	loadingLabel.text		= "じゅんびちゅう";
	loadingLabel.textAlign	= "center";
	loadingLabel.color		= "gray";
	loadingLabel.font		= "64px Paratino";
	loadingLabel.width		= 1024;
	loadingLabel.height		= 68;
	loadingLabel.x			= (APP_WIDTH - loadingLabel.width) / 2;
	loadingLabel.y			= waitingLabel.y + 270;
	loadingScene.addChild(loadingLabel);

	var progressLabel		= new enchant.Label();
	progressLabel.text		= progress + "%";
	progressLabel.textAlign	= "center";
	progressLabel.color		= "gray";
	progressLabel.font		= "64px Paratino";
	progressLabel.width		= 1024;
	progressLabel.height	= 68;
	progressLabel.x			= (APP_WIDTH - progressLabel.width) / 2;
	progressLabel.y			= waitingLabel.y + 340;
	loadingScene.addChild(progressLabel);

	loadingScene.addEventListener('enterframe', function(event) {
		if(progressCount % 15 === 0) {
			progress			+= 10;
			progressLabel.text	= progress + "%";
		}
	});

	loadingScene.addEventListener('progress', function(event) {
		loaded	= event.loaded;
		total	= event.total;
		console.log(event.loaded + " / " + event.total);
		progressCount++;
	});

	loadingScene.addEventListener('load', function(event) {
		var core = enchant.Core.instance;
		core.removeScene(core.loadingScene);
		core.dispatchEvent(event);
	});

	return loadingScene;
}