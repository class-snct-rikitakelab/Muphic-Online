var PreviewScreen = enchant.Class.create({
	initialize : function(parent) {
		this._frame = null;
		this._background = null;
		this._weather = null;
		this._illust = new Array();
		this._selectedIllust = null;
		this._haveSelectedIllust = false;
		this._removeButton = null;
		this._parent = parent;
	},
	// プレビュー画面のフレームを生成
	_createFrame : function() {
		var path = STORY_PREVIEWFRAME._path;
		var width = STORY_PREVIEWFRAME._width;
		var height = STORY_PREVIEWFRAME._height;
		var x = (APP_WIDTH - STORY_PREVIEWFRAME._width) / 2;
		var y = 200;
		this._frame = new PreviewFrame(path, width, height, x, y, this);
	},
	// プレビュー画面の背景を生成
	_createBackground : function() {
		var path = STORY_PREVIEWBACKGROUND_EMPTY._path;
		var width = STORY_PREVIEWBACKGROUND_EMPTY._width;
		var height = STORY_PREVIEWBACKGROUND_EMPTY._height;
		var x = (APP_WIDTH - STORY_PREVIEWFRAME._width) / 2;
		var y = 200;
		this._background = new PreviewBackground(path, width, height, x, y, this);
	},
	// プレビュー画面の天気を生成
	_createWeather : function() {
		var path = STORY_PREVIEWWEATHER_EMPTY._path;
		var width = STORY_PREVIEWWEATHER_EMPTY._width;
		var height = STORY_PREVIEWWEATHER_EMPTY._height;
		var x = (APP_WIDTH - STORY_PREVIEWFRAME._width) / 2;
		var y = 200;
		this._weather = new PreviewWeather(path, width, height, x, y, this);
	},
	// プレビュー画面に配置するイラストを生成
	_createIllust : function(imagePath, focusPath, width, height, x, y) {
		var arrayIndex = this._illust.length;
		var zIndexMax = -1;
		for(var i = 0; i < this._illust.length; i++) {
			if(this._isMouseover(x, y, width, height, this._illust[i].x, this._illust[i].y, this._illust[i].width, this._illust[i].height) === true) {
				if(zIndexMax < this._illust[i]._zIndex)
				zIndexMax = this._illust[i]._zIndex;
			}
		}
		var zIndex = zIndexMax + 1;
		var newIllust = new PreviewIllust(imagePath, focusPath, width, height, x, y, arrayIndex, zIndex, this);
		this._illust.push(newIllust);
	},
	// プレビュー画面に配置するイラストの破棄
	_destroyIllust : function(index) {
		for(var i = index + 1; i < this._illust.length; i++) {
			this._illust[i]._setArrayIndex(i - 1);
		}
		this._illust.splice(index, 1);
	},
	// プレビュー画面に配置する全イラストの破棄
	_destroyAllIllust : function() {
		for(var i = 0; i < this._illust.length; i++) {
			this._illust[i]._removeFromStoryScene();
		}
		this._illust = new Array();
	},
	// 「けす」ボタンを生成
	_createRemoveButton : function() {
		var path = STORY_REMOVEBUTTON_OFF._path;
		var width = STORY_REMOVEBUTTON_OFF._width;
		var height = STORY_REMOVEBUTTON_OFF._height;
		var x = 885;
		var y = 200;
		this._removeButton = new StoryRemoveButton(path, width, height, x, y, this);
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
	// イラスト全てを表示
	_addAllIllust : function() {
		for(var i = 0; i < this._illust.length; i++) {
			this._illust[i]._addToStoryScene();
		}
	},
	// イラスト1枚を表示
	_addOneIllust : function(index) {
		this._illust[index]._addToStoryScene();
	},
	// 「けす」ボタンを表示
	_addRemoveButton : function() {
		this._removeButton._addToStoryScene();
	},
	// プレビュー画面全体を表示
	_addPreviewScreen : function() {
		this._addWeather();
		this._addBackground();
		this._addFrame();
		this._addAllIllust();
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
	_createSelectedIllust : function(imagePath, focusPath, width, height) {
		var x = clientX;
		var y = clientY;
		this._selectedIllust = new SelectedImage(imagePath, focusPath, width, height, x, y, this);
	},
	// 選択された半透明画像のオブジェクトを破棄
	_destroySelectedIllust : function() {
		this._selectedIllust = null;
	},
	// 選択された半透明画像を物語作成画面へ加える
	_addSelectedIllustToStoryScene : function() {
		this._selectedIllust._addToStoryScene();
	},
	// 選択された半透明画像を物語作成画面から削除する
	_removeSelectedIllustFromStoryScene : function() {
		this._selectedIllust._removeFromStoryScene();
	},
	// 選択された半透明画像のx座標をセット
	_setSelectedIllustX : function(x) {
		this._selectedIllust.x = x;
	},
	// 選択された半透明画像のy座標をセット
	_setSelectedIllustY : function(y) {
		this._selectedIllust.y = y;
	},

	// プレビュー画面の中に半透明イラストがあるかを示すフラグをゲット
	_getHaveSelectedIllust : function() {
		return this._haveSelectedIllust;
	},
	// プレビュー画面の中に半透明イラストがあるかを示すフラグをセット
	_setHaveSelectedIllust : function(haveSelectedIllust) {
		this._haveSelectedIllust = haveSelectedIllust;
	},

	// 重なり判定
	_isMouseover : function(tX, tY, tWidth, tHeight, bX, bY, bWidth, bHeight) {
		var isMouseover = false;
		var crossPoint = 0;
		for(var count = 0; count < 2; count++) {
			for(var x = tX; x <= tX + tWidth; x += 0.5) {
				if(x === bX || x === bX + bWidth) {
					for(var y = bY; y <= bY + bHeight; y += 0.5) {
						if(y === tY || y === tY + tHeight) {
							crossPoint++;
						}
					}
				}
			}
		}
		for(var count = 0; count < 2; count++) {
			for(var y = tY; y <= tY + tHeight; y += 0.5) {
				if(y === bY || y === bY + bHeight) {
					for(var x = bX; x <= bX + bWidth; x += 0.5) {
						if(x === tX || x === tX + tWidth) {
							crossPoint++;
						}
					}
				}
			}
		}
		if(crossPoint >= 2) {
			isMouseover = true;
		} else if(crossPoint === 0) {
			if(tX > bX && tX + tWidth < bX + bWidth) {
				if(tY > bY && tY + tHeight < bY + bHeight) {
					isMouseover = true;
				}
			}
			if(bX > tX && bX + bWidth < tX + tWidth) {
				if(bY > tY && bY + bHeight < tY + tHeight) {
					isMouseover = true;
				}
			}
		}
		return isMouseover;
	},

	// 作曲画面への遷移ボタンを押せる状態に
	_setCanPushMusicButton : function() {
		this._parent._setCanPushMusicButton();
	},
	// 作曲画面への遷移ボタンを押せない状態に
	_setCannotPushMusicButton : function() {
		this._parent._setCannotPushMusicButton();
	},
	// 保存ボタンを押せる状態に
	_setCanPushSaveButton : function() {
		this._parent._setCanPushSaveButton();
	},
	// 保存ボタンを押せない状態に
	_setCannotPushSaveButton : function() {
		this._parent._setCannotPushSaveButton();
	},
	// 読み込みボタンを押せる状態に
	_setCanPushLoadButton : function() {
		this._parent._setCanPushLoadButton();
	},
	// 読み込みボタンを押せない状態に
	_setCannotPushLoadButton : function() {
		this._parent._setCannotPushLoadButton();
	},
	// イラストボタン全体を押せる状態に
	_setCanPushAllIllustButton : function() {
		this._parent._setCanPushAllIllustButton();
	},
	// イラストボタン全体を押せない状態に
	_setCannotPushAllIllustButton : function() {
		this._parent._setCannotPushAllIllustButton();
	},
	// 削除ボタンを押せる状態に
	_setCanPushRemoveButton : function() {
		this._removeButton._setTouchEnabled(true);
		this._removeButton._setDarkImage(false);
	},
	// 削除ボタンを押せない状態に
	_setCannotPushRemoveButton : function() {
		this._removeButton._setTouchEnabled(false);
		this._removeButton._setDarkImage(true);
	},
})