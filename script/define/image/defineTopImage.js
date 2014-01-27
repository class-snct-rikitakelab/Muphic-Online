// アプリケーション開始画面に必要な画像データ
var TOP_BACKGROUND;
var TOP_STARTBUTTON_OFF;
var TOP_STARTBUTTON_ON;

var defineTopImage = function() {
	// アプリケーション開始画面に必要な画像データ
	TOP_BACKGROUND = new NormalImage("../image/top/background/background.png", 1024, 768);
	TOP_STARTBUTTON_OFF = new NormalImage("../image/top/button/startButtonOff.png", 128, 128);
	TOP_STARTBUTTON_ON = new NormalImage("../image/top/button/startButtonOn.png", 128, 128);
}