var ChangeStoryButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(width, height) {
		enchant.Sprite.call(this, width, height);
		this._parent = null;
	},

	// <summary>
	// ボタンを押せる状態にする
	// </summary>
	_setTouchEnable : function() {
		this.touchEnabled = true;
	},

	// <summary>
	// ボタンを押せない状態にする
	// </summary>
	_setTouchDisable : function() {
		this.touchEnabled = false;
	},

	// <summary>
	// ボタンを不透明状態にする
	// </summary>
	_setOpacity : function() {
		this.opacity = 1.0;
	},

	// <summary>
	// ボタンを半透明状態にする
	// </summary>
	_setTransparent : function() {
		this.opacity = 0.5;
	},

	// <summary>
	// ボタンの全てのステータスを押せる状態に合わせる
	// </summary>
	_setCanPush : function() {
		this._setTouchEnable();
		this._setOpacity();
	},

	// <summary>
	// ボタンの全てのステータスを押せない状態に合わせる
	// </summary>
	_setCannotPush : function() {
		this._setTouchDisable();
		this._setTransparent();
	},

	ontouchend : function(event) {
		core.replaceScene(storyScene);
	},

	onenterframe : function(event) {
		var canPlay = this._parent._getPlayButtonState();

		if(canPlay === true) {
			this._setCannotPush();
		} else if(canPlay === false) {
			this._setCanPush();
		}
	},
})