var State = enchant.Class.create({
	// コンストラクタ
	initialize : function(parent) {
		this._parent = parent;
	},

	// クリック時の振る舞い(要オーバーライド)
	_touchEndBehavior : function() {
		// override!
	},
	// フレーム処理の振る舞い(要オーバーライド)
	_frameBehavior : function() {
		// override!
	},
})