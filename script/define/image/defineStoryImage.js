// 物語作成画面に必要な画像データ
var STORY_BACKGROUND;
var STORY_CHANGEMUSICBUTTON;
var STORY_PREVIEWFRAME;
var STORY_HUMAN_ILLUSTBUTTON_OFF;
var STORY_ANIMAL_ILLUSTBUTTON_OFF;
var STORY_ITEM_ILLUSTBUTTON_OFF;
var STORY_BACKGROUND_ILLUSTBUTTON_OFF;
var STORY_REMOVEBUTTON_OFF;
var STORY_REMOVEBUTTON_ON;
// 物語作成画面に必要な画像データ（明るさ-100)
var STORY_BACKGROUND_DARK;
var STORY_CHANGEMUSICBUTTON_DARK;
var STORY_HUMAN_ILLUSTBUTTON_OFF_DARK;
var STORY_ANIMAL_ILLUSTBUTTON_OFF_DARK;
var STORY_ITEM_ILLUSTBUTTON_OFF_DARK;
var STORY_BACKGROUND_ILLUSTBUTTON_OFF_DARK;
var STORY_REMOVEBUTTON_OFF_DARK;
var STORY_REMOVEBUTTON_ON_DARK;
// 物語に使用可能なオブジェクト画像データ
// じんぶつイラスト
// 男性
var STORY_PREVIEWOBJECT_MAN_FRONT_GLAD;
var STORY_PREVIEWOBJECT_MAN_FRONT_ANGRY;
var STORY_PREVIEWOBJECT_MAN_FRONT_SAD;
var STORY_PREVIEWOBJECT_MAN_FRONT_ENJOY;
var STORY_PREVIEWOBJECT_MAN_RIGHT_GLAD;
var STORY_PREVIEWOBJECT_MAN_RIGHT_ANGRY;
var STORY_PREVIEWOBJECT_MAN_RIGHT_SAD;
var STORY_PREVIEWOBJECT_MAN_RIGHT_ENJOY;
var STORY_PREVIEWOBJECT_MAN_LEFT_GLAD;
var STORY_PREVIEWOBJECT_MAN_LEFT_ANGRY;
var STORY_PREVIEWOBJECT_MAN_LEFT_SAD;
var STORY_PREVIEWOBJECT_MAN_LEFT_ENJOY;
var STORY_PREVIEWOBJECT_MAN_BACK;
var STORY_PREVIEWOBJECT_MAN_FRONT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_MAN_BACK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_MAN_RIGHT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_MAN_LEFT_REMOVEFOCUS;
// 女性
var STORY_PREVIEWOBJECT_LADY_FRONT_GLAD;
var STORY_PREVIEWOBJECT_LADY_FRONT_ANGRY;
var STORY_PREVIEWOBJECT_LADY_FRONT_SAD;
var STORY_PREVIEWOBJECT_LADY_FRONT_ENJOY;
var STORY_PREVIEWOBJECT_LADY_RIGHT_GLAD;
var STORY_PREVIEWOBJECT_LADY_RIGHT_ANGRY;
var STORY_PREVIEWOBJECT_LADY_RIGHT_SAD;
var STORY_PREVIEWOBJECT_LADY_RIGHT_ENJOY;
var STORY_PREVIEWOBJECT_LADY_LEFT_GLAD;
var STORY_PREVIEWOBJECT_LADY_LEFT_ANGRY;
var STORY_PREVIEWOBJECT_LADY_LEFT_SAD;
var STORY_PREVIEWOBJECT_LADY_LEFT_ENJOY;
var STORY_PREVIEWOBJECT_LADY_BACK;
var STORY_PREVIEWOBJECT_LADY_FRONT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_LADY_BACK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_LADY_RIGHT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_LADY_LEFT_REMOVEFOCUS;
// 男の子
var STORY_PREVIEWOBJECT_BOY_FRONT_GLAD;
var STORY_PREVIEWOBJECT_BOY_FRONT_ANGRY;
var STORY_PREVIEWOBJECT_BOY_FRONT_SAD;
var STORY_PREVIEWOBJECT_BOY_FRONT_ENJOY;
var STORY_PREVIEWOBJECT_BOY_RIGHT_GLAD;
var STORY_PREVIEWOBJECT_BOY_RIGHT_ANGRY;
var STORY_PREVIEWOBJECT_BOY_RIGHT_SAD;
var STORY_PREVIEWOBJECT_BOY_RIGHT_ENJOY;
var STORY_PREVIEWOBJECT_BOY_LEFT_GLAD;
var STORY_PREVIEWOBJECT_BOY_LEFT_ANGRY;
var STORY_PREVIEWOBJECT_BOY_LEFT_SAD;
var STORY_PREVIEWOBJECT_BOY_LEFT_ENJOY;
var STORY_PREVIEWOBJECT_BOY_BACK;
var STORY_PREVIEWOBJECT_BOY_FRONT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BOY_BACK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BOY_RIGHT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BOY_LEFT_REMOVEFOCUS;
// 女の子
var STORY_PREVIEWOBJECT_GIRL_FRONT_GLAD;
var STORY_PREVIEWOBJECT_GIRL_FRONT_ANGRY;
var STORY_PREVIEWOBJECT_GIRL_FRONT_SAD;
var STORY_PREVIEWOBJECT_GIRL_FRONT_ENJOY;
var STORY_PREVIEWOBJECT_GIRL_RIGHT_GLAD;
var STORY_PREVIEWOBJECT_GIRL_RIGHT_ANGRY;
var STORY_PREVIEWOBJECT_GIRL_RIGHT_SAD;
var STORY_PREVIEWOBJECT_GIRL_RIGHT_ENJOY;
var STORY_PREVIEWOBJECT_GIRL_LEFT_GLAD;
var STORY_PREVIEWOBJECT_GIRL_LEFT_ANGRY;
var STORY_PREVIEWOBJECT_GIRL_LEFT_SAD;
var STORY_PREVIEWOBJECT_GIRL_LEFT_ENJOY;
var STORY_PREVIEWOBJECT_GIRL_BACK;
var STORY_PREVIEWOBJECT_GIRL_FRONT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_GIRL_BACK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_GIRL_RIGHT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_GIRL_LEFT_REMOVEFOCUS;
// どうぶつイラスト
// イヌ
var STORY_PREVIEWOBJECT_DOG_FRONT_GLAD;
var STORY_PREVIEWOBJECT_DOG_FRONT_ANGRY;
var STORY_PREVIEWOBJECT_DOG_FRONT_SAD;
var STORY_PREVIEWOBJECT_DOG_FRONT_ENJOY;
var STORY_PREVIEWOBJECT_DOG_RIGHT_GLAD;
var STORY_PREVIEWOBJECT_DOG_RIGHT_ANGRY;
var STORY_PREVIEWOBJECT_DOG_RIGHT_SAD;
var STORY_PREVIEWOBJECT_DOG_RIGHT_ENJOY;
var STORY_PREVIEWOBJECT_DOG_LEFT_GLAD;
var STORY_PREVIEWOBJECT_DOG_LEFT_ANGRY;
var STORY_PREVIEWOBJECT_DOG_LEFT_SAD;
var STORY_PREVIEWOBJECT_DOG_LEFT_ENJOY;
var STORY_PREVIEWOBJECT_DOG_BACK;
var STORY_PREVIEWOBJECT_DOG_FRONT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_DOG_BACK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_DOG_RIGHT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_DOG_LEFT_REMOVEFOCUS;
// トリ
var STORY_PREVIEWOBJECT_BIRD_FRONT_GLAD;
var STORY_PREVIEWOBJECT_BIRD_FRONT_ANGRY;
var STORY_PREVIEWOBJECT_BIRD_FRONT_SAD;
var STORY_PREVIEWOBJECT_BIRD_FRONT_ENJOY;
var STORY_PREVIEWOBJECT_BIRD_RIGHT_GLAD;
var STORY_PREVIEWOBJECT_BIRD_RIGHT_ANGRY;
var STORY_PREVIEWOBJECT_BIRD_RIGHT_SAD;
var STORY_PREVIEWOBJECT_BIRD_RIGHT_ENJOY;
var STORY_PREVIEWOBJECT_BIRD_LEFT_GLAD;
var STORY_PREVIEWOBJECT_BIRD_LEFT_ANGRY;
var STORY_PREVIEWOBJECT_BIRD_LEFT_SAD;
var STORY_PREVIEWOBJECT_BIRD_LEFT_ENJOY;
var STORY_PREVIEWOBJECT_BIRD_BACK;
var STORY_PREVIEWOBJECT_BIRD_FRONT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BIRD_BACK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BIRD_RIGHT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BIRD_LEFT_REMOVEFOCUS;
// クマ
var STORY_PREVIEWOBJECT_BEAR_FRONT_GLAD;
var STORY_PREVIEWOBJECT_BEAR_FRONT_ANGRY;
var STORY_PREVIEWOBJECT_BEAR_FRONT_SAD;
var STORY_PREVIEWOBJECT_BEAR_FRONT_ENJOY;
var STORY_PREVIEWOBJECT_BEAR_RIGHT_GLAD;
var STORY_PREVIEWOBJECT_BEAR_RIGHT_ANGRY;
var STORY_PREVIEWOBJECT_BEAR_RIGHT_SAD;
var STORY_PREVIEWOBJECT_BEAR_RIGHT_ENJOY;
var STORY_PREVIEWOBJECT_BEAR_LEFT_GLAD;
var STORY_PREVIEWOBJECT_BEAR_LEFT_ANGRY;
var STORY_PREVIEWOBJECT_BEAR_LEFT_SAD;
var STORY_PREVIEWOBJECT_BEAR_LEFT_ENJOY;
var STORY_PREVIEWOBJECT_BEAR_BACK;
var STORY_PREVIEWOBJECT_BEAR_FRONT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BEAR_BACK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BEAR_RIGHT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BEAR_LEFT_REMOVEFOCUS;
// カメ
var STORY_PREVIEWOBJECT_TURTLE_FRONT_GLAD;
var STORY_PREVIEWOBJECT_TURTLE_FRONT_ANGRY;
var STORY_PREVIEWOBJECT_TURTLE_FRONT_SAD;
var STORY_PREVIEWOBJECT_TURTLE_FRONT_ENJOY;
var STORY_PREVIEWOBJECT_TURTLE_RIGHT_GLAD;
var STORY_PREVIEWOBJECT_TURTLE_RIGHT_ANGRY;
var STORY_PREVIEWOBJECT_TURTLE_RIGHT_SAD;
var STORY_PREVIEWOBJECT_TURTLE_RIGHT_ENJOY;
var STORY_PREVIEWOBJECT_TURTLE_LEFT_GLAD;
var STORY_PREVIEWOBJECT_TURTLE_LEFT_ANGRY;
var STORY_PREVIEWOBJECT_TURTLE_LEFT_SAD;
var STORY_PREVIEWOBJECT_TURTLE_LEFT_ENJOY;
var STORY_PREVIEWOBJECT_TURTLE_BACK;
var STORY_PREVIEWOBJECT_TURTLE_FRONT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_TURTLE_BACK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_TURTLE_RIGHT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_TURTLE_LEFT_REMOVEFOCUS;
// アイテムサムネイル
// たべもの
var STORY_PREVIEWTHUMBNAIL_APPLE;
var STORY_PREVIEWTHUMBNAIL_DOGFOOD;
var STORY_PREVIEWTHUMBNAIL_COFFEE;
var STORY_PREVIEWTHUMBNAIL_FISH;
var STORY_PREVIEWTHUMBNAIL_NUT;
var STORY_PREVIEWTHUMBNAIL_ONIGIRI;
var STORY_PREVIEWTHUMBNAIL_PATTY;
var STORY_PREVIEWTHUMBNAIL_PUDDING;
// ファッション
var STORY_PREVIEWTHUMBNAIL_BAGBLACK;
var STORY_PREVIEWTHUMBNAIL_BAGRED;
var STORY_PREVIEWTHUMBNAIL_CAPBLUE;
var STORY_PREVIEWTHUMBNAIL_CAPGREEN;
var STORY_PREVIEWTHUMBNAIL_CAPPINK;
var STORY_PREVIEWTHUMBNAIL_CAPSUMMER;
var STORY_PREVIEWTHUMBNAIL_CAPYELLOW;
var STORY_PREVIEWTHUMBNAIL_RIBBON;
// インテリア
var STORY_PREVIEWTHUMBNAIL_BOOKSHELF;
var STORY_PREVIEWTHUMBNAIL_CHAIRLEFT;
var STORY_PREVIEWTHUMBNAIL_CHAIRRIGHT;
var STORY_PREVIEWTHUMBNAIL_TABLE;
var STORY_PREVIEWTHUMBNAIL_CHEST;
var STORY_PREVIEWTHUMBNAIL_CLOCK;
var STORY_PREVIEWTHUMBNAIL_DRESSER;
var STORY_PREVIEWTHUMBNAIL_TELEVISION;
// グッズ
var STORY_PREVIEWTHUMBNAIL_BEETLE;
var STORY_PREVIEWTHUMBNAIL_RABBITDOLL;
var STORY_PREVIEWTHUMBNAIL_BUTTERFLYNET;
var STORY_PREVIEWTHUMBNAIL_INSECTCAGE;
var STORY_PREVIEWTHUMBNAIL_TRUMPET;
var STORY_PREVIEWTHUMBNAIL_CELLPHONE;
var STORY_PREVIEWTHUMBNAIL_SOCCERBALL;
var STORY_PREVIEWTHUMBNAIL_CAR;
// アイテムイラスト
// たべもの
var STORY_PREVIEWOBJECT_APPLE;
var STORY_PREVIEWOBJECT_DOGFOOD;
var STORY_PREVIEWOBJECT_COFFEE;
var STORY_PREVIEWOBJECT_FISH;
var STORY_PREVIEWOBJECT_NUT;
var STORY_PREVIEWOBJECT_ONIGIRI;
var STORY_PREVIEWOBJECT_PATTY;
var STORY_PREVIEWOBJECT_PUDDING;
var STORY_PREVIEWOBJECT_APPLE_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_DOGFOOD_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_COFFEE_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_FISH_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_NUT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_ONIGIRI_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_PATTY_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_PUDDING_REMOVEFOCUS;
// ファッション
var STORY_PREVIEWOBJECT_BAGBLACK;
var STORY_PREVIEWOBJECT_BAGPINK;
var STORY_PREVIEWOBJECT_CAPBLUE;
var STORY_PREVIEWOBJECT_CAPGREEN;
var STORY_PREVIEWOBJECT_CAPPINK;
var STORY_PREVIEWOBJECT_CAPSUMMER;
var STORY_PREVIEWOBJECT_CAPYELLOW;
var STORY_PREVIEWOBJECT_RIBBON;
var STORY_PREVIEWOBJECT_BAGBLACK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BAGPINK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CAPBLUE_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CAPGREEN_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CAPPINK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CAPSUMMER_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CAPYELLOW_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_RIBBON_REMOVEFOCUS;
// インテリア
var STORY_PREVIEWOBJECT_BOOKSHELF;
var STORY_PREVIEWOBJECT_CHAIRLEFT;
var STORY_PREVIEWOBJECT_CHAIRRIGHT;
var STORY_PREVIEWOBJECT_TABLE;
var STORY_PREVIEWOBJECT_CHEST;
var STORY_PREVIEWOBJECT_CLOCK;
var STORY_PREVIEWOBJECT_DRESSER;
var STORY_PREVIEWOBJECT_TELEVISION;
var STORY_PREVIEWOBJECT_BOOKSHELF_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CHAIRLEFT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CHAIRRIGHT_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_TABLE_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CHEST_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CLOCK_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_DRESSER_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_TELEVISION_REMOVEFOCUS;
// グッズ
var STORY_PREVIEWOBJECT_BEETLE;
var STORY_PREVIEWOBJECT_RABBITDOLL;
var STORY_PREVIEWOBJECT_BUTTERFLYNET;
var STORY_PREVIEWOBJECT_INSECTCAGE;
var STORY_PREVIEWOBJECT_TRUMPET;
var STORY_PREVIEWOBJECT_CELLPHONE;
var STORY_PREVIEWOBJECT_SOCCERBALL;
var STORY_PREVIEWOBJECT_CAR;
var STORY_PREVIEWOBJECT_BEETLE_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_RABBITDOLL_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_BUTTERFLYNET_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_INSECTCAGE_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_TRUMPET_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CELLPHONE_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_SOCCERBALL_REMOVEFOCUS;
var STORY_PREVIEWOBJECT_CAR_REMOVEFOCUS;
// 背景サムネイル
// 晴れ
var STORY_PREVIEWTHUMBNAIL_SUNNY_FOREST_1;
var STORY_PREVIEWTHUMBNAIL_SUNNY_FOREST_2;
var STORY_PREVIEWTHUMBNAIL_SUNNY_RIVER_1;
var STORY_PREVIEWTHUMBNAIL_SUNNY_RIVER_2;
var STORY_PREVIEWTHUMBNAIL_SUNNY_TOWN_1;
var STORY_PREVIEWTHUMBNAIL_SUNNY_TOWN_2;
var STORY_PREVIEWTHUMBNAIL_SUNNY_HOUSE_1;
var STORY_PREVIEWTHUMBNAIL_SUNNY_HOUSE_2;
// 曇り
var STORY_PREVIEWTHUMBNAIL_CLOUD_FOREST_1;
var STORY_PREVIEWTHUMBNAIL_CLOUD_FOREST_2;
var STORY_PREVIEWTHUMBNAIL_CLOUD_RIVER_1;
var STORY_PREVIEWTHUMBNAIL_CLOUD_RIVER_2;
var STORY_PREVIEWTHUMBNAIL_CLOUD_TOWN_1;
var STORY_PREVIEWTHUMBNAIL_CLOUD_TOWN_2;
var STORY_PREVIEWTHUMBNAIL_CLOUD_HOUSE_1;
var STORY_PREVIEWTHUMBNAIL_CLOUD_HOUSE_2;
// 夜
var STORY_PREVIEWTHUMBNAIL_NIGHT_FOREST_1;
var STORY_PREVIEWTHUMBNAIL_NIGHT_FOREST_2;
var STORY_PREVIEWTHUMBNAIL_NIGHT_RIVER_1;
var STORY_PREVIEWTHUMBNAIL_NIGHT_RIVER_2;
var STORY_PREVIEWTHUMBNAIL_NIGHT_TOWN_1;
var STORY_PREVIEWTHUMBNAIL_NIGHT_TOWN_2;
var STORY_PREVIEWTHUMBNAIL_NIGHT_HOUSE_1;
var STORY_PREVIEWTHUMBNAIL_NIGHT_HOUSE_2;
// 背景イラスト
// 物語の背景画像データ
var STORY_PREVIEWBACKGROUND_EMPTY;
var STORY_PREVIEWBACKGROUND_FOREST_1;
var STORY_PREVIEWBACKGROUND_FOREST_2;
var STORY_PREVIEWBACKGROUND_RIVER_1;
var STORY_PREVIEWBACKGROUND_RIVER_2;
var STORY_PREVIEWBACKGROUND_TOWN_1;
var STORY_PREVIEWBACKGROUND_TOWN_2;
var STORY_PREVIEWBACKGROUND_HOUSE_1;
var STORY_PREVIEWBACKGROUND_HOUSE_2;
// 物語の天気画像データ
var STORY_PREVIEWWEATHER_EMPTY;
var STORY_PREVIEWWEATHER_SUNNY;
var STORY_PREVIEWWEATHER_CLOUD;
var STORY_PREVIEWWEATHER_NIGHT;
// パレットの画像
// パレット本体
var STORY_PALETTE_1;
var STORY_PALETTE_2;
var STORY_PALETTE_3;
// とじるボタン
var STORY_PALETTECLOSEBUTTON;
// じんぶつ属性ボタン
var STORY_PALETTEPROPERTY_MAN_OFF;
var STORY_PALETTEPROPERTY_MAN_ON;
var STORY_PALETTEPROPERTY_LADY_OFF;
var STORY_PALETTEPROPERTY_LADY_ON;
var STORY_PALETTEPROPERTY_BOY_OFF;
var STORY_PALETTEPROPERTY_BOY_ON;
var STORY_PALETTEPROPERTY_GIRL_OFF;
var STORY_PALETTEPROPERTY_GIRL_ON;
// どうぶつ属性ボタン
var STORY_PALETTEPROPERTY_DOG_OFF;
var STORY_PALETTEPROPERTY_DOG_ON;
var STORY_PALETTEPROPERTY_BIRD_OFF;
var STORY_PALETTEPROPERTY_BIRD_ON;
var STORY_PALETTEPROPERTY_BEAR_OFF;
var STORY_PALETTEPROPERTY_BEAR_ON;
var STORY_PALETTEPROPERTY_TURTLE_OFF;
var STORY_PALETTEPROPERTY_TURTLE_ON;
// 背景属性ボタン
var STORY_PALETTEPROPERTY_SUNNY_OFF;
var STORY_PALETTEPROPERTY_SUNNY_ON;
var STORY_PALETTEPROPERTY_CLOUD_OFF;
var STORY_PALETTEPROPERTY_CLOUD_ON;
var STORY_PALETTEPROPERTY_NIGHT_OFF;
var STORY_PALETTEPROPERTY_NIGHT_ON;

