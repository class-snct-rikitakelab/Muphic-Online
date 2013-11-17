var StateController = enchant.Class.create({
	// コンストラクタ
	initialize : function(parent) {
		this._object = null;
		this._parent = parent;
	},

	// オブジェクトの状態を変化させるメソッド
	_changeState : function(state) {
		this._object._setState(state);
	},

	// セッタ群
	_setObject : function(object) {
		this._object = object;
	},
})