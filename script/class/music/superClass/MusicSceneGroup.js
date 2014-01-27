var MusicSceneGroup = enchant.Class.create(enchant.Group, {
	// コンストラクタ
	initialize : function(parent) {
		enchant.Group.call(this);
		this._parent = parent;
	},

	// x座標をセット
	_setX : function(x) {
		this.x = x;
	},
	// y座標をセット
	_setY : function(y) {
		this.y = y;
	},

	// グループ全体を作曲画面へ加える
	_addToMusicScene : function() {
		musicScene.addChild(this);
	},
	// グループ全体を作曲画面から消す
	_removeFromMusicScene : function() {
		musicScene.removeChild(this);
	},

	// このグループにオブジェクトを加える
	_addToGroup : function(object) {
		this.addChild(object);
	},
	// このグループからオブジェクトを消す
	_removeFromGroup : function(object) {
		this.removeChild(object);
	},
})