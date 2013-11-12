var MusicRemoveButton = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
		this._touchButton = false; // ボタンをクリックしたかどうか
		this._state = new NonPushRemoveState(this);
	},

	// _isPushプロパティゲッタ
	_getIsPush : function() {
		return this._isPush;
	},
	// _isPushプロパティにブーリアン値をセットする
	_setIsPush : function(isPush) {
		this._isPush = isPush;
	},
	// _stateプロパティセッタ
	_setState : function(state) {
		this._state = state;
	},

	// On, Off時の画像切り替え
	_setOnOffImage : function(state) {
		if(state === "on") {
			this.image = core.assets[MUSIC_REMOVEBUTTON_ON._path];
		} else {
			this.image = core.assets[MUSIC_REMOVEBUTTON_OFF._path];
		}
	},
	// 押下, 非押下時の画像切り替え
	_setPushImage : function(state) {
		if(state === "push") {
			this.image = core.assets[MUSIC_REMOVEBUTTON_PUSH._path];
		} else {
			this.image = core.assets[MUSIC_REMOVEBUTTON_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function() {
		var pianoButton = this._parent._getPianoButton();
		this._state._touchEndBehavior(pianoButton);
	},

	// フレーム処理
	onenterframe : function() {
		this._state._frameBehavior();
	},

	// 親メソッド
	// 選択なしステートセッタ
	_setNonSelectState : function() {
		this._parent._setNonSelectState();
	},
	// 削除選択ステートセッタ
	_setSelectRemoveState : function() {
		this._parent._setSelectRemoveState();
	},
})