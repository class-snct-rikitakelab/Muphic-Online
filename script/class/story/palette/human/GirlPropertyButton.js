var GirlPropertyButton = enchant.Class.create(StorySceneSprite, {
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
			this.image = core.assets[STORY_PALETTEPROPERTY_GIRL_ON._path];
		} else {
			this.image = core.assets[STORY_PALETTEPROPERTY_GIRL_OFF._path];
		}
	},
	// 押下, 非押下時の画像切り替え
	_setPushImage : function(state) {
		if(state === "push") {
			this.image = core.assets[STORY_PALETTEPROPERTY_GIRL_PUSH._path];
		} else {
			this.image = core.assets[STORY_PALETTEPROPERTY_GIRL_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function(event) {
		var myselfPush = this._isPush;
		var otherPush = this._parent._getPushButton();
		if(myselfPush === false && otherPush !== null) {
			switch(otherPush) {
				case "man":
					this._parent._getManPropertyButton()._setIsPush(false);
					this._parent._getManPropertyButton()._setOnOffImage("off");
					this._parent._requestRemoveIllust("man");
				case "lady":
					this._parent._getLadyPropertyButton()._setIsPush(false);
					this._parent._getLadyPropertyButton()._setOnOffImage("off");
					this._parent._requestRemoveIllust("lady");
				case "boy":
					this._parent._getBoyPropertyButton()._setIsPush(false);
					this._parent._getBoyPropertyButton()._setOnOffImage("off");
					this._parent._requestRemoveIllust("boy");
			}
			this._setIsPush(true);
			this._setPushImage("push");
			this._parent._setPushButton("girl");
			this._parent._requestAddIllust("girl");
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