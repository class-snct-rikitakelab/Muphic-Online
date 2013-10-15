var MusicButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._parent = parent;
	},

	// 物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},

	// 物語作成画面から削除する
	_removeFromStoryScene : function() {
		storyScene.removeChild(this);
	},

	// 作曲画面へ遷移
	_moveToMusicScene : function() {
		core.replaceScene(musicScene);
	},

	// クリック時の処理
	ontouchend : function() {
		this._moveToMusicScene();
	},
})