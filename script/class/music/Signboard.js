// サインボードを表すクラス
// (enchant.Spriteクラスを継承)
var Signboard = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);

		// 以下, このクラスのプロパティ
		this._number	= null;	// サインボードの番号
		this._label		= null;	// サインボードに表示される数字画像のオブジェクト
	},

	// <summary>
	// サインボードに表示される数字画像のオブジェクトを生成し, 画面に表示する
	// </summary>
	_makeSignboardLabel : function() {
		this._label			= new Sprite(LABEL_WIDTH, LABEL_HEIGHT);
		this._label.image	= core.assets[NUMBER_LABELS[this._number]];
		this._label.x		= this.x + 7;
		this._label.y		= this.y + 8;

		musicScene.addChild(this._label);
	},

	// <summary>
	// 引数の数値を_numberプロパティに与える
	// </summary>
	_setSignboardNumber : function(number) {
		this._number = number;
	},

	// <summary>
	// 引数の数値の数字画像をサインボードにセットする
	// </summary>
	_setSignboardLabel : function(number) {
		this._label.image = core.assets[NUMBER_LABELS[number]];
	},
})