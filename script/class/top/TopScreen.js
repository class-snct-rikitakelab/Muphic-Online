var TopScreen = enchant.Class.create({
	initialize : function() {
		this._topMediator		= null;	// トップ画面全体の仲介を担当するオブジェクト
		this._parent			= null;	// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// トップ画面全体の仲介を担当するオブジェクトを生成する
	// </summary>
	_createTopMediator : function() {
		this._topMediator			= new TopMediator();
		this._topMediator._parent	= this;
	},

	// <summary>
	// トップ画面全体の背景を生成する
	// </summary>
	_createBackground : function() {
		var background		= new enchant.Sprite(TOP_BACKGROUND_WIDTH, TOP_BACKGROUND_HEIGHT);
		background.image	= core.assets[TOP_BACKGROUND];
		background.x		= 0;
		background.y		= 0;
		topScene.addChild(background);
	},

	// <summary>
	// アプリケーション開始ボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createStartButton : function() {
		this._topMediator._startButton			= new StartButton(START_BUTTON_WIDTH, START_BUTTON_HEIGHT);
		this._topMediator._startButton.image	= core.assets[START_BUTTON];
		this._topMediator._startButton.x		= 630;
		this._topMediator._startButton.y		= 280;
		this._topMediator._startButton._parent	= this._topMediator;
		topScene.addChild(this._topMediator._startButton);
	},
})