// 物語作成画面の見た目(インタフェース)を統括するクラス
var StoryScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function() {
		// 以下, このクラスのプロパティ
		this._storyMediator	= null;	// 物語作成画面全体の仲介を担当するオブジェクト
		this._parent		= null;	// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// 物語作成画面全体の仲介を担当するオブジェクトを生成する
	// </summary>
	_createStoryMediator : function() {
		this._storyMediator			= new StoryMediator();
		this._storyMediator._parent	= this;
	},

	// <summary>
	// 作曲画面への遷移ボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createChangeMusicButton : function() {
		this._storyMediator._changeMusicButton			= new ChangeMusicButton(CHANGE_MUSIC_BUTTON_WIDTH, CHANGE_MUSIC_BUTTON_HEIGHT);
		this._storyMediator._changeMusicButton.image	= core.assets[CHANGE_MUSIC_BUTTON];
		this._storyMediator._changeMusicButton.x		= 900;
		this._storyMediator._changeMusicButton.y		= 660;
		this._storyMediator._changeMusicButton._parent	= this._storyMediator;
		storyScene.addChild(this._storyMediator._changeMusicButton);
	},

	// <summary>
	// プレビュー画面のオブジェクトを生成して画面に表示する
	// </summary>
	_createPreviewScreen : function() {
		this._storyMediator._previewScreen			= new PreviewScreen();
		this._storyMediator._previewScreen._parent	= this._storyMediator;
	},

	// <summary>
	// プレビュー画面データのオブジェクトを生成して画面に表示する
	// </summary>
	_createPreviewScreenData : function() {
		this._storyMediator._previewScreenData			= new PreviewScreenData();
		this._storyMediator._previewScreenData._parent	= this._storyMediator;
	},
})