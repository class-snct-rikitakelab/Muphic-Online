// 音符情報を表すクラス
var Note = enchant.Class.create({
	// コンストラクタ
	initialize : function() {
		// 以下, このクラスのプロパティ
		this._index = null; // 音符番号
		this._soundSource = null; // 音源
		this._measure = null; // 小節
		this._beat = null; // 拍
		this._scale = null; // 音階
		this._isLast = false; // 譜面上で最後の音符かどうかを表すフラグ
		this._parent = null; // このクラスの親にあたるオブジェクト
	},
})