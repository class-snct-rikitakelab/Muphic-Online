var StorySceneSprite = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(path, width, height, x, y, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[path];
		this.x = x;
		this.y = y;
		this._parent = parent;
	},

	// enchant.Spriteクラスのプロパティセッタ
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
})