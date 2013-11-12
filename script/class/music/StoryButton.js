var StoryButton = enchant.Class.create(MusicSceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[MUSIC_CHANGESTORYBUTTON_ON._path];
		} else {
			this.image = core.assets[MUSIC_CHANGESTORYBUTTON_OFF._path];
		}
	},

	// 物語作成画面へ遷移
	_moveToStoryScene : function() {
		core.replaceScene(storyScene);
	},

	// クリック時の処理
	ontouchend : function(event) {
		this._moveToStoryScene();
	},
	// 定期処理
	onenterframe : function(event) {
		var leftX = this.x;
		var rightX = this.x + this.width;
		var topY = this.y;
		var bottomY = this.y + this.height;
		var mOverX = mouseOverX(clientX, leftX, rightX, 0, 0);
		var mOverY = mouseOverY(clientY, topY, bottomY, 0, 0);
		if(mOverX === true && mOverY === true) {
			this._setOnOffImage("on");
		} else {
			this._setOnOffImage("off");
		}
	},
})