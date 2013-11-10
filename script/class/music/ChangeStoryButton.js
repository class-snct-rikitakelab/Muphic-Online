var ChangeStoryButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(width, height) {
		enchant.Sprite.call(this, width, height);
		this._parent = null;
	},

	// ボタンを押せる状態にする
	_setTouchEnable : function() {
		this.touchEnabled = true;
	},

	// ボタンを押せない状態にする
	_setTouchDisable : function() {
		this.touchEnabled = false;
	},

	// ボタンを不透明状態にする
	_setOpacity : function() {
		this.opacity = 1.0;
	},

	// ボタンを半透明状態にする
	_setTransparent : function() {
		this.opacity = 0.5;
	},

	// ボタンの全てのステータスを押せる状態に合わせる
	_setCanPush : function() {
		this._setTouchEnable();
		this._setOpacity();
	},

	// ボタンの全てのステータスを押せない状態に合わせる
	_setCannotPush : function() {
		this._setTouchDisable();
		this._setTransparent();
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[MUSIC_CHANGESTORYBUTTON_ON._path];
		} else {
			this.image = core.assets[MUSIC_CHANGESTORYBUTTON_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function(event) {
		core.replaceScene(storyScene);
	},

	// 定期処理
	onenterframe : function(event) {
		var canPlay = this._parent._getPlayButtonState();
		if(canPlay === true) {
			this._setCannotPush();
		} else if(canPlay === false) {
			this._setCanPush();
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