// サインボードを表すクラス
// (enchant.Spriteクラスを継承)
var Signboard = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);
		// 以下, このクラスのプロパティ
		this._number = null; // サインボードの番号
		this._label = null; // サインボードに表示される数字画像のオブジェクト
	},

	// サインボードに表示される数字画像のオブジェクトを生成し, 画面に表示する
	_makeSignboardLabel : function() {
		var path = LABEL[this._number]._path;
		var width = LABEL[this._number]._width;
		var height = LABEL[this._number]._height;

		this._label = new Sprite(width, height);
		this._label.image = core.assets[path];
		this._label.x = this.x + 7;
		this._label.y = this.y + 8;

		musicScene.addChild(this._label);
	},

	// 引数の数値を_numberプロパティに与える
	_setSignboardNumber : function(number) {
		this._number = number;
	},

	// 引数の数値の数字画像をサインボードにセットする
	_setSignboardLabel : function(number) {
		this._label.image = core.assets[LABEL[this._number]._path];
	},
})