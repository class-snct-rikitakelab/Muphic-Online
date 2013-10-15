// 物語作成画面の見た目(インタフェース)を統括するクラス
var StoryScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function(parent) {
		// 以下, このクラスのプロパティ
		this._musicButton = null;
		this._previewScreen = null;
		this._illustButton = null;
		this._palette = null;
		this._selectedIllustPath = null;
		this._selectedIllustWidth = null;
		this._selectedIllustHeight = null;
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
	_createPalette : function() {
		this._palette = new Palette(this);
		this._palette._createPaletteFrame();
		this._palette._createPropertyButton();
		this._palette._createPaletteIllust();
		this._palette._addPaletteFrameToGroup();
		this._palette._addPropertyButtonToGroup();
	},

	// 選択された画像のパスをゲット
	_getSelectedImagePath : function(path) {
		return this._selectedImagePath;
	},
	// 選択された画像の横幅をゲット
	_getSelectedImageWidth : function(width) {
		return this._selectedImageWidth;
	},
	// 選択された画像の縦幅をゲット
	_getSelectedImageHeight : function(height) {
		return this._selectedImageHeight;
	},
	// 選択された画像のパスをセット
	_setSelectedImagePath : function(path) {
		this._selectedImagePath = path;
	},
	// 選択された画像の横幅をセット
	_setSelectedImageWidth : function(width) {
		this._selectedImageWidth = width;
	},
	// 選択された画像の縦幅をセット
	_setSelectedImageHeight : function(height) {
		this._selectedImageHeight = height;
	},

	// 選択された半透明画像のオブジェクトを生成
	_createSelectedIllust : function() {
		var path = this._selectedImagePath;
		var width = this._selectedImageWidth;
		var height = this._selectedImageHeight;
		var x = clientX;
		var y = clientY;
		this._previewScreen._createSelectedIllust(path, width, height, x, y)
	},
})