var MusicSceneGroup = enchant.Class.create(enchant.Group, {
	// コンストラクタ
	initialize : function(parent) {
		enchant.Group.call(this);
		this._parent = parent;
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