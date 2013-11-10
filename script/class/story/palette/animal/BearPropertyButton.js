var BearPropertyButton = enchant.Class.create(StorySceneSprite, {
	initialize : function(path, width, height, x, y, parent) {
		StorySceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
	},

	// _isPushプロパティにブーリアン値をセットする
	_setIsPush : function(isPush) {
		this._isPush = isPush;
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[STORY_PALETTEPROPERTY_BEAR_ON._path];
		} else {
			this.image = core.assets[STORY_PALETTEPROPERTY_BEAR_OFF._path];
		}
	},
	// 押下, 非押下時の画像切り替え
	_setPushImage : function(state) {
		if(state === "push") {
			this.image = core.assets[STORY_PALETTEPROPERTY_BEAR_PUSH._path];
		} else {
			this.image = core.assets[STORY_PALETTEPROPERTY_BEAR_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function(event) {
		var myselfPush = this._isPush;
		var otherPush = this._parent._getPushButton();
		if(myselfPush === false && otherPush !== null) {
			switch(otherPush) {
				case "dog":
					this._parent._getDogPropertyButton()._setIsPush(false);
					this._parent._getDogPropertyButton()._setOnOffImage("off");
					this._parent._requestRemoveIllust("dog");
				case "bird":
					this._parent._getBirdPropertyButton()._setIsPush(false);
					this._parent._getBirdPropertyButton()._setOnOffImage("off");
					this._parent._requestRemoveIllust("bird");
				case "turtle":
					this._parent._getTurtlePropertyButton()._setIsPush(false);
					this._parent._getTurtlePropertyButton()._setOnOffImage("off");
					this._parent._requestRemoveIllust("turtle");
			}
			this._setIsPush(true);
			this._setPushImage("push");
			this._parent._setPushButton("bear");
			this._parent._requestAddIllust("bear");
		}
	},

	// フレーム処理
	onenterframe : function() {
		if(this._isPush === false) {
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