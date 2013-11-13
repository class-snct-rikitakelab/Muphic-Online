// 作曲画面に必要な画像データ
var MUSIC_BACKGROUND;
var MUSIC_CHANGESTORYBUTTON_OFF;
var MUSIC_CHANGESTORYBUTTON_ON;
var MUSIC_HUMEN;
var MUSIC_SCALEHOUSE;
var MUSIC_MEASUREBOARD;
var MUSIC_PLAYBUTTON_OFF;
var MUSIC_PLAYBUTTON_ON;
var MUSIC_NEXTBUTTON_OFF;
var MUSIC_NEXTBUTTON_ON;
var MUSIC_PREVBUTTON_OFF;
var MUSIC_PREVBUTTON_ON;
var MUSIC_PIANOCAT_OFF;
var MUSIC_PIANOCAT_ON;
var MUSIC_PIANOCAT_PUSH;
var MUSIC_REMOVEANIMAL_OFF;
var MUSIC_REMOVEANIMAL_ON;
var MUSIC_REMOVEANIMAL_PUSH;
var MUSIC_REMOVEFOCUS_LIGHT;
var MUSIC_REMOVEFOCUS_DEEP;
var MUSIC_ANIMAL;

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

	MUSIC_ANIMAL = new Array();
	MUSIC_ANIMAL["cat"] = new NormalImage("../image/music/animal/cat.png", 60, 45);
}