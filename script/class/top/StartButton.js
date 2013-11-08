var StartButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._parent = parent;
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[TOP_STARTBUTTON_ON._path];
		} else {
			this.image = core.assets[TOP_STARTBUTTON_OFF._path];
		}
	},

	// トップ画面へ加える
	_addToTopScene : function() {
		topScene.addChild(this);
	},

	// トップ画面から削除する
	_removeFromTopScene : function() {
		topScene.removeChild(this);
	},

	// 物語作成画面へ遷移
	_moveToStoryScene : function() {
		core.replaceScene(storyScene);
	},

	// クリック時の処理
	ontouchend : function() {
		this._moveToStoryScene();
	},

	// フレーム処理
	onenterframe : function() {
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