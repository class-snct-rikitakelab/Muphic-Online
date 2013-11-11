var MusicSceneSprite = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._parent = parent;
	},

	// enchant.Spriteクラスのプロパティセッタ
	// x座標をセット
	_setX : function(x) {
		this.x = x;
	},
	// y座標をセット
	_setY : function(y) {
		this.y = y;
	},
	// touchEnabledプロパティにブーリアン値をセットする
	_setTouchEnabled : function(touchEnabled) {
		this.touchEnabled = touchEnabled;
	},
	// opacityプロパティのブーリアン値をセットする
	_setOpacity : function(opacity) {
		this.opacity = opacity;
	},

	// 作曲画面へ加える
	_addToMusicScene : function() {
		musicScene.addChild(this);
	},
	// 作曲画面から削除する
	_removeFromMusicScene : function() {
		musicScene.removeChild(this);
	},
})