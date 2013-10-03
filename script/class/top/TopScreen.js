var TopScreen = enchant.Class.create({
	initialize : function() {
		this._topMediator = null; // トップ画面全体の仲介を担当するオブジェクト
		this._parent = null; // このクラスの親にあたるオブジェクト
	},

	// トップ画面全体の仲介を担当するオブジェクトを生成する
	_createTopMediator : function() {
		this._topMediator = new TopMediator();
		this._topMediator._parent = this;
	},

	// トップ画面全体の背景を生成する
	_createBackground : function() {
		var path = TOP_BACKGROUND._path;
		var width = TOP_BACKGROUND._width;
		var height = TOP_BACKGROUND._height;
		
		drawSprite(0, 0, width, height, path, topScene);
	},

	// アプリケーション開始ボタンのオブジェクトを生成して画面に表示する
	_createStartButton : function() {
		var path = TOP_STARTBUTTON._path;
		var width = TOP_STARTBUTTON._width;
		var height = TOP_STARTBUTTON._height;

		this._topMediator._startButton = new StartButton(width, height);
		this._topMediator._startButton.image	= core.assets[path];
		this._topMediator._startButton.x = 630;
		this._topMediator._startButton.y = 280;
		this._topMediator._startButton._parent = this._topMediator;
		topScene.addChild(this._topMediator._startButton);
	},
})