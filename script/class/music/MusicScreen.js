var MusicScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function() {
		// 以下, このクラスのプロパティ
		this._screenBackground = null;
		this._storyButton = null;
		this._humen = null;
		this._parent = null;
	},

	// 画面全体の背景のオブジェクトを生成
	_createScreenBackground : function() {
		var path = MUSIC_BACKGROUND._path;
		var width = MUSIC_BACKGROUND._width;
		var height = MUSIC_BACKGROUND._height;
		var x = 0;
		var y = 0;
		this._screenBackground = new MusicScreenBackground(path, width, height, x, y, this);
		this._screenBackground._addToMusicScene();
	},
	// 物語作成画面への遷移ボタンのオブジェクトを生成
	_createStoryButton : function() {
		var path = MUSIC_CHANGESTORYBUTTON_OFF._path;
		var width = MUSIC_CHANGESTORYBUTTON_OFF._width;
		var height = MUSIC_CHANGESTORYBUTTON_OFF._height;
		var x = 20;
		var y = 30;
		this._storyButton = new StoryButton(path, width, height, x, y, parent);
		this._storyButton._addToMusicScene();
	},
	// 譜面のオブジェクトを生成
	_createHumen : function() {
		var path = MUSIC_HUMEN._path;
		var width = MUSIC_HUMEN._width;
		var height = MUSIC_HUMEN._height;
		var x = (APP_WIDTH - width) / 2;
		var y = 186;
		this._humen = new Humen(path, width, height, x, y, parent);
		this._humen._addToMusicScene();
	},
	// 小節操作オブジェクトを生成
	_createMeasureController : function() {
		this._humen._createMeasureController();
	},

	/*
	// 再生ボタンのオブジェクトを生成して画面に表示する
	_createPlayButton : function() {
		var path = MUSIC_PLAYBUTTON_OFF._path;
		var width = MUSIC_PLAYBUTTON_OFF._width;
		var height = MUSIC_PLAYBUTTON_OFF._height;

		this._musicMediator._playButton = new PlayButton(width, height);
		this._musicMediator._playButton.image = core.assets[path];
		this._musicMediator._playButton.x = 210;
		this._musicMediator._playButton.y = 20;
		this._musicMediator._playButton._parent = this._musicMediator;
		musicScene.addChild(this._musicMediator._playButton);
	},

	// 動物ボタンのオブジェクトを生成して画面に表示する
	_createAnimalButton : function() {
		var path = MUSIC_PIANOCAT_OFF._path;
		var width = MUSIC_PIANOCAT_OFF._width;
		var height = MUSIC_PIANOCAT_OFF._height;

		this._musicMediator._animalButton = new AnimalButton(width, height);
		this._musicMediator._animalButton.image = core.assets[path];
		this._musicMediator._animalButton.x = 910;
		this._musicMediator._animalButton.y = 286;
		this._musicMediator._animalButton._parent = this._musicMediator;
		musicScene.addChild(this._musicMediator._animalButton);
	},

	// 削除ボタンのオブジェクトを生成して画面に表示する
	_createModosuButton : function() {
		var path = MUSIC_REMOVEANIMAL_OFF._path;
		var width = MUSIC_REMOVEANIMAL_OFF._width;
		var height = MUSIC_REMOVEANIMAL_OFF._height;

		this._musicMediator._modosuButton = new ModosuButton(width, height);
		this._musicMediator._modosuButton.image = core.assets[path];
		this._musicMediator._modosuButton.x = 910;
		this._musicMediator._modosuButton.y = 376;
		this._musicMediator._modosuButton._parent = this._musicMediator;
		musicScene.addChild(this._musicMediator._modosuButton);
	},

	// 音階の家のオブジェクトを生成して画面に表示する
	_createScaleHouse : function() {
		var path = MUSIC_SCALEHOUSE._path;
		var width = MUSIC_SCALEHOUSE._width;
		var height = MUSIC_SCALEHOUSE._height;

		this._musicMediator._scaleHouse = new enchant.Sprite(width, height);
		this._musicMediator._scaleHouse.image = core.assets[path];
		this._musicMediator._scaleHouse.x = 16;
		this._musicMediator._scaleHouse.y = 143;
		musicScene.addChild(this._musicMediator._scaleHouse);
	},
	*/

	// サインボードのオブジェクトを3つ生成して画面に表示する
	_createSignboards : function() {
		var path = MUSIC_SIGNBOARD._path;
		var width = MUSIC_SIGNBOARD._width;
		var height = MUSIC_SIGNBOARD._height;

		for(var i = 0; i < 3; i++) {
			this._musicMediator._signboards[i] = new Signboard(width, height);
			this._musicMediator._signboards[i].image = core.assets[path];
			this._musicMediator._signboards[i]._parent = this._musicMediator;
			musicScene.addChild(this._musicMediator._signboards[i]);
		}
		this._musicMediator._signboards[0].x = 354;
		this._musicMediator._signboards[0].y = 255;
		this._musicMediator._signboards[1].x = 593;
		this._musicMediator._signboards[1].y = 255;
		this._musicMediator._signboards[2].x = 832;
		this._musicMediator._signboards[2].y = 255;
		for(var i = 0; i < 3; i++) {
			this._musicMediator._signboards[i]._setSignboardNumber(i + 1);
			this._musicMediator._signboards[i]._makeSignboardLabel();
		}
	},

	// 譜面上に動物のオブジェクトを生成して配置し, 画面に表示する
	_createAnimal : function(animalName, measure, beat, scale, walkSpeed, fadeOutSpeed, isSample) {
		// 動物の画像データを取得
		var path = MUSIC_ANIMAL[animalName]._path;
		// 動物の画像の横幅を取得
		var width = MUSIC_ANIMAL[animalName]._width;
		// 動物の画像の縦幅を取得
		var height = MUSIC_ANIMAL[animalName]._height;
		// クリックした拍の場所からx座標値を取得
		var x = beatToX[beat];
		// クリックした音階の場所からy座標値を取得
		var y = scaleToY[scale];

		var index = this._musicMediator._getAnimalsCount();

		this._musicMediator._animals[index] = new Animal(width, height);
		this._musicMediator._animals[index].image = core.assets[path];
		// 動物の画像のx座標値を計算
		this._musicMediator._animals[index].x = x + 240 * (measure - this._musicMediator._getNowPlace());
		// y座標値は別に計算とかしなくてOK
		this._musicMediator._animals[index].y = y;
		this._musicMediator._animals[index]._parent = this._musicMediator;

		// 動物のカウント数をそのまま動物オブジェクトのインデックスとして登録
		this._musicMediator._setAnimalIndex(index);
		// _baseXプロパティにはxの値をそのまま入れる
		this._musicMediator._setAnimalBaseX(index, x);
		// _baseYプロパティにはyの値をそのまま入れる
		this._musicMediator._setAnimalBaseY(index, y);
		// _relativeXプロパティには現在表示されている小節などから計算したx座標値を入れる
		var relativeX = x + 240 * (measure - this._musicMediator._getNowPlace());
		this._musicMediator._setAnimalRelativeX(index, relativeX);
		// _relativeYプロパティにはyの値をそのまま入れる
		this._musicMediator._setAnimalRelativeY(index, y);
		// _absoluteXプロパティには指定された小節を用いて計算したx座標値を入れる
		var absoluteX = x + 240 * (measure - 1);
		this._musicMediator._setAnimalAbsoluteX(index, absoluteX);
		// _absoluteYプロパティにはyの値をそのまま入れる
		this._musicMediator._setAnimalAbsoluteY(index, y);
		// _walkSpeedプロパティに歩く速度を入れる
		this._musicMediator._setAnimalWalkSpeed(index, walkSpeed);
		// _fadeOutSpeedプロパティに消える速度を入れる
		this._musicMediator._setAnimalFadeOutSpeed(index, fadeOutSpeed);

		// 音階から音声データを取得
		var soundSource = scaleToSound[scale];
		// 動物や音声などのデータをまとめて音符オブジェクトに保持させる
		this._musicMediator._addNote(index, soundSource, measure, beat, scale);
		// 動物に声(音声)を与える
		this._musicMediator._animals[index]._takeVoice();

		// 画面上に動物を表示させる
		musicScene.addChild(this._musicMediator._animals[index]);

		// プリセットデータとして打ち込まれた動物の場合は譜面に置かれたときに音声を再生しない
		if(isSample === false) {
			this._musicMediator._animals[index]._sing();
		}

		this._musicMediator._compareAbsoluteMax(index);

		// 動物の数をインクリメント
		this._musicMediator._animalsCountIncrement();
	},

	// 譜面上の論理的なデータ群を表すオブジェクトを生成
	_createScoreData : function(measureMax, nowPlace) {
		this._musicMediator._scoreData = new ScoreData(measureMax, nowPlace);
		this._musicMediator._scoreData._parent = this._musicMediator;
	},
})