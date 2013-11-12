var State = enchant.Class.create({
	// コンストラクタ
	initialize : function(parent) {
		this._parent = parent;
	},

	// 各ステート時の振る舞い(要オーバーライド)
	_stateBehavior : function() {
		// override!
	},
})