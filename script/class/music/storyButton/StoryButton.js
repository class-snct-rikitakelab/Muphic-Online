var StoryButton = enchant.Class.create(MusicSceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._state = new NonPlayingStoryButtonState(this);
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
		this._state._touchEndBehavior();
	},
	// フレーム処理
	onenterframe : function(event) {
		this._state._frameBehavior();
	},

	// 各種ステートセッタ
	// ステートセッタ
	_setState : function(state) {
		this._state = state;
	},
	// 非再生ステートセッタ
	_setNonPlayingStoryButtonState : function() {
		this._setState(new NonPlayingStoryButtonState(this));
	},
	// 再生ステートセッタ
	_setPlayingStoryButtonState : function() {
		this._setState(new PlayingStoryButtonState(this));
	},
})