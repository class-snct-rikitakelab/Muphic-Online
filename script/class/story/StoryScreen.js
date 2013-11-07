// 物語作成画面の見た目(インタフェース)を統括するクラス
var StoryScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function(parent) {
		// 以下, このクラスのプロパティ
		this._screenBackground = null;
		this._musicButton = null;
		this._previewScreen = null;
		this._illustButton = null;
		this._humanPalette = null;
		this._animalPalette = null;
		this._itemPalette = null;
		this._backgroundPalette = null;
		this._parent = parent;
	},

	// 画面全体の背景のオブジェクトを生成
	_createScreenBackground : function() {
		var path = STORY_BACKGROUND._path;
		var width = STORY_BACKGROUND._width;
		var height = STORY_BACKGROUND._height;
		var x = 0;
		var y = 0;
		this._screenBackground = new ScreenBackground(path, width, height, x, y, this);
	},
	// 作曲画面への遷移ボタンのオブジェクトを生成
	_createMusicButton : function() {
		var path = STORY_CHANGEMUSICBUTTON_OFF._path;
		var width = STORY_CHANGEMUSICBUTTON_OFF._width;
		var height = STORY_CHANGEMUSICBUTTON_OFF._height;
		var x = 20;
		var y = 30;
		this._musicButton = new MusicButton(path, width, height, x, y, this);
	},
	// プレビュー画面のオブジェクトを生成
	_createPreviewScreen : function() {
		this._previewScreen = new PreviewScreen(this);
		this._previewScreen._createFrame();
		this._previewScreen._createBackground();
		this._previewScreen._createWeather();
		this._previewScreen._createRemoveButton();
	},
	// イラストボタンのオブジェクトを生成
	_createIllustButton : function() {
		this._illustButton = new IllustButton(this);
		this._illustButton._createHumanButton();
		this._illustButton._createAnimalButton();
		this._illustButton._createItemButton();
		this._illustButton._createBackgroundButton();
	},

	// パレットのオブジェクトを生成して画面に表示する
	_createHumanPalette : function() {
		this._humanPalette = new HumanPalette(this);
		this._humanPalette._createPaletteFrame();
		this._humanPalette._createPropertyButton();
		this._humanPalette._createPaletteIllust();
		this._humanPalette._createCloseButton();
		this._humanPalette._addPaletteFrameToGroup();
		this._humanPalette._addPropertyButtonToGroup();
		this._humanPalette._addCloseButtonToGroup();
	},
	_createAnimalPalette : function() {
		this._animalPalette = new AnimalPalette(this);
		this._animalPalette._createPaletteFrame();
		this._animalPalette._createPropertyButton();
		this._animalPalette._createPaletteIllust();
		this._animalPalette._createCloseButton();
		this._animalPalette._addPaletteFrameToGroup();
		this._animalPalette._addPropertyButtonToGroup();
		this._animalPalette._addCloseButtonToGroup();
	},
	_createItemPalette : function() {
		this._itemPalette = new ItemPalette(this);
		this._itemPalette._createPaletteFrame();
		this._itemPalette._createPaletteIllust();
		this._itemPalette._createCloseButton();
		this._itemPalette._addPaletteFrameToGroup();
		this._itemPalette._addCloseButtonToGroup();
	},
	_createBackgroundPalette : function() {
		this._backgroundPalette = new BackgroundPalette(this);
		this._backgroundPalette._createPaletteFrame();
		this._backgroundPalette._createPropertyButton();
		this._backgroundPalette._createPaletteIllust();
		this._backgroundPalette._createCloseButton();
		this._backgroundPalette._addPaletteFrameToGroup();
		this._backgroundPalette._addPropertyButtonToGroup();
		this._backgroundPalette._addCloseButtonToGroup();
	},

	// 背景画像をセット
	_setBackgroundImage : function(path) {
		this._previewScreen._setBackgroundImage(path);
	},
	// 天気画像をセット
	_setWeatherImage : function(path) {
		this._previewScreen._setWeatherImage(path);
	},

	// 選択された半透明画像のオブジェクト生成を子に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._previewScreen._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},

	// 画面全体の背景を暗くしない
	_setNotDarkScreenBackground : function() {
		this._screenBackground._setDarkImage(false);
	},
	// 画面全体の背景を暗くする
	_setDarkScreenBackground : function() {
		this._screenBackground._setDarkImage(true);
	},
	// 作曲画面への遷移ボタンを押せる状態に
	_setCanPushMusicButton : function() {
		this._musicButton._setTouchEnabled(true);
		this._musicButton._setDarkImage(false);
	},
	// 作曲画面への遷移ボタンを押せない状態に
	_setCannotPushMusicButton : function() {
		this._musicButton._setTouchEnabled(false);
		this._musicButton._setDarkImage(true);
	},
	// イラストボタン全体を押せる状態に
	_setCanPushAllIllustButton : function() {
		this._illustButton._setCanPushAllIllustButton();
	},
	// イラストボタン全体を押せない状態に
	_setCannotPushAllIllustButton : function() {
		this._illustButton._setCannotPushAllIllustButton();
	},
	// 削除ボタンを押せる状態に
	_setCanPushRemoveButton : function() {
		this._previewScreen._setCanPushRemoveButton();
	},
	// 削除ボタンを押せない状態に
	_setCannotPushRemoveButton : function() {
		this._previewScreen._setCannotPushRemoveButton();
	},
})