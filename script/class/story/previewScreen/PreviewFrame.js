var PreviewFrame = new enchant.Class.create({
	initialize : function(parent) {
		this._leftFrame = null;
		this._rightFrame = null;
		this._topFrame = null;
		this._bottomFrame = null;
		this._parent = parent;
	},

	// 左側フレームの画像を生成
	_createLeftFrame : function() {
		var path = STORY_LEFT_PREVIEWFRAME._path;
		var width = STORY_LEFT_PREVIEWFRAME._width;
		var height = STORY_LEFT_PREVIEWFRAME._height;
		var x = (APP_WIDTH - 690) / 2;
		var y = 200;
		this._leftFrame = new enchant.Sprite(width, height);
		this._leftFrame.image = core.assets[path];
		this._leftFrame.x = x;
		this._leftFrame.y = y;
	},
	// 右側フレームの画像を生成
	_createRightFrame : function() {
		var path = STORY_RIGHT_PREVIEWFRAME._path;
		var width = STORY_RIGHT_PREVIEWFRAME._width;
		var height = STORY_RIGHT_PREVIEWFRAME._height;
		var x = ((APP_WIDTH - 690) / 2) + 674;
		var y = 200;
		this._rightFrame = new enchant.Sprite(width, height);
		this._rightFrame.image = core.assets[path];
		this._rightFrame.x = x;
		this._rightFrame.y = y;
	},
	// 上側フレームの画像を生成
	_createTopFrame : function() {
		var path = STORY_TOP_PREVIEWFRAME._path;
		var width = STORY_TOP_PREVIEWFRAME._width;
		var height = STORY_TOP_PREVIEWFRAME._height;
		var x = ((APP_WIDTH - 690) / 2) + 16;
		var y = 200;
		this._topFrame = new enchant.Sprite(width, height);
		this._topFrame.image = core.assets[path];
		this._topFrame.x = x;
		this._topFrame.y = y;
	},
	// 下側フレームの画像を生成
	_createBottomFrame : function() {
		var path = STORY_BOTTOM_PREVIEWFRAME._path;
		var width = STORY_BOTTOM_PREVIEWFRAME._width;
		var height = STORY_BOTTOM_PREVIEWFRAME._height;
		var x = ((APP_WIDTH - 690) / 2) + 16;
		var y = 200 + 444;
		this._bottomFrame = new enchant.Sprite(width, height);
		this._bottomFrame.image = core.assets[path];
		this._bottomFrame.x = x;
		this._bottomFrame.y = y;
	},

	// フレーム全体を物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this._leftFrame);
		storyScene.addChild(this._rightFrame);
		storyScene.addChild(this._topFrame);
		storyScene.addChild(this._bottomFrame);
	},
	// フレーム全体を物語作成画面から削除する
	_removeFromStoryScene : function() {
		storyScene.removeChild(this._leftFrame);
		storyScene.removeChild(this._rightFrame);
		storyScene.removeChild(this._topFrame);
		storyScene.removeChild(this._bottomFrame);
	},
})