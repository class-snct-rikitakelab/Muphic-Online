// アプリケーションサイズ比率 4:3
var APP_WIDTH	= 1024;	// アプリケーションの横幅
var APP_HEIGHT	= 768;	// アプリケーションの縦幅

// アプリケーションの核を担当するグローバル変数
var core = null;
// トップ画面の描写に必要なグローバル変数
var topScene = null;
// 物語作成画面の描写に必要なグローバル変数
var storyScene = null;
// 作曲画面の描写に必要なグローバル変数
var musicScene = null;

// enchant.jsの初期化
enchant();

// 以下, 画面のロード終了時に実行される処理
window.onload = function() {
	// coreにCoreクラスのインスタンスを与える
	// 引数にはアプリケーションの横幅と縦幅を与える
	core = new enchant.Core(APP_WIDTH, APP_HEIGHT);

	// ロード画面の指定
	core.loadingScene = createLoadingScreen();

	// 数字の画像ファイルのプリロードを行う
	for(var i = 0; i < 10; i++) {
		core.preload(NUMBER_LABELS[i]); //10
	}

	// トップ画面に必要な画像ファイルのプリロードを行う
	core.preload(TOP_BACKGROUND, START_BUTTON);//12

	// 物語作成画面に必要な画像・音声ファイルのプリロードを行う
	core.preload(CHANGE_MUSIC_BUTTON);
	core.preload(PREVIEW_FRAME);//14
	core.preload(FOREST_1, FOREST_2, RIVER_1, RIVER_2, TOWN_1, TOWN_2, HOUSE_1, HOUSE_2);//22
	core.preload(SUN, CLOUD, MOON);//25
	core.preload(MAN_FRONT_GLAD, MAN_FRONT_ANGRY, MAN_FRONT_SAD, MAN_FRONT_ENJOY);//29
	core.preload(MAN_RIGHT_GLAD, MAN_RIGHT_ANGRY, MAN_RIGHT_SAD, MAN_RIGHT_ENJOY);//33
	core.preload(MAN_LEFT_GLAD, MAN_LEFT_ANGRY, MAN_LEFT_SAD, MAN_LEFT_ENJOY);//37
	core.preload(MAN_BACK);//38
	core.preload(LADY_FRONT_GLAD, LADY_FRONT_ANGRY, LADY_FRONT_SAD, LADY_FRONT_ENJOY);//42
	core.preload(LADY_RIGHT_GLAD, LADY_RIGHT_ANGRY, LADY_RIGHT_SAD, LADY_RIGHT_ENJOY);//46
	core.preload(LADY_LEFT_GLAD, LADY_LEFT_ANGRY, LADY_LEFT_SAD, LADY_LEFT_ENJOY);//50
	core.preload(LADY_BACK);//51
	core.preload(BOY_FRONT_GLAD, BOY_FRONT_ANGRY, BOY_FRONT_SAD, BOY_FRONT_ENJOY);//55
	core.preload(BOY_RIGHT_GLAD, BOY_RIGHT_ANGRY, BOY_RIGHT_SAD, BOY_RIGHT_ENJOY);//59
	core.preload(BOY_LEFT_GLAD, BOY_LEFT_ANGRY, BOY_LEFT_SAD, BOY_LEFT_ENJOY);//63
	core.preload(BOY_BACK);//64
	core.preload(GIRL_FRONT_GLAD, GIRL_FRONT_ANGRY, GIRL_FRONT_SAD, GIRL_FRONT_ENJOY);//68
	core.preload(GIRL_RIGHT_GLAD, GIRL_RIGHT_ANGRY, GIRL_RIGHT_SAD, GIRL_RIGHT_ENJOY);//72
	core.preload(GIRL_LEFT_GLAD, GIRL_LEFT_ANGRY, GIRL_LEFT_SAD, GIRL_LEFT_ENJOY);//76
	core.preload(GIRL_BACK);//77
	core.preload(DOG_FRONT_GLAD, DOG_FRONT_ANGRY, DOG_FRONT_SAD, DOG_FRONT_ENJOY);//81
	core.preload(DOG_RIGHT_GLAD, DOG_RIGHT_ANGRY, DOG_RIGHT_SAD, DOG_RIGHT_ENJOY);//85
	core.preload(DOG_LEFT_GLAD, DOG_LEFT_ANGRY, DOG_LEFT_SAD, DOG_LEFT_ENJOY);//89
	core.preload(DOG_BACK);//90
	core.preload(BIRD_FRONT_GLAD, BIRD_FRONT_ANGRY, BIRD_FRONT_SAD, BIRD_FRONT_ENJOY);//94
	core.preload(BIRD_RIGHT_GLAD, BIRD_RIGHT_ANGRY, BIRD_RIGHT_SAD, BIRD_RIGHT_ENJOY);//98
	core.preload(BIRD_LEFT_GLAD, BIRD_LEFT_ANGRY, BIRD_LEFT_SAD, BIRD_LEFT_ENJOY);//102
	core.preload(BIRD_BACK);//103
	core.preload(BEAR_FRONT_GLAD, BEAR_FRONT_ANGRY, BEAR_FRONT_SAD, BEAR_FRONT_ENJOY);//107
	core.preload(BEAR_RIGHT_GLAD, BEAR_RIGHT_ANGRY, BEAR_RIGHT_SAD, BEAR_RIGHT_ENJOY);//111
	core.preload(BEAR_LEFT_GLAD, BEAR_LEFT_ANGRY, BEAR_LEFT_SAD, BEAR_LEFT_ENJOY);//115
	core.preload(BEAR_BACK);//116
	core.preload(TURTLE_FRONT_GLAD, TURTLE_FRONT_ANGRY, TURTLE_FRONT_SAD, TURTLE_FRONT_ENJOY);//120
	core.preload(TURTLE_RIGHT_GLAD, TURTLE_RIGHT_ANGRY, TURTLE_RIGHT_SAD, TURTLE_RIGHT_ENJOY);//124
	core.preload(TURTLE_LEFT_GLAD, TURTLE_LEFT_ANGRY, TURTLE_LEFT_SAD, TURTLE_LEFT_ENJOY);//128
	core.preload(TURTLE_BACK); //129

	// 作曲画面に必要な画像・音声ファイルのプリロードを行う
	core.preload(HUMEN, SCALE_HOUSE, SIGNBOARD);//132
	core.preload(CHANGE_STORY_BUTTON, PLAY_BUTTON, MEASURE_NEXT_BUTTON, MEASURE_PREV_BUTTON, ANIMAL_BUTTON_OFF, ANIMAL_BUTTON_ON, MODOSU_BUTTON_OFF, MODOSU_BUTTON_ON, REMOVE_CURSOR, REMOVE_BOX);//140
	core.preload(PIANO_CAT);//141
	core.preload(PIANO_C4, PIANO_D4, PIANO_E4, PIANO_F4, PIANO_G4, PIANO_A4, PIANO_B4, PIANO_C5);//149

	// 以下, リソースのプリロード終了時に実行される処理
	core.onload = function() {
		// topSceneの生成などを行う
		createTopScreen();
		// storySceneの生成などを行う
		createStoryScreen();
		// musicSceneの生成などを行う
		createMusicScreen();
		// 作曲画面に遷移
		core.replaceScene(topScene);
	};

	// アプリケーションの開始
	core.start();
};