// 物語作成画面の見た目(インタフェース)を統括するクラス
var StoryScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function() {
		// 以下, このクラスのプロパティ
		this._storyMediator = null; // 物語作成画面全体の仲介を担当するオブジェクト
		this._parent = null; // このクラスの親にあたるオブジェクト
	},

	// 物語作成画面全体の仲介を担当するオブジェクトを生成する
	_createStoryMediator : function() {
		this._storyMediator = new StoryMediator();
		this._storyMediator._parent = this;
	},

	// 作曲画面への遷移ボタンのオブジェクトを生成して画面に表示する
	_createChangeMusicButton : function() {
		var path = STORY_CHANGEMUSICBUTTON._path;
		var width = STORY_CHANGEMUSICBUTTON._width;
		var height = STORY_CHANGEMUSICBUTTON._height;

		this._storyMediator._changeMusicButton = new ChangeMusicButton(width, height);
		this._storyMediator._changeMusicButton.image = core.assets[path];
		this._storyMediator._changeMusicButton.x = 900;
		this._storyMediator._changeMusicButton.y = 660;
		this._storyMediator._changeMusicButton._parent = this._storyMediator;
		storyScene.addChild(this._storyMediator._changeMusicButton);
	},

	// プレビュー画面のオブジェクトを生成して画面に表示する
	_createPreviewScreen : function() {
		this._storyMediator._previewScreen = new PreviewScreen();
		this._storyMediator._previewScreen._parent = this._storyMediator;
	},

	// プレビュー画面データのオブジェクトを生成して画面に表示する
	_createPreviewScreenData : function() {
		this._storyMediator._previewScreenData = new PreviewScreenData();
		this._storyMediator._previewScreenData._parent = this._storyMediator;
	},

	// じんぶつイラストボタンのオブジェクトを生成して画面に表示する
	_createHumanIllustButton : function() {
		var path = STORY_HUMAN_ILLUSTBUTTON_OFF._path;
		var width = STORY_HUMAN_ILLUSTBUTTON_OFF._width;
		var height = STORY_HUMAN_ILLUSTBUTTON_OFF._height;

		this._storyMediator._humanIllustButton = new HumanIllustButton(width, height);
		this._storyMediator._humanIllustButton.image = core.assets[path];
		this._storyMediator._humanIllustButton.x = 35;
		this._storyMediator._humanIllustButton.y = 200;
		this._storyMediator._humanIllustButton._parent = this._storyMediator;
		storyScene.addChild(this._storyMediator._humanIllustButton);
	},

	// どうぶつイラストボタンのオブジェクトを生成して画面に表示する
	_createAnimalIllustButton : function() {
		var path = STORY_ANIMAL_ILLUSTBUTTON_OFF._path;
		var width = STORY_ANIMAL_ILLUSTBUTTON_OFF._width;
		var height = STORY_ANIMAL_ILLUSTBUTTON_OFF._height;

		this._storyMediator._animalIllustButton = new AnimalIllustButton(width, height);
		this._storyMediator._animalIllustButton.image = core.assets[path];
		this._storyMediator._animalIllustButton.x = 35;
		this._storyMediator._animalIllustButton.y = 329;
		this._storyMediator._animalIllustButton._parent = this._storyMediator;
		storyScene.addChild(this._storyMediator._animalIllustButton);
	},

	// あいてむイラストボタンのオブジェクトを生成して画面に表示する
	_createItemIllustButton : function() {
		var path = STORY_ITEM_ILLUSTBUTTON_OFF._path;
		var width = STORY_ITEM_ILLUSTBUTTON_OFF._width;
		var height = STORY_ITEM_ILLUSTBUTTON_OFF._height;

		this._storyMediator._itemIllustButton = new ItemIllustButton(width, height);
		this._storyMediator._itemIllustButton.image = core.assets[path];
		this._storyMediator._itemIllustButton.x = 35;
		this._storyMediator._itemIllustButton.y = 458;
		this._storyMediator._itemIllustButton._parent = this._storyMediator;
		storyScene.addChild(this._storyMediator._itemIllustButton);
	},

	// はいけいイラストボタンのオブジェクトを生成して画面に表示する
	_createBackgroundIllustButton : function() {
		var path = STORY_BACKGROUND_ILLUSTBUTTON_OFF._path;
		var width = STORY_BACKGROUND_ILLUSTBUTTON_OFF._width;
		var height = STORY_BACKGROUND_ILLUSTBUTTON_OFF._height;

		this._storyMediator._backgroundIllustButton = new BackgroundIllustButton(width, height);
		this._storyMediator._backgroundIllustButton.image = core.assets[path];
		this._storyMediator._backgroundIllustButton.x = 35;
		this._storyMediator._backgroundIllustButton.y = 587;
		this._storyMediator._backgroundIllustButton._parent = this._storyMediator;
		storyScene.addChild(this._storyMediator._backgroundIllustButton);
	},

	// 以下山下担当分のテストコード
	// パレットのオブジェクトを生成して画面に表示する
	_createPalette : function() {
		var path = STORY_PALETTE._path;
		var width = STORY_PALETTE._width;
		var height = STORY_PALETTE._height;

		this._storyMediator._palette = new Palette(width, height);
		this._storyMediator._palette.image = core.assets[path];
		this._storyMediator._palette.x = (APP_WIDTH - width) / 2;
		this._storyMediator._palette.y = (APP_HEIGHT - height) / 2;
		this._storyMediator._palette._parent = this._storyMediator;
		storyScene.addChild(this._storyMediator._palette);
	},
})