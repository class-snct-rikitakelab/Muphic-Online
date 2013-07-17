// 作曲画面の見た目(インタフェース)を統括するクラス
var MusicScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function() {
		// 以下, このクラスのプロパティ
		this._animalButton	= null;	// 動物ボタンのオブジェクト
		this._humen			= null;	// 譜面のオブジェクト
		this._parent		= null;	// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// 動物ボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createAnimalButton : function() {
		this._animalButton			= new AnimalButton(ANIMAL_BUTTON_WIDTH, ANIMAL_BUTTON_HEIGHT);

		this._animalButton.image	= core.assets[ANIMAL_BUTTON_OFF];
		this._animalButton.x		= 910;
		this._animalButton.y		= 680;
		this._animalButton._parent	= this;

		musicScene.addChild(this._animalButton);
	},

	// <summary>
	// 譜面のオブジェクトを生成して画面に表示する
	// </summary>
	_createHumen : function() {
		this._humen			= new Humen(HUMEN_WIDTH, HUMEN_HEIGHT);

		this._humen.image	= core.assets[HUMEN];
		this._humen.x		= (APP_WIDTH / 2) - (HUMEN_WIDTH / 2);
		this._humen.y		= 186;
		this._humen._parent	= this;

		musicScene.addChild(this._humen);
	},
})