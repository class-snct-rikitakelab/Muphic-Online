var PianoButton = enchant.Class.create(MusicSceneSpriteHasState, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSpriteHasState.call(this, path, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._isPush = false; // ボタンが押されているかどうか
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
	//　ボタンが押せない（暗い）状態の色に変更する
	_setDarkImage : function(isDark) {
		if(isDark === true) {
			this.image = core.assets[MUSIC_PIANOBUTTON_DARK._path];
		} else if(isDark === false) {
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

	// ゲッタ
	_getIsPush : function() {
		return this._isPush;
	},
	// セッタ
	_setIsPush : function(isPush) {
		this._isPush = isPush;
	},

	// 親メソッド
	// 選択なしステートセッタ
	_setNonSelectState : function() {
		this._parent._setNonSelectHumenState();
	},
	// ピアノ選択ステートセッタ
	_setSelectPianoState : function() {
		this._parent._setSelectPianoHumenState();
	},
})