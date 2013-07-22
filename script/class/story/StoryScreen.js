// 物語作成画面の見た目(インタフェース)を統括するクラス
var StoryScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function() {
		// 以下, このクラスのプロパティ
		this._changeMusicButton	= null;	// 作曲モード遷移ボタンのオブジェクト
		this._previewScreen		= null;	// プレビューウィンドウのオブジェクト
		this._parent			= null;	// このクラスの親にあたるオブジェクト
	},

	_createChangeMusicButton : function() {
		this._changeMusicButton			= new ChangeMusicButton(CHANGE_MUSIC_BUTTON_WIDTH, CHANGE_MUSIC_BUTTON_HEIGHT);
		this._changeMusicButton.image	= core.assets[CHANGE_MUSIC_BUTTON];
		this._changeMusicButton.x		= 900;
		this._changeMusicButton.y		= 660;

		storyScene.addChild(this._changeMusicButton);
	},

	// <summary>
	// プレビュー画面のオブジェクトを生成して画面に表示する
	// </summary>
	_createPreviewScreen : function() {
		this._previewScreen			= new PreviewScreen();
		this._previewScreen._parent	= this;
	},
})