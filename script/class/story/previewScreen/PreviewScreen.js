var PreviewScreen = enchant.Class.create({
	initialize : function(parent) {
		this._frame = null;
		this._background = null;
		this._weather = null;
		this._illust = new Array();
		this._selectedIllust = null;
		this._parent = parent;
	},
	// プレビュー画面のフレームを生成
	_createFrame : function() {
		this._frame = new PreviewFrame(this);
		this._frame._createLeftFrame();
		this._frame._createRightFrame();
		this._frame._createTopFrame();
		this._frame._createBottomFrame();
	},
	// プレビュー画面の背景を生成
	_createBackground : function() {
		var path = STORY_PREVIEWBACKGROUND_EMPTY._path;
		var width = STORY_PREVIEWBACKGROUND_EMPTY._width;
		var height = STORY_PREVIEWBACKGROUND_EMPTY._height;
		var x = (APP_WIDTH - 690) / 2;
		var y = 200;
		this._background = new PreviewBackground(path, width, height, x, y, this);
	},
	// プレビュー画面の天気を生成
	_createWeather : function() {
		var path = STORY_PREVIEWWEATHER_EMPTY._path;
		var width = STORY_PREVIEWWEATHER_EMPTY._width;
		var height = STORY_PREVIEWWEATHER_EMPTY._height;
		var x = (APP_WIDTH - 690) / 2;
		var y = 200;
		this._weather = new PreviewWeather(path, width, height, x, y, this);
	},
	// プレビュー画面に配置するイラストを生成
	_createIllust : function(type, pose, face, x, y) {
		var path, width, height;
		switch(pose) {
			case "back":
				path = previewObject[type][pose]._path;
				width = previewObject[type][pose]._width;
				height = previewObject[type][pose]._height;
				break;
			default:
				path = previewObject[type][pose][face]._path;
				width = previewObject[type][pose][face]._width;
				height = previewObject[type][pose][face]._height;
				break;
		}
		var newIllust = new PreviewIllust(path, width, height, x, y, type, face, pose, this);
		this._illust.push(newIllust);
	},

	// フレームを表示
	_addFrame : function() {
		this._frame._addToStoryScene();
	},
	// 背景を表示
	_addBackground : function() {
		this._background._addToStoryScene();
	},
	// 天気を表示
	_addWeather : function() {
		this._weather._addToStoryScene();
	},
	// イラストを表示
	_addIllust : function() {
		for(var i = 0; i < this._illust.length; i++) {
			this._illust[i]._addToStoryScene();
		}
	},
	// プレビュー画面全体を表示
	_addToStoryScene : function() {
		this._addWeather();
		this._addBackground();
		this._addIllust();
		this._addFrame();
	},

	// 背景画像をセット
	_setBackgroundImage : function(path) {
		this._background._setBackgroundImage(path);
	},
	// 天気画像をセット
	_setWeatherImage : function(path) {
		this._weather._setWeatherImage(path);
	},

	// 選択された半透明画像のオブジェクトを生成
	_createSelectedIllust: function(path, width, height, x, y) {
		this._selectedIllust = new SelectedImage(path, width, height, x, y, this);
	},
	// 選択された半透明画像を物語作成画面へ加える
	_addSelectedIllustToStoryScene : function() {
		storyScene.addChild(this._selectedIllust);
	},
	// 選択された半透明画像を物語作成画面から削除する
	_removeSelectedIllustFromStoryScene : function() {
		storyScene.removeChild(this._selectedIllust);
	},
	// 選択された半透明画像のx座標をセット
	_setSelectedIllustX : function(x) {
		this._selectedIllust.x = x;
	},
	// 選択された半透明画像のy座標をセット
	_setSelectedIllustY : function(y) {
		this._selectedIllust.y = y;
	},
})