var NoteRemoveFocus = enchant.Class.create(MusicSceneSprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		MusicSceneSprite.call(this, path, width, height, x, y, parent);
		this._setTouchEnabled(false);
	},

	// 薄いフォーカス画像セッタ
	_setLightFocusImage : function() {
		var path = MUSIC_REMOVEFOCUS_LIGHT._path;
		this._setImage(path);
	},
	// 濃いフォーカス画像セッタ
	_setDeepFocusImage : function() {
		var path = MUSIC_REMOVEFOCUS_DEEP._path;
		this._setImage(path);
	},
})