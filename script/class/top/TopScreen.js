var TopScreen = enchant.Class.create({
	initialize : function(parent) {
		this._startButton = null; // アプリケーション開始ボタンオブジェクト
		this._parent = parent; // このクラスの親にあたるオブジェクト
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
		var path = TOP_STARTBUTTON_OFF._path;
		var width = TOP_STARTBUTTON_OFF._width;
		var height = TOP_STARTBUTTON_OFF._height;
		var x = 630;
		var y = 280;
		this._startButton = new StartButton(path, width, height, x, y, this);
	},
})