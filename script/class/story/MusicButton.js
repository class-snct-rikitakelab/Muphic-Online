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

	//ボタンが押せない状態にする
	_setTouchEnabled : function (touchEnabled) {
		this.touchEnabled = touchEnabled;
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[STORY_CHANGEMUSICBUTTON_ON._path];
		} else {
			this.image = core.assets[STORY_CHANGEMUSICBUTTON_OFF._path];
		}
	},

	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[STORY_CHANGEMUSICBUTTON_DARK._path];
		} else if(isDark === false) {
			this.image = core.assets[STORY_CHANGEMUSICBUTTON_OFF._path];
		}
	},

	// 作曲画面へ遷移
	_moveToMusicScene : function() {
		core.replaceScene(musicScene);
	},

	// クリック時の処理
	ontouchend : function() {
		this._moveToMusicScene();
	},

	// フレーム処理
	onenterframe : function() {
		if(this.touchEnabled === true) {
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
		}
	},
})