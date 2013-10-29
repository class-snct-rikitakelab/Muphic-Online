var RemoveButton = enchant.Class.create(enchant.Sprite, {
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
		this._parent = parent; // このクラスの親にあたるオブジェクト
	},

	// _isPushプロパティにブーリアン値をセットする
	_setIsPush : function(isPush) {
		this._isPush = isPush;
	},

	// touchEnabledプロパティにブーリアン値をセットする
	_setTouchEnabled : function(touchEnabled) {
		this.touchEnabled = touchEnabled;
	},

	// opacityプロパティのブーリアン値をセットする
	_setOpacity : function(opacity) {
		this.opacity = opacity;
	},

	// 物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},
	// 物語作成画面から削除する
	_removeFromStoryScene : function() {
		storyScene.removeChild(this);
	},

	// ボタンが「押されている」状態の時の色に変更する
	_setImage : function(imageState) {
		if(imageState === "on") {
			this.image = core.assets[STORY_REMOVEBUTTON_ON._path];
		} else if(imageState === "off") {
			this.image = core.assets[STORY_REMOVEBUTTON_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function() {
		var myselfPush = this._isPush;
		if(myselfPush === true) {
			this._isPush = false;
			this._setImage("off");
		} else {
			this._isPush = true;
			this._setImage("on");
		}
	},

	// フレーム処理
	onenterframe : function() {
		var illust = this._parent._illust.length;
		if(illust > 0) {
			this._setTouchEnabled(true);
			this._setOpacity(1.0);
		} else {
			this._setIsPush(false);
			this._setImage("off");
			this._setTouchEnabled(false);
			this._setOpacity(0.5);
		}
	},
})