var defineStoryImage = function() {
	// 物語作成画面に必要な画像データ
	STORY_BACKGROUND = new NormalImage("../image/story/appBackground.png", 1024, 768);
	STORY_CHANGEMUSICBUTTON = new NormalImage("../image/story/button/changeMusic.png", 100, 100);
	STORY_PREVIEWFRAME = new NormalImage("../image/story/preview/previewFrame.png", 690, 460);
	STORY_HUMAN_ILLUSTBUTTON_OFF = new NormalImage("../image/story/illustrations/humanButtonOff.png", 106, 73);
	STORY_ANIMAL_ILLUSTBUTTON_OFF = new NormalImage("../image/story/illustrations/animalButtonOff.png", 106, 73);
	STORY_ITEM_ILLUSTBUTTON_OFF = new NormalImage("../image/story/illustrations/itemButtonOff.png", 106, 73);
	STORY_BACKGROUND_ILLUSTBUTTON_OFF = new NormalImage("../image/story/illustrations/backgroundButtonOff.png", 106, 73);
	STORY_REMOVEBUTTON_OFF = new NormalImage("../image/story/preview/removeButtonOff.png", 106, 73);
	STORY_REMOVEBUTTON_ON = new NormalImage("../image/story/preview/removeButtonOn.png", 106, 73);
	// 物語作成画面に必要な画像データ(明るさ-100)
	STORY_BACKGROUND_DARK = new NormalImage("../image/story/appBackgroundDark.png", 1024, 768);
	STORY_CHANGEMUSICBUTTON_DARK = new NormalImage("../image/story/button/changeMusicDark.png", 100, 100);
	STORY_HUMAN_ILLUSTBUTTON_OFF_DARK = new NormalImage("../image/story/illustrations/humanButtonOffDark.png", 106, 73);
	STORY_HUMAN_ILLUSTBUTTON_ON_DARK = new NormalImage("../image/story/illustrations/humanButtonOnDark.png", 106, 73);
	STORY_ANIMAL_ILLUSTBUTTON_OFF_DARK = new NormalImage("../image/story/illustrations/animalButtonOffDark.png", 106, 73);
	STORY_ANIMAL_ILLUSTBUTTON_ON_DARK = new NormalImage("../image/story/illustrations/animalButtonOnDark.png", 106, 73);
	STORY_ITEM_ILLUSTBUTTON_OFF_DARK = new NormalImage("../image/story/illustrations/itemButtonOffDark.png", 106, 73);
	STORY_ITEM_ILLUSTBUTTON_ON_DARK = new NormalImage("../image/story/illustrations/itemButtonOnDark.png", 106, 73);
	STORY_BACKGROUND_ILLUSTBUTTON_OFF_DARK = new NormalImage("../image/story/illustrations/backgroundButtonOffDark.png", 106, 73);
	STORY_REMOVEBUTTON_OFF_DARK = new NormalImage("../image/story/preview/removeButtonOffDark.png", 106, 73);
	STORY_REMOVEBUTTON_ON_DARK = new NormalImage("../image/story/preview/removeButtonOnDark.png", 106, 73);
	// 物語に使用可能なオブジェクト画像データ
	// じんぶつイラスト
	// 男性
	STORY_PREVIEWOBJECT_MAN_FRONT_GLAD = new StoryPreviewImage("../image/story/human/man/front/glad.png", 48, 137, "human");
	STORY_PREVIEWOBJECT_MAN_FRONT_ANGRY = new StoryPreviewImage("../image/story/human/man/front/angry.png", 48, 137, "human");
	STORY_PREVIEWOBJECT_MAN_FRONT_SAD = new StoryPreviewImage("../image/story/human/man/front/sad.png", 48, 137, "human");
	STORY_PREVIEWOBJECT_MAN_FRONT_ENJOY = new StoryPreviewImage("../image/story/human/man/front/enjoy.png", 48, 137, "human");
	STORY_PREVIEWOBJECT_MAN_RIGHT_GLAD = new StoryPreviewImage("../image/story/human/man/right/glad.png", 38, 135, "human");
	STORY_PREVIEWOBJECT_MAN_RIGHT_ANGRY = new StoryPreviewImage("../image/story/human/man/right/angry.png", 38, 135, "human");
	STORY_PREVIEWOBJECT_MAN_RIGHT_SAD = new StoryPreviewImage("../image/story/human/man/right/sad.png", 38, 135, "human");
	STORY_PREVIEWOBJECT_MAN_RIGHT_ENJOY = new StoryPreviewImage("../image/story/human/man/right/enjoy.png", 38, 135, "human");
	STORY_PREVIEWOBJECT_MAN_LEFT_GLAD = new StoryPreviewImage("../image/story/human/man/left/glad.png", 36, 135, "human");
	STORY_PREVIEWOBJECT_MAN_LEFT_ANGRY = new StoryPreviewImage("../image/story/human/man/left/angry.png", 36, 135, "human");
	STORY_PREVIEWOBJECT_MAN_LEFT_SAD = new StoryPreviewImage("../image/story/human/man/left/sad.png", 36, 135, "human");
	STORY_PREVIEWOBJECT_MAN_LEFT_ENJOY = new StoryPreviewImage("../image/story/human/man/left/enjoy.png", 36, 135, "human");
	STORY_PREVIEWOBJECT_MAN_BACK = new StoryPreviewImage("../image/story/human/man/back/back.png", 46, 136, "human");
	STORY_PREVIEWOBJECT_MAN_FRONT_REMOVEFOCUS = new NormalImage("../image/story/human/man/front/manFrontRemoveFocus.png", 48, 137);
	STORY_PREVIEWOBJECT_MAN_BACK_REMOVEFOCUS = new NormalImage("../image/story/human/man/back/manBackRemoveFocus.png", 46, 136);
	STORY_PREVIEWOBJECT_MAN_RIGHT_REMOVEFOCUS = new NormalImage("../image/story/human/man/right/manRightRemoveFocus.png", 38, 135);
	STORY_PREVIEWOBJECT_MAN_LEFT_REMOVEFOCUS = new NormalImage("../image/story/human/man/left/manLeftRemoveFocus.png", 36, 135);
	// 女性
	STORY_PREVIEWOBJECT_LADY_FRONT_GLAD = new StoryPreviewImage("../image/story/human/lady/front/glad.png", 48, 125, "human");
	STORY_PREVIEWOBJECT_LADY_FRONT_ANGRY = new StoryPreviewImage("../image/story/human/lady/front/angry.png", 48, 125, "human");
	STORY_PREVIEWOBJECT_LADY_FRONT_SAD = new StoryPreviewImage("../image/story/human/lady/front/sad.png", 48, 125, "human");
	STORY_PREVIEWOBJECT_LADY_FRONT_ENJOY = new StoryPreviewImage("../image/story/human/lady/front/enjoy.png", 48, 125, "human");
	STORY_PREVIEWOBJECT_LADY_RIGHT_GLAD = new StoryPreviewImage("../image/story/human/lady/right/glad.png", 34, 127, "human");
	STORY_PREVIEWOBJECT_LADY_RIGHT_ANGRY = new StoryPreviewImage("../image/story/human/lady/right/angry.png", 34, 127, "human");
	STORY_PREVIEWOBJECT_LADY_RIGHT_SAD = new StoryPreviewImage("../image/story/human/lady/right/sad.png", 34, 127, "human");
	STORY_PREVIEWOBJECT_LADY_RIGHT_ENJOY = new StoryPreviewImage("../image/story/human/lady/right/enjoy.png", 34, 127, "human");
	STORY_PREVIEWOBJECT_LADY_LEFT_GLAD = new StoryPreviewImage("../image/story/human/lady/left/glad.png", 34, 127, "human");
	STORY_PREVIEWOBJECT_LADY_LEFT_ANGRY = new StoryPreviewImage("../image/story/human/lady/left/angry.png", 34, 127, "human");
	STORY_PREVIEWOBJECT_LADY_LEFT_SAD = new StoryPreviewImage("../image/story/human/lady/left/sad.png", 34, 127, "human");
	STORY_PREVIEWOBJECT_LADY_LEFT_ENJOY = new StoryPreviewImage("../image/story/human/lady/left/enjoy.png", 34, 127, "human");
	STORY_PREVIEWOBJECT_LADY_BACK = new StoryPreviewImage("../image/story/human/lady/back/back.png", 45, 124, "human");
	STORY_PREVIEWOBJECT_LADY_FRONT_REMOVEFOCUS = new NormalImage("../image/story/human/lady/front/ladyFrontRemoveFocus.png", 48, 125);
	STORY_PREVIEWOBJECT_LADY_BACK_REMOVEFOCUS = new NormalImage("../image/story/human/lady/back/ladyBackRemoveFocus.png", 45, 124);
	STORY_PREVIEWOBJECT_LADY_RIGHT_REMOVEFOCUS = new NormalImage("../image/story/human/lady/right/ladyRightRemoveFocus.png", 34, 127);
	STORY_PREVIEWOBJECT_LADY_LEFT_REMOVEFOCUS = new NormalImage("../image/story/human/lady/left/ladyLeftRemoveFocus.png", 34, 127);
	// 男の子
	STORY_PREVIEWOBJECT_BOY_FRONT_GLAD = new StoryPreviewImage("../image/story/human/boy/front/glad.png", 47, 109, "human");
	STORY_PREVIEWOBJECT_BOY_FRONT_ANGRY = new StoryPreviewImage("../image/story/human/boy/front/angry.png", 47, 109, "human");
	STORY_PREVIEWOBJECT_BOY_FRONT_SAD = new StoryPreviewImage("../image/story/human/boy/front/sad.png", 47, 109, "human");
	STORY_PREVIEWOBJECT_BOY_FRONT_ENJOY = new StoryPreviewImage("../image/story/human/boy/front/enjoy.png", 47, 109, "human");
	STORY_PREVIEWOBJECT_BOY_RIGHT_GLAD = new StoryPreviewImage("../image/story/human/boy/right/glad.png", 32, 109, "human");
	STORY_PREVIEWOBJECT_BOY_RIGHT_ANGRY = new StoryPreviewImage("../image/story/human/boy/right/angry.png", 32, 109, "human");
	STORY_PREVIEWOBJECT_BOY_RIGHT_SAD = new StoryPreviewImage("../image/story/human/boy/right/sad.png", 32, 109, "human");
	STORY_PREVIEWOBJECT_BOY_RIGHT_ENJOY = new StoryPreviewImage("../image/story/human/boy/right/enjoy.png", 32, 109, "human");
	STORY_PREVIEWOBJECT_BOY_LEFT_GLAD = new StoryPreviewImage("../image/story/human/boy/left/glad.png", 32, 109, "human");
	STORY_PREVIEWOBJECT_BOY_LEFT_ANGRY = new StoryPreviewImage("../image/story/human/boy/left/angry.png", 32, 109, "human");
	STORY_PREVIEWOBJECT_BOY_LEFT_SAD = new StoryPreviewImage("../image/story/human/boy/left/sad.png", 32, 109, "human");
	STORY_PREVIEWOBJECT_BOY_LEFT_ENJOY = new StoryPreviewImage("../image/story/human/boy/left/enjoy.png", 32, 109, "human");
	STORY_PREVIEWOBJECT_BOY_BACK = new StoryPreviewImage("../image/story/human/boy/back/back.png", 45, 109, "human");
	STORY_PREVIEWOBJECT_BOY_FRONT_REMOVEFOCUS = new NormalImage("../image/story/human/boy/front/boyFrontRemoveFocus.png", 47, 109);
	STORY_PREVIEWOBJECT_BOY_BACK_REMOVEFOCUS = new NormalImage("../image/story/human/boy/back/boyBackRemoveFocus.png", 45, 109);
	STORY_PREVIEWOBJECT_BOY_RIGHT_REMOVEFOCUS = new NormalImage("../image/story/human/boy/right/boyRightRemoveFocus.png", 32, 109);
	STORY_PREVIEWOBJECT_BOY_LEFT_REMOVEFOCUS = new NormalImage("../image/story/human/boy/left/boyLeftRemoveFocus.png", 32, 109);
	// 女の子
	STORY_PREVIEWOBJECT_GIRL_FRONT_GLAD = new StoryPreviewImage("../image/story/human/girl/front/glad.png", 50, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_FRONT_ANGRY = new StoryPreviewImage("../image/story/human/girl/front/angry.png", 50, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_FRONT_SAD = new StoryPreviewImage("../image/story/human/girl/front/sad.png", 50, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_FRONT_ENJOY = new StoryPreviewImage("../image/story/human/girl/front/enjoy.png", 50, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_RIGHT_GLAD = new StoryPreviewImage("../image/story/human/girl/right/glad.png", 44, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_RIGHT_ANGRY = new StoryPreviewImage("../image/story/human/girl/right/angry.png", 44, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_RIGHT_SAD = new StoryPreviewImage("../image/story/human/girl/right/sad.png", 44, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_RIGHT_ENJOY = new StoryPreviewImage("../image/story/human/girl/right/enjoy.png", 44, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_LEFT_GLAD = new StoryPreviewImage("../image/story/human/girl/left/glad.png", 43, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_LEFT_ANGRY = new StoryPreviewImage("../image/story/human/girl/left/angry.png", 43, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_LEFT_SAD = new StoryPreviewImage("../image/story/human/girl/left/sad.png", 43, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_LEFT_ENJOY = new StoryPreviewImage("../image/story/human/girl/left/enjoy.png", 43, 107, "human");
	STORY_PREVIEWOBJECT_GIRL_BACK = new StoryPreviewImage("../image/story/human/girl/back/back.png", 51, 106, "human");
	STORY_PREVIEWOBJECT_GIRL_FRONT_REMOVEFOCUS = new NormalImage("../image/story/human/girl/front/girlFrontRemoveFocus.png", 50, 107);
	STORY_PREVIEWOBJECT_GIRL_BACK_REMOVEFOCUS = new NormalImage("../image/story/human/girl/back/girlBackRemoveFocus.png", 51, 106);
	STORY_PREVIEWOBJECT_GIRL_RIGHT_REMOVEFOCUS = new NormalImage("../image/story/human/girl/right/girlRightRemoveFocus.png", 44, 107);
	STORY_PREVIEWOBJECT_GIRL_LEFT_REMOVEFOCUS = new NormalImage("../image/story/human/girl/left/girlLeftRemoveFocus.png", 43, 107);
	// どうぶつイラスト
	// イヌ
	STORY_PREVIEWOBJECT_DOG_FRONT_GLAD = new StoryPreviewImage("../image/story/animal/dog/front/glad.png", 48, 73, "animal");
	STORY_PREVIEWOBJECT_DOG_FRONT_ANGRY = new StoryPreviewImage("../image/story/animal/dog/front/angry.png", 48, 73, "animal");
	STORY_PREVIEWOBJECT_DOG_FRONT_SAD = new StoryPreviewImage("../image/story/animal/dog/front/sad.png", 48, 73, "animal");
	STORY_PREVIEWOBJECT_DOG_FRONT_ENJOY = new StoryPreviewImage("../image/story/animal/dog/front/enjoy.png", 48, 73, "animal");
	STORY_PREVIEWOBJECT_DOG_RIGHT_GLAD = new StoryPreviewImage("../image/story/animal/dog/right/glad.png", 78, 75, "animal");
	STORY_PREVIEWOBJECT_DOG_RIGHT_ANGRY = new StoryPreviewImage("../image/story/animal/dog/right/angry.png", 78, 75, "animal");
	STORY_PREVIEWOBJECT_DOG_RIGHT_SAD = new StoryPreviewImage("../image/story/animal/dog/right/sad.png", 78, 75, "animal");
	STORY_PREVIEWOBJECT_DOG_RIGHT_ENJOY = new StoryPreviewImage("../image/story/animal/dog/right/enjoy.png", 78, 75, "animal");
	STORY_PREVIEWOBJECT_DOG_LEFT_GLAD = new StoryPreviewImage("../image/story/animal/dog/left/glad.png", 79, 75, "animal");
	STORY_PREVIEWOBJECT_DOG_LEFT_ANGRY = new StoryPreviewImage("../image/story/animal/dog/left/angry.png", 79, 75, "animal");
	STORY_PREVIEWOBJECT_DOG_LEFT_SAD = new StoryPreviewImage("../image/story/animal/dog/left/sad.png", 79, 75, "animal");
	STORY_PREVIEWOBJECT_DOG_LEFT_ENJOY = new StoryPreviewImage("../image/story/animal/dog/left/enjoy.png", 79, 75, "animal");
	STORY_PREVIEWOBJECT_DOG_BACK = new StoryPreviewImage("../image/story/animal/dog/back/back.png", 49, 76, "animal");
	STORY_PREVIEWOBJECT_DOG_FRONT_REMOVEFOCUS = new NormalImage("../image/story/animal/dog/front/dogFrontRemoveFocus.png", 46, 73);
	STORY_PREVIEWOBJECT_DOG_BACK_REMOVEFOCUS = new NormalImage("../image/story/animal/dog/back/dogBackRemoveFocus.png", 49, 76);
	STORY_PREVIEWOBJECT_DOG_RIGHT_REMOVEFOCUS = new NormalImage("../image/story/animal/dog/right/dogRightRemoveFocus.png", 78, 75);
	STORY_PREVIEWOBJECT_DOG_LEFT_REMOVEFOCUS = new NormalImage("../image/story/animal/dog/left/dogLeftRemoveFocus.png", 80, 75);
	// トリ
	STORY_PREVIEWOBJECT_BIRD_FRONT_GLAD = new StoryPreviewImage("../image/story/animal/bird/front/glad.png", 43, 48, "animal");
	STORY_PREVIEWOBJECT_BIRD_FRONT_ANGRY = new StoryPreviewImage("../image/story/animal/bird/front/angry.png", 43, 48, "animal");
	STORY_PREVIEWOBJECT_BIRD_FRONT_SAD = new StoryPreviewImage("../image/story/animal/bird/front/sad.png", 43, 48, "animal");
	STORY_PREVIEWOBJECT_BIRD_FRONT_ENJOY = new StoryPreviewImage("../image/story/animal/bird/front/enjoy.png", 43, 48, "animal");
	STORY_PREVIEWOBJECT_BIRD_RIGHT_GLAD = new StoryPreviewImage("../image/story/animal/bird/right/glad.png", 30, 44, "animal");
	STORY_PREVIEWOBJECT_BIRD_RIGHT_ANGRY = new StoryPreviewImage("../image/story/animal/bird/right/angry.png", 30, 44, "animal");
	STORY_PREVIEWOBJECT_BIRD_RIGHT_SAD = new StoryPreviewImage("../image/story/animal/bird/right/sad.png", 30, 44, "animal");
	STORY_PREVIEWOBJECT_BIRD_RIGHT_ENJOY = new StoryPreviewImage("../image/story/animal/bird/right/enjoy.png", 30, 44, "animal");
	STORY_PREVIEWOBJECT_BIRD_LEFT_GLAD = new StoryPreviewImage("../image/story/animal/bird/left/glad.png", 32, 44, "animal");
	STORY_PREVIEWOBJECT_BIRD_LEFT_ANGRY = new StoryPreviewImage("../image/story/animal/bird/left/angry.png", 32, 44, "animal");
	STORY_PREVIEWOBJECT_BIRD_LEFT_SAD = new StoryPreviewImage("../image/story/animal/bird/left/sad.png", 32, 44, "animal");
	STORY_PREVIEWOBJECT_BIRD_LEFT_ENJOY = new StoryPreviewImage("../image/story/animal/bird/left/enjoy.png", 32, 44, "animal");
	STORY_PREVIEWOBJECT_BIRD_BACK = new StoryPreviewImage("../image/story/animal/bird/back/back.png", 44, 46, "animal");
	STORY_PREVIEWOBJECT_BIRD_FRONT_REMOVEFOCUS = new NormalImage("../image/story/animal/bird/front/birdFrontRemoveFocus.png", 43, 48);
	STORY_PREVIEWOBJECT_BIRD_BACK_REMOVEFOCUS = new NormalImage("../image/story/animal/bird/back/birdBackRemoveFocus.png", 44, 46);
	STORY_PREVIEWOBJECT_BIRD_RIGHT_REMOVEFOCUS = new NormalImage("../image/story/animal/bird/right/birdRightRemoveFocus.png", 30, 44);
	STORY_PREVIEWOBJECT_BIRD_LEFT_REMOVEFOCUS = new NormalImage("../image/story/animal/bird/left/birdLeftRemoveFocus.png", 32, 44);
	// クマ
	STORY_PREVIEWOBJECT_BEAR_FRONT_GLAD = new StoryPreviewImage("../image/story/animal/bear/front/glad.png", 52, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_FRONT_ANGRY = new StoryPreviewImage("../image/story/animal/bear/front/angry.png", 52, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_FRONT_SAD = new StoryPreviewImage("../image/story/animal/bear/front/sad.png", 52, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_FRONT_ENJOY = new StoryPreviewImage("../image/story/animal/bear/front/enjoy.png", 52, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_RIGHT_GLAD = new StoryPreviewImage("../image/story/animal/bear/right/glad.png", 39, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_RIGHT_ANGRY = new StoryPreviewImage("../image/story/animal/bear/right/angry.png", 39, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_RIGHT_SAD = new StoryPreviewImage("../image/story/animal/bear/right/sad.png", 39, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_RIGHT_ENJOY = new StoryPreviewImage("../image/story/animal/bear/right/enjoy.png", 39, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_LEFT_GLAD = new StoryPreviewImage("../image/story/animal/bear/left/glad.png", 39, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_LEFT_ANGRY = new StoryPreviewImage("../image/story/animal/bear/left/angry.png", 39, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_LEFT_SAD = new StoryPreviewImage("../image/story/animal/bear/left/sad.png", 39, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_LEFT_ENJOY = new StoryPreviewImage("../image/story/animal/bear/left/enjoy.png", 39, 107, "animal");
	STORY_PREVIEWOBJECT_BEAR_BACK = new StoryPreviewImage("../image/story/animal/bear/back/back.png", 49, 106, "animal");
	STORY_PREVIEWOBJECT_BEAR_FRONT_REMOVEFOCUS = new NormalImage("../image/story/animal/bear/front/bearFrontRemoveFocus.png", 52, 107);
	STORY_PREVIEWOBJECT_BEAR_BACK_REMOVEFOCUS = new NormalImage("../image/story/animal/bear/back/bearBackRemoveFocus.png", 49, 106);
	STORY_PREVIEWOBJECT_BEAR_RIGHT_REMOVEFOCUS = new NormalImage("../image/story/animal/bear/right/bearRightRemoveFocus.png", 39, 107);
	STORY_PREVIEWOBJECT_BEAR_LEFT_REMOVEFOCUS = new NormalImage("../image/story/animal/bear/left/bearLeftRemoveFocus.png", 39, 107);
	// カメ
	STORY_PREVIEWOBJECT_TURTLE_FRONT_GLAD = new StoryPreviewImage("../image/story/animal/turtle/front/glad.png", 56, 49, "animal");
	STORY_PREVIEWOBJECT_TURTLE_FRONT_ANGRY = new StoryPreviewImage("../image/story/animal/turtle/front/angry.png", 56, 49, "animal");
	STORY_PREVIEWOBJECT_TURTLE_FRONT_SAD = new StoryPreviewImage("../image/story/animal/turtle/front/sad.png", 56, 49, "animal");
	STORY_PREVIEWOBJECT_TURTLE_FRONT_ENJOY = new StoryPreviewImage("../image/story/animal/turtle/front/enjoy.png", 56, 49, "animal");
	STORY_PREVIEWOBJECT_TURTLE_RIGHT_GLAD = new StoryPreviewImage("../image/story/animal/turtle/right/glad.png", 74, 41, "animal");
	STORY_PREVIEWOBJECT_TURTLE_RIGHT_ANGRY = new StoryPreviewImage("../image/story/animal/turtle/right/angry.png", 74, 41, "animal");
	STORY_PREVIEWOBJECT_TURTLE_RIGHT_SAD = new StoryPreviewImage("../image/story/animal/turtle/right/sad.png", 74, 41, "animal");
	STORY_PREVIEWOBJECT_TURTLE_RIGHT_ENJOY = new StoryPreviewImage("../image/story/animal/turtle/right/enjoy.png", 74, 41, "animal");
	STORY_PREVIEWOBJECT_TURTLE_LEFT_GLAD = new StoryPreviewImage("../image/story/animal/turtle/left/glad.png", 75, 41, "animal");
	STORY_PREVIEWOBJECT_TURTLE_LEFT_ANGRY = new StoryPreviewImage("../image/story/animal/turtle/left/angry.png", 75, 41, "animal");
	STORY_PREVIEWOBJECT_TURTLE_LEFT_SAD = new StoryPreviewImage("../image/story/animal/turtle/left/sad.png", 75, 41, "animal");
	STORY_PREVIEWOBJECT_TURTLE_LEFT_ENJOY = new StoryPreviewImage("../image/story/animal/turtle/left/enjoy.png", 75, 41, "animal");
	STORY_PREVIEWOBJECT_TURTLE_BACK = new StoryPreviewImage("../image/story/animal/turtle/back/back.png", 53, 48, "animal");
	STORY_PREVIEWOBJECT_TURTLE_FRONT_REMOVEFOCUS = new NormalImage("../image/story/animal/turtle/front/turtleFrontRemoveFocus.png", 56, 49);
	STORY_PREVIEWOBJECT_TURTLE_BACK_REMOVEFOCUS = new NormalImage("../image/story/animal/turtle/back/turtleBackRemoveFocus.png", 53, 48);
	STORY_PREVIEWOBJECT_TURTLE_RIGHT_REMOVEFOCUS = new NormalImage("../image/story/animal/turtle/right/turtleRightRemoveFocus.png", 74, 41);
	STORY_PREVIEWOBJECT_TURTLE_LEFT_REMOVEFOCUS = new NormalImage("../image/story/animal/turtle/left/turtleLeftRemoveFocus.png", 75, 41);
	// アイテムサムネイル
	// たべもの
	STORY_PREVIEWTHUMBNAIL_APPLE = new StoryPreviewImage("../image/story/item/itemThumbnail/food/apple.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_DOGFOOD = new StoryPreviewImage("../image/story/item/itemThumbnail/food/dogFood.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_COFFEE = new StoryPreviewImage("../image/story/item/itemThumbnail/food/coffee.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_FISH = new StoryPreviewImage("../image/story/item/itemThumbnail/food/fish.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_NUT = new StoryPreviewImage("../image/story/item/itemThumbnail/food/nut.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_ONIGIRI = new StoryPreviewImage("../image/story/item/itemThumbnail/food/onigiri.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_PATTY = new StoryPreviewImage("../image/story/item/itemThumbnail/food/patty.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_PUDDING = new StoryPreviewImage("../image/story/item/itemThumbnail/food/pudding.png", 100, 100, "item");
	// ファッション
	STORY_PREVIEWTHUMBNAIL_BAGBLACK = new StoryPreviewImage("../image/story/item/itemThumbnail/fashion/bagBlack.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_BAGRED = new StoryPreviewImage("../image/story/item/itemThumbnail/fashion/bagRed.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CAPBLUE = new StoryPreviewImage("../image/story/item/itemThumbnail/fashion/capBlue.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CAPGREEN = new StoryPreviewImage("../image/story/item/itemThumbnail/fashion/capGreen.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CAPPINK = new StoryPreviewImage("../image/story/item/itemThumbnail/fashion/capPink.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CAPSUMMER = new StoryPreviewImage("../image/story/item/itemThumbnail/fashion/capSummer.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CAPYELLOW = new StoryPreviewImage("../image/story/item/itemThumbnail/fashion/capYellow.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_RIBBON = new StoryPreviewImage("../image/story/item/itemThumbnail/fashion/ribbon.png", 100, 100, "item");
	// インテリア
	STORY_PREVIEWTHUMBNAIL_BOOKSHELF = new StoryPreviewImage("../image/story/item/itemThumbnail/interior/bookShelf.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CHAIRLEFT = new StoryPreviewImage("../image/story/item/itemThumbnail/interior/chairLeft.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CHAIRRIGHT = new StoryPreviewImage("../image/story/item/itemThumbnail/interior/chairRight.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_TABLE = new StoryPreviewImage("../image/story/item/itemThumbnail/interior/table.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CHEST = new StoryPreviewImage("../image/story/item/itemThumbnail/interior/chest.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CLOCK = new StoryPreviewImage("../image/story/item/itemThumbnail/interior/clock.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_DRESSER = new StoryPreviewImage("../image/story/item/itemThumbnail/interior/dresser.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_TELEVISION = new StoryPreviewImage("../image/story/item/itemThumbnail/interior/television.png", 100, 100, "item");
	// グッズ
	STORY_PREVIEWTHUMBNAIL_BEETLE = new StoryPreviewImage("../image/story/item/itemThumbnail/goods/beetle.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_RABBITDOLL = new StoryPreviewImage("../image/story/item/itemThumbnail/goods/rabbitDoll.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_BUTTERFLYNET = new StoryPreviewImage("../image/story/item/itemThumbnail/goods/butterflyNet.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_INSECTCAGE = new StoryPreviewImage("../image/story/item/itemThumbnail/goods/insectCage.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_TRUMPET = new StoryPreviewImage("../image/story/item/itemThumbnail/goods/trumpet.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CELLPHONE = new StoryPreviewImage("../image/story/item/itemThumbnail/goods/cellPhone.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_SOCCERBALL = new StoryPreviewImage("../image/story/item/itemThumbnail/goods/soccerBall.png", 100, 100, "item");
	STORY_PREVIEWTHUMBNAIL_CAR = new StoryPreviewImage("../image/story/item/itemThumbnail/goods/car.png", 100, 100, "item");
	// アイテムイラスト
	// たべもの
	STORY_PREVIEWOBJECT_APPLE = new StoryPreviewImage("../image/story/item/item/food/apple.png", 30, 35, "item");
	STORY_PREVIEWOBJECT_DOGFOOD = new StoryPreviewImage("../image/story/item/item/food/dogFood.png", 43, 26, "item");
	STORY_PREVIEWOBJECT_COFFEE = new StoryPreviewImage("../image/story/item/item/food/coffee.png", 37, 32, "item");
	STORY_PREVIEWOBJECT_FISH = new StoryPreviewImage("../image/story/item/item/food/fish.png", 42, 22, "item");
	STORY_PREVIEWOBJECT_NUT = new StoryPreviewImage("../image/story/item/item/food/nut.png", 27, 38, "item");
	STORY_PREVIEWOBJECT_ONIGIRI = new StoryPreviewImage("../image/story/item/item/food/onigiri.png", 33, 27, "item");
	STORY_PREVIEWOBJECT_PATTY = new StoryPreviewImage("../image/story/item/item/food/patty.png", 48, 35, "item");
	STORY_PREVIEWOBJECT_PUDDING = new StoryPreviewImage("../image/story/item/item/food/pudding.png", 45, 37, "item");
	STORY_PREVIEWOBJECT_APPLE_REMOVEFOCUS = new NormalImage("../image/story/item/item/food/appleRemoveFocus.png", 30, 35);
	STORY_PREVIEWOBJECT_DOGFOOD_REMOVEFOCUS = new NormalImage("../image/story/item/item/food/dogFoodRemoveFocus.png", 43, 26);
	STORY_PREVIEWOBJECT_COFFEE_REMOVEFOCUS = new NormalImage("../image/story/item/item/food/coffeeRemoveFocus.png", 37, 32);
	STORY_PREVIEWOBJECT_FISH_REMOVEFOCUS = new NormalImage("../image/story/item/item/food/fishRemoveFocus.png", 42, 22);
	STORY_PREVIEWOBJECT_NUT_REMOVEFOCUS = new NormalImage("../image/story/item/item/food/nutRemoveFocus.png", 27, 38);
	STORY_PREVIEWOBJECT_ONIGIRI_REMOVEFOCUS = new NormalImage("../image/story/item/item/food/onigiriRemoveFocus.png", 33, 27);
	STORY_PREVIEWOBJECT_PATTY_REMOVEFOCUS = new NormalImage("../image/story/item/item/food/pattyRemoveFocus.png", 48, 35);
	STORY_PREVIEWOBJECT_PUDDING_REMOVEFOCUS = new NormalImage("../image/story/item/item/food/puddingRemoveFocus.png", 45, 37);
	// ファッション
	STORY_PREVIEWOBJECT_BAGBLACK = new StoryPreviewImage("../image/story/item/item/fashion/bagBlack.png", 31, 34, "item");
	STORY_PREVIEWOBJECT_BAGRED = new StoryPreviewImage("../image/story/item/item/fashion/bagRed.png", 28, 30, "item");
	STORY_PREVIEWOBJECT_CAPBLUE = new StoryPreviewImage("../image/story/item/item/fashion/capBlue.png", 39, 22, "item");
	STORY_PREVIEWOBJECT_CAPGREEN = new StoryPreviewImage("../image/story/item/item/fashion/capGreen.png", 38, 23, "item");
	STORY_PREVIEWOBJECT_CAPPINK = new StoryPreviewImage("../image/story/item/item/fashion/capPink.png", 39, 24, "item");
	STORY_PREVIEWOBJECT_CAPSUMMER = new StoryPreviewImage("../image/story/item/item/fashion/capSummer.png", 45, 23, "item");
	STORY_PREVIEWOBJECT_CAPYELLOW = new StoryPreviewImage("../image/story/item/item/fashion/capYellow.png", 42, 23, "item");
	STORY_PREVIEWOBJECT_RIBBON = new StoryPreviewImage("../image/story/item/item/fashion/ribbon.png", 27, 23, "item");
	STORY_PREVIEWOBJECT_BAGBLACK_REMOVEFOCUS = new NormalImage("../image/story/item/item/fashion/bagBlackRemoveFocus.png", 31, 34);
	STORY_PREVIEWOBJECT_BAGRED_REMOVEFOCUS = new NormalImage("../image/story/item/item/fashion/bagRedRemoveFocus.png", 28, 30);
	STORY_PREVIEWOBJECT_CAPBLUE_REMOVEFOCUS = new NormalImage("../image/story/item/item/fashion/capBlueRemoveFocus.png", 39, 22);
	STORY_PREVIEWOBJECT_CAPGREEN_REMOVEFOCUS = new NormalImage("../image/story/item/item/fashion/capGreenRemoveFocus.png", 38, 23);
	STORY_PREVIEWOBJECT_CAPPINK_REMOVEFOCUS = new NormalImage("../image/story/item/item/fashion/capPinkRemoveFocus.png", 39, 24);
	STORY_PREVIEWOBJECT_CAPSUMMER_REMOVEFOCUS = new NormalImage("../image/story/item/item/fashion/capSummerRemoveFocus.png", 45, 23);
	STORY_PREVIEWOBJECT_CAPYELLOW_REMOVEFOCUS = new NormalImage("../image/story/item/item/fashion/capYellowRemoveFocus.png", 42, 23);
	STORY_PREVIEWOBJECT_RIBBON_REMOVEFOCUS = new NormalImage("../image/story/item/item/fashion/ribbonRemoveFocus.png", 27, 23);
	// インテリア
	STORY_PREVIEWOBJECT_BOOKSHELF = new StoryPreviewImage("../image/story/item/item/interior/bookShelf.png", 56, 103, "item");
	STORY_PREVIEWOBJECT_CHAIRLEFT = new StoryPreviewImage("../image/story/item/item/interior/chairLeft.png", 48, 77, "item");
	STORY_PREVIEWOBJECT_CHAIRRIGHT = new StoryPreviewImage("../image/story/item/item/interior/chairRight.png", 47, 75, "item");
	STORY_PREVIEWOBJECT_TABLE = new StoryPreviewImage("../image/story/item/item/interior/table.png", 146, 73, "item");
	STORY_PREVIEWOBJECT_CHEST = new StoryPreviewImage("../image/story/item/item/interior/chest.png", 60, 115, "item");
	STORY_PREVIEWOBJECT_CLOCK = new StoryPreviewImage("../image/story/item/item/interior/clock.png", 45, 42, "item");
	STORY_PREVIEWOBJECT_DRESSER = new StoryPreviewImage("../image/story/item/item/interior/dresser.png", 42, 99, "item");
	STORY_PREVIEWOBJECT_TELEVISION = new StoryPreviewImage("../image/story/item/item/interior/television.png", 56, 71, "item");
	STORY_PREVIEWOBJECT_BOOKSHELF_REMOVEFOCUS = new NormalImage("../image/story/item/item/interior/bookShelfRemoveFocus.png", 56, 103);
	STORY_PREVIEWOBJECT_CHAIRLEFT_REMOVEFOCUS = new NormalImage("../image/story/item/item/interior/chairLeftRemoveFocus.png", 48, 77);
	STORY_PREVIEWOBJECT_CHAIRRIGHT_REMOVEFOCUS = new NormalImage("../image/story/item/item/interior/chairRightRemoveFocus.png", 47, 75);
	STORY_PREVIEWOBJECT_TABLE_REMOVEFOCUS = new NormalImage("../image/story/item/item/interior/tableRemoveFocus.png", 146, 73);
	STORY_PREVIEWOBJECT_CHEST_REMOVEFOCUS = new NormalImage("../image/story/item/item/interior/chestRemoveFocus.png", 60, 115);
	STORY_PREVIEWOBJECT_CLOCK_REMOVEFOCUS = new NormalImage("../image/story/item/item/interior/clockRemoveFocus.png", 45, 42);
	STORY_PREVIEWOBJECT_DRESSER_REMOVEFOCUS = new NormalImage("../image/story/item/item/interior/dresserRemoveFocus.png", 42, 99);
	STORY_PREVIEWOBJECT_TELEVISION_REMOVEFOCUS = new NormalImage("../image/story/item/item/interior/televisionRemoveFocus.png", 56, 71);
	// グッズ
	STORY_PREVIEWOBJECT_BEETLE = new StoryPreviewImage("../image/story/item/item/goods/beetle.png", 15, 27, "item");
	STORY_PREVIEWOBJECT_RABBITDOLL = new StoryPreviewImage("../image/story/item/item/goods/rabbitDoll.png", 38, 41, "item");
	STORY_PREVIEWOBJECT_BUTTERFLYNET = new StoryPreviewImage("../image/story/item/item/goods/butterflyNet.png", 58, 54, "item");
	STORY_PREVIEWOBJECT_INSECTCAGE = new StoryPreviewImage("../image/story/item/item/goods/insectCage.png", 28, 28, "item");
	STORY_PREVIEWOBJECT_TRUMPET = new StoryPreviewImage("../image/story/item/item/goods/trumpet.png", 39, 27, "item");
	STORY_PREVIEWOBJECT_CELLPHONE = new StoryPreviewImage("../image/story/item/item/goods/cellPhone.png", 22, 36, "item");
	STORY_PREVIEWOBJECT_SOCCERBALL = new StoryPreviewImage("../image/story/item/item/goods/soccerBall.png", 30, 31, "item");
	STORY_PREVIEWOBJECT_CAR = new StoryPreviewImage("../image/story/item/item/goods/car.png", 153, 113, "item");
	STORY_PREVIEWOBJECT_BEETLE_REMOVEFOCUS = new NormalImage("../image/story/item/item/goods/beetleRemoveFocus.png", 15, 27);
	STORY_PREVIEWOBJECT_RABBITDOLL_REMOVEFOCUS = new NormalImage("../image/story/item/item/goods/rabbitDollRemoveFocus.png", 38, 41);
	STORY_PREVIEWOBJECT_BUTTERFLYNET_REMOVEFOCUS = new NormalImage("../image/story/item/item/goods/butterflyNetRemoveFocus.png", 58, 54);
	STORY_PREVIEWOBJECT_INSECTCAGE_REMOVEFOCUS = new NormalImage("../image/story/item/item/goods/insectCageRemoveFocus.png", 28, 28);
	STORY_PREVIEWOBJECT_TRUMPET_REMOVEFOCUS = new NormalImage("../image/story/item/item/goods/trumpetRemoveFocus.png", 39, 27);
	STORY_PREVIEWOBJECT_CELLPHONE_REMOVEFOCUS = new NormalImage("../image/story/item/item/goods/cellPhoneRemoveFocus.png", 22, 36);
	STORY_PREVIEWOBJECT_SOCCERBALL_REMOVEFOCUS = new NormalImage("../image/story/item/item/goods/soccerBallRemoveFocus.png", 30, 31);
	STORY_PREVIEWOBJECT_CAR_REMOVEFOCUS = new NormalImage("../image/story/item/item/goods/carRemoveFocus.png", 153, 113);
	// 背景サムネイル
	// 晴れ
	STORY_PREVIEWTHUMBNAIL_SUNNY_FOREST_1 = new NormalImage("../image/story/background/backgroundThumbnail/sunny/forest1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_SUNNY_FOREST_2 = new NormalImage("../image/story/background/backgroundThumbnail/sunny/forest2.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_SUNNY_RIVER_1 = new NormalImage("../image/story/background/backgroundThumbnail/sunny/river1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_SUNNY_RIVER_2 = new NormalImage("../image/story/background/backgroundThumbnail/sunny/river2.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_SUNNY_TOWN_1 = new NormalImage("../image/story/background/backgroundThumbnail/sunny/town1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_SUNNY_TOWN_2 = new NormalImage("../image/story/background/backgroundThumbnail/sunny/town2.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_SUNNY_HOUSE_1 = new NormalImage("../image/story/background/backgroundThumbnail/sunny/house1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_SUNNY_HOUSE_2 = new NormalImage("../image/story/background/backgroundThumbnail/sunny/house2.png", 200, 133);
	// 曇り
	STORY_PREVIEWTHUMBNAIL_CLOUD_FOREST_1 = new NormalImage("../image/story/background/backgroundThumbnail/cloud/forest1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_CLOUD_FOREST_2 = new NormalImage("../image/story/background/backgroundThumbnail/cloud/forest2.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_CLOUD_RIVER_1 = new NormalImage("../image/story/background/backgroundThumbnail/cloud/river1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_CLOUD_RIVER_2 = new NormalImage("../image/story/background/backgroundThumbnail/cloud/river2.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_CLOUD_TOWN_1 = new NormalImage("../image/story/background/backgroundThumbnail/cloud/town1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_CLOUD_TOWN_2 = new NormalImage("../image/story/background/backgroundThumbnail/cloud/town2.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_CLOUD_HOUSE_1 = new NormalImage("../image/story/background/backgroundThumbnail/cloud/house1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_CLOUD_HOUSE_2 = new NormalImage("../image/story/background/backgroundThumbnail/cloud/house2.png", 200, 133);
	// 夜
	STORY_PREVIEWTHUMBNAIL_NIGHT_FOREST_1 = new NormalImage("../image/story/background/backgroundThumbnail/night/forest1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_NIGHT_FOREST_2 = new NormalImage("../image/story/background/backgroundThumbnail/night/forest2.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_NIGHT_RIVER_1 = new NormalImage("../image/story/background/backgroundThumbnail/night/river1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_NIGHT_RIVER_2 = new NormalImage("../image/story/background/backgroundThumbnail/night/river2.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_NIGHT_TOWN_1 = new NormalImage("../image/story/background/backgroundThumbnail/night/town1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_NIGHT_TOWN_2 = new NormalImage("../image/story/background/backgroundThumbnail/night/town2.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_NIGHT_HOUSE_1 = new NormalImage("../image/story/background/backgroundThumbnail/night/house1.png", 200, 133);
	STORY_PREVIEWTHUMBNAIL_NIGHT_HOUSE_2 = new NormalImage("../image/story/background/backgroundThumbnail/night/house2.png", 200, 133);
	// 背景イラスト
	// 物語の背景画像データ
	STORY_PREVIEWBACKGROUND_EMPTY = new NormalImage("../image/story/background/empty.png", 690, 460);
	STORY_PREVIEWBACKGROUND_FOREST_1 = new NormalImage("../image/story/background/forest1.png", 690, 460);
	STORY_PREVIEWBACKGROUND_FOREST_2 = new NormalImage("../image/story/background/forest2.png", 690, 460);
	STORY_PREVIEWBACKGROUND_RIVER_1 = new NormalImage("../image/story/background/river1.png", 690, 460);
	STORY_PREVIEWBACKGROUND_RIVER_2 = new NormalImage("../image/story/background/river2.png", 690, 460);
	STORY_PREVIEWBACKGROUND_TOWN_1 = new NormalImage("../image/story/background/town1.png", 690, 460);
	STORY_PREVIEWBACKGROUND_TOWN_2 = new NormalImage("../image/story/background/town2.png", 690, 460);
	STORY_PREVIEWBACKGROUND_HOUSE_1 = new NormalImage("../image/story/background/house1.png", 690, 460);
	STORY_PREVIEWBACKGROUND_HOUSE_2 = new NormalImage("../image/story/background/house2.png", 690, 460);
	// 物語の天気画像データ
	STORY_PREVIEWWEATHER_EMPTY = new NormalImage("../image/story/weather/empty.png", 690, 158);
	STORY_PREVIEWWEATHER_SUNNY = new NormalImage("../image/story/weather/sunny.png", 690, 158);
	STORY_PREVIEWWEATHER_CLOUD = new NormalImage("../image/story/weather/cloud.png", 690, 158);
	STORY_PREVIEWWEATHER_NIGHT = new NormalImage("../image/story/weather/night.png", 690, 158);
	// パレットの画像
	// パレット
	STORY_PALETTE_1 = new NormalImage("../image/story/palette/palette1.png", 1000, 600);
	STORY_PALETTE_2 = new NormalImage("../image/story/palette/palette2.png", 1000, 600);
	STORY_PALETTE_3 = new NormalImage("../image/story/palette/palette3.png", 1000, 600);
	// とじるボタン
	STORY_PALETTECLOSEBUTTON = new NormalImage("../image/story/palette/close.png", 83, 44);
	// じんぶつ属性ボタン
	STORY_PALETTEPROPERTY_MAN_OFF = new NormalImage("../image/story/palette/property/man/manOff.png", 87, 77);
	STORY_PALETTEPROPERTY_MAN_ON = new NormalImage("../image/story/palette/property/man/manOn.png", 87, 77);
	STORY_PALETTEPROPERTY_LADY_OFF = new NormalImage("../image/story/palette/property/lady/ladyOff.png", 87, 77);
	STORY_PALETTEPROPERTY_LADY_ON = new NormalImage("../image/story/palette/property/lady/ladyOn.png", 87, 77);
	STORY_PALETTEPROPERTY_BOY_OFF = new NormalImage("../image/story/palette/property/boy/boyOff.png", 87, 77);
	STORY_PALETTEPROPERTY_BOY_ON = new NormalImage("../image/story/palette/property/boy/boyOn.png", 87, 77);
	STORY_PALETTEPROPERTY_GIRL_OFF = new NormalImage("../image/story/palette/property/girl/girlOff.png", 87, 77);
	STORY_PALETTEPROPERTY_GIRL_ON = new NormalImage("../image/story/palette/property/girl/girlOn.png", 87, 77);
	// どうぶつ属性ボタン
	STORY_PALETTEPROPERTY_DOG_OFF = new NormalImage("../image/story/palette/property/dog/dogOff.png", 87, 77);
	STORY_PALETTEPROPERTY_DOG_ON = new NormalImage("../image/story/palette/property/dog/dogOn.png", 87, 77);
	STORY_PALETTEPROPERTY_BIRD_OFF = new NormalImage("../image/story/palette/property/bird/birdOff.png", 87, 77);
	STORY_PALETTEPROPERTY_BIRD_ON = new NormalImage("../image/story/palette/property/bird/birdOn.png", 87, 77);
	STORY_PALETTEPROPERTY_BEAR_OFF = new NormalImage("../image/story/palette/property/bear/bearOff.png", 87, 77);
	STORY_PALETTEPROPERTY_BEAR_ON = new NormalImage("../image/story/palette/property/bear/bearOn.png", 87, 77);
	STORY_PALETTEPROPERTY_TURTLE_OFF = new NormalImage("../image/story/palette/property/turtle/turtleOff.png", 87, 77);
	STORY_PALETTEPROPERTY_TURTLE_ON = new NormalImage("../image/story/palette/property/turtle/turtleOn.png", 87, 77);
	// 背景属性ボタン
	STORY_PALETTEPROPERTY_SUNNY_OFF = new NormalImage("../image/story/palette/property/sunny/sunnyOff.png", 68, 60);
	STORY_PALETTEPROPERTY_SUNNY_ON = new NormalImage("../image/story/palette/property/sunny/sunnyOn.png", 68, 60);
	STORY_PALETTEPROPERTY_CLOUD_OFF = new NormalImage("../image/story/palette/property/cloud/cloudOff.png", 68, 60);
	STORY_PALETTEPROPERTY_CLOUD_ON = new NormalImage("../image/story/palette/property/cloud/cloudOn.png", 68, 60);
	STORY_PALETTEPROPERTY_NIGHT_OFF = new NormalImage("../image/story/palette/property/night/nightOff.png", 68, 60);
	STORY_PALETTEPROPERTY_NIGHT_ON = new NormalImage("../image/story/palette/property/night/nightOn.png", 68, 60);
}