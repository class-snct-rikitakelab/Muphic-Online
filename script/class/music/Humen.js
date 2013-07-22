// 譜面を表すクラス
// (enchant.Spriteクラスを継承)
var Humen = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);

		// 以下, このクラスのプロパティ
		this._parent			= null;			// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// 譜面上が押された際の処理
	// </summary>
	ontouchend : function(event) {
		var canPutAnimal = this._parent._getAnimalButtonState();

		if(canPutAnimal === false) {
			// 動物が置ける状態でないならばreturnで終わり
			return;
		} else if(canPutAnimal === true) {
			// 動物が置ける状態ならばクリックしたx座標値とy座標値を調べてもらう
			this._parent._checkClickPoint(event.x, event.y);
		}
	},
})