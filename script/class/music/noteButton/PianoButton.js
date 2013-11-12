var PianoButton = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
		this._state = new NonPushPianoState(this);
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
			this.image = core.assets[MUSIC_PIANOBUTTON_ON._path];
		} else {
			this.image = core.assets[MUSIC_PIANOBUTTON_OFF._path];
		}
	},
	// 押下, 非押下時の画像切り替え
	_setPushImage : function(state) {
		if(state === "push") {
			this.image = core.assets[MUSIC_PIANOBUTTON_PUSH._path];
		} else {
			this.image = core.assets[MUSIC_PIANOBUTTON_OFF._path];
		}
	},

	// クリック時の処理
	ontouchend : function() {
		var removeButton = this._parent._getRemoveButton();
		this._state._touchEndBehavior(removeButton);
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
	// ピアノ選択ステートセッタ
	_setSelectPianoState : function() {
		this._parent._setSelectPianoState();
	},
})