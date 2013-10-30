// 物語作成画面の見た目(インタフェース)を統括するクラス
var StoryScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function(parent) {
		// 以下, このクラスのプロパティ
		this._musicButton = null;
		this._previewScreen = null;
		this._illustButton = null;
		this._humanPalette = null;
		this._animalPalette = null;
		this._parent = parent;
	},

	// 作曲画面への遷移ボタンのオブジェクトを生成
	_createMusicButton : function() {
		var path = STORY_CHANGEMUSICBUTTON._path;
		var width = STORY_CHANGEMUSICBUTTON._width;
		var height = STORY_CHANGEMUSICBUTTON._height;
		var x = 900;
		var y = 660;
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

	// 以下山下担当分のテストコード
	// パレットのオブジェクトを生成して画面に表示する
	_createHumanPalette : function() {
		this._humanPalette = new HumanPalette(this);
		this._humanPalette._createPaletteFrame();
		this._humanPalette._createPropertyButton();
		this._humanPalette._createPaletteIllust();
		this._humanPalette._addPaletteFrameToGroup();
		this._humanPalette._addPropertyButtonToGroup();
	},
	_createAnimalPalette : function() {
		this._animalPalette = new AnimalPalette(this);
		this._animalPalette._createPaletteFrame();
		this._animalPalette._createPropertyButton();
		this._animalPalette._createPaletteIllust();
		this._animalPalette._addPaletteFrameToGroup();
		this._animalPalette._addPropertyButtonToGroup();
	},

	// 選択された半透明画像のオブジェクト生成を子に依頼
	_createSelectedIllust : function(imagePath, removeFocusPath, width, height) {
		this._previewScreen._createSelectedIllust(imagePath, removeFocusPath, width, height);
	},
})