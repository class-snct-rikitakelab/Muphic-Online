// 作曲画面に必要な画像データ
var MUSIC_BACKGROUND;
var MUSIC_CHANGESTORYBUTTON_OFF;
var MUSIC_CHANGESTORYBUTTON_ON;
var MUSIC_HUMEN;
var MUSIC_MEASUREBOARD;
var MUSIC_PLAYBUTTON_OFF;
var MUSIC_PLAYBUTTON_ON;
var MUSIC_NEXTBUTTON_OFF;
var MUSIC_NEXTBUTTON_ON;
var MUSIC_PREVBUTTON_OFF;
var MUSIC_PREVBUTTON_ON;
var MUSIC_PIANOBUTTON_OFF;
var MUSIC_PIANOBUTTON_ON;
var MUSIC_PIANOBUTTON_PUSH;
var MUSIC_REMOVEBUTTON_OFF;
var MUSIC_REMOVEBUTTON_ON;
var MUSIC_REMOVEBUTTON_PUSH;
var MUSIC_REMOVEFOCUS_LIGHT;
var MUSIC_REMOVEFOCUS_DEEP;
var MUSIC_INTRO_DIALOG;
var MUSIC_YESBUTTON_OFF;
var MUSIC_YESBUTTON_ON;

var MUSIC_ANIMAL;

// 暗転画像データ(明るさ -100)
var MUSIC_BACKGROUND_DARK;
var MUSIC_CHANGESTORYBUTTON_DARK;
var MUSIC_HUMEN_DARK;
var MUSIC_MEASUREBOARD_DARK;
var MUSIC_PLAYBUTTON_DARK;
var MUSIC_NEXTBUTTON_DARK;
var MUSIC_PREVBUTTON_DARK;
var MUSIC_PIANOBUTTON_DARK;
var MUSIC_REMOVEBUTTON_DARK;

var defineMusicImage = function() {
	// 作曲画面に必要な画像データ
	MUSIC_BACKGROUND = new NormalImage("../image/music/background/background.png", 1024, 768);
	MUSIC_CHANGESTORYBUTTON_OFF = new NormalImage("../image/music/button/changeStoryButtonOff.png", 100, 100);
	MUSIC_CHANGESTORYBUTTON_ON = new NormalImage("../image/music/button/changeStoryButtonOn.png", 100, 100);
	MUSIC_HUMEN = new NormalImage("../image/music/humen/newHumen.png", 900, 514);
	MUSIC_MEASUREBOARD = new NormalImage("../image/music/humen/measureBoard.png", 33, 434);
	MUSIC_PLAYBUTTON_OFF = new NormalImage("../image/music/button/playButtonOff.png", 110, 106);
	MUSIC_PLAYBUTTON_ON = new NormalImage("../image/music/button/playButtonOn.png", 110, 106);
	MUSIC_NEXTBUTTON_OFF = new NormalImage("../image/music/button/nextButtonOff.png", 36, 42);
	MUSIC_NEXTBUTTON_ON = new NormalImage("../image/music/button/nextButtonOn.png", 36, 42);
	MUSIC_PREVBUTTON_OFF = new NormalImage("../image/music/button/prevButtonOff.png", 36, 42);
	MUSIC_PREVBUTTON_ON = new NormalImage("../image/music/button/prevButtonOn.png", 36, 42);
	MUSIC_PIANOBUTTON_OFF = new NormalImage("../image/music/button/pianoButtonOff.png", 106, 72);
	MUSIC_PIANOBUTTON_ON = new NormalImage("../image/music/button/pianoButtonOn.png", 106, 72);
	MUSIC_PIANOBUTTON_PUSH = new NormalImage("../image/music/button/pianoButtonPush.png", 106, 72);
	MUSIC_REMOVEBUTTON_OFF = new NormalImage("../image/music/button/removeButtonOff.png", 106, 72);
	MUSIC_REMOVEBUTTON_ON = new NormalImage("../image/music/button/removeButtonOn.png", 106, 72);
	MUSIC_REMOVEBUTTON_PUSH = new NormalImage("../image/music/button/removeButtonPush.png", 106, 72);
	MUSIC_REMOVEFOCUS_LIGHT = new NormalImage("../image/music/remove/removeFocusLight.png", 60, 45);
	MUSIC_REMOVEFOCUS_DEEP = new NormalImage("../image/music/remove/removeFocusDeep.png", 60, 45);
	MUSIC_INTRO_DIALOG = new NormalImage("../image/music/dialog/introDialog.png", 640, 342);
	MUSIC_YESBUTTON_OFF = new NormalImage("../image/music/dialog/yesButtonOff.png", 100, 63);
	MUSIC_YESBUTTON_ON = new NormalImage("../image/music/dialog/yesButtonOn.png", 100, 63);

	// 暗転画像データ(明るさ -100)
	MUSIC_BACKGROUND_DARK = new NormalImage("../image/music/background/backgroundDark.png", 1024, 768);
	MUSIC_CHANGESTORYBUTTON_DARK = new NormalImage("../image/music/button/changeStoryButtonDark.png", 100, 100);
	MUSIC_HUMEN_DARK = new NormalImage("../image/music/humen/newHumenDark.png", 900, 514);
	MUSIC_MEASUREBOARD_DARK = new NormalImage("../image/music/humen/measureBoardDark.png", 33, 434);
	MUSIC_PLAYBUTTON_DARK = new NormalImage("../image/music/button/playButtonDark.png", 110, 106);
	MUSIC_NEXTBUTTON_DARK = new NormalImage("../image/music/button/nextButtonDark.png", 36, 42);
	MUSIC_PREVBUTTON_DARK = new NormalImage("../image/music/button/prevButtonDark.png", 36, 42);
	MUSIC_PIANOBUTTON_DARK = new NormalImage("../image/music/button/pianoButtonDark.png", 106, 72);
	MUSIC_REMOVEBUTTON_DARK = new NormalImage("../image/music/button/removeButtonDark.png", 106, 72);

	MUSIC_ANIMAL = new Array();
	MUSIC_ANIMAL["cat"] = new NormalImage("../image/music/animal/cat.png", 60, 45);
}