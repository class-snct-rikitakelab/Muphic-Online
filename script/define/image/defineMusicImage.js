// 作曲画面に必要な画像データ
var MUSIC_CHANGESTORYBUTTON_OFF;
var MUSIC_CHANGESTORYBUTTON_ON;
var MUSIC_HUMEN;
var MUSIC_SCALEHOUSE;
var MUSIC_SIGNBOARD;
var MUSIC_PLAYBUTTON_OFF;
var MUSIC_PLAYBUTTON_ON;
var MUSIC_MEASURENEXTBUTTON;
var MUSIC_MEASUREPREVBUTTON;
var MUSIC_PIANOCAT_OFF;
var MUSIC_PIANOCAT_ON;
var MUSIC_PIANOCAT_PUSH;
var MUSIC_REMOVEANIMAL_OFF;
var MUSIC_REMOVEANIMAL_ON;
var MUSIC_REMOVEANIMAL_PUSH;
var MUSIC_REMOVECURSOR;
var MUSIC_REMOVEBOX;
var MUSIC_ANIMAL;

var defineMusicImage = function() {
	// 作曲画面に必要な画像データ
	MUSIC_CHANGESTORYBUTTON_OFF = new NormalImage("../image/music/button/changeStoryButtonOff.png", 100, 100);
	MUSIC_CHANGESTORYBUTTON_ON = new NormalImage("../image/music/button/changeStoryButtonOn.png", 100, 100);
	MUSIC_HUMEN = new NormalImage("../image/music/humen/humen.png", 792, 564);
	MUSIC_SCALEHOUSE = new NormalImage("../image/music/humen/house.png", 90, 613);
	MUSIC_SIGNBOARD = new NormalImage("../image/music/humen/signboard.png", 33, 434);
	MUSIC_PLAYBUTTON_OFF = new NormalImage("../image/music/button/playButtonOff.png", 110, 106);
	MUSIC_PLAYBUTTON_ON = new NormalImage("../image/music/button/playButtonOn.png", 110, 106);
	MUSIC_MEASURENEXTBUTTON = new NormalImage("../image/music/button/next.png", 35, 41);
	MUSIC_MEASUREPREVBUTTON = new NormalImage("../image/music/button/prev.png", 35, 41);
	MUSIC_PIANOCAT_OFF = new NormalImage("../image/music/button/pianoCatOff.png", 106, 72);
	MUSIC_PIANOCAT_ON = new NormalImage("../image/music/button/pianoCatOn.png", 106, 72);
	MUSIC_PIANOCAT_PUSH = new NormalImage("../image/music/button/pianoCatPush.png", 106, 72);
	MUSIC_REMOVEANIMAL_OFF = new NormalImage("../image/music/button/removeButtonOff.png", 106, 72);
	MUSIC_REMOVEANIMAL_ON = new NormalImage("../image/music/button/removeButtonOn.png", 106, 72);
	MUSIC_REMOVEANIMAL_PUSH = new NormalImage("../image/music/button/removeButtonPush.png", 106, 72);
	MUSIC_REMOVECURSOR = new NormalImage("../image/music/remove/removeCursor.png", 60, 45);
	MUSIC_REMOVEBOX = new NormalImage("../image/music/remove/removeBox.png", 60, 45);

	MUSIC_ANIMAL = new Array();
	MUSIC_ANIMAL["cat"] = new NormalImage("../image/music/animal/cat.png", 60, 45);
}