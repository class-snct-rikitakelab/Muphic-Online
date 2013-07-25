// 作曲画面の見た目(インタフェース)を統括するクラス
var MusicScreen = enchant.Class.create({
	// コンストラクタ
	initialize : function() {
		// 以下, このクラスのプロパティ
		this._musicMediator		= null;	// 作曲画面全体の仲介を担当するオブジェクト
		this._parent			= null;	// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// 作曲画面全体の仲介を担当するオブジェクトを生成する
	// </summary>
	_createMusicMediator : function() {
		this._musicMediator			= new MusicMediator();
		this._musicMediator._parent	= this;
	},

	// <summary>
	// 物語作成画面への遷移ボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createChangeStoryButton : function() {
		this._musicMediator._changeStoryButton			= new ChangeStoryButton(CHANGE_STORY_BUTTON_WIDTH, CHANGE_STORY_BUTTON_HEIGHT);
		this._musicMediator._changeStoryButton.image	= core.assets[CHANGE_STORY_BUTTON];
		this._musicMediator._changeStoryButton.x		= 20;
		this._musicMediator._changeStoryButton.y		= 30;
		this._musicMediator._changeStoryButton._parent	= this._musicMediator;
		musicScene.addChild(this._musicMediator._changeStoryButton);
	},

	// <summary>
	// 再生ボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createPlayButton : function() {
		this._musicMediator._playButton			= new PlayButton(PLAY_BUTTON_WIDTH, PLAY_BUTTON_HEIGHT);
		this._musicMediator._playButton.image	= core.assets[PLAY_BUTTON];
		this._musicMediator._playButton.x		= 210;
		this._musicMediator._playButton.y		= 20;
		this._musicMediator._playButton._parent	= this._musicMediator;
		musicScene.addChild(this._musicMediator._playButton);
	},

	// <summary>
	// 動物ボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createAnimalButton : function() {
		this._musicMediator._animalButton			= new AnimalButton(ANIMAL_BUTTON_WIDTH, ANIMAL_BUTTON_HEIGHT);
		this._musicMediator._animalButton.image		= core.assets[ANIMAL_BUTTON_OFF];
		this._musicMediator._animalButton.x			= 910;
		this._musicMediator._animalButton.y			= 580;
		this._musicMediator._animalButton._parent	= this._musicMediator;
		musicScene.addChild(this._musicMediator._animalButton);
	},

	// <summary>
	// 削除ボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createModosuButton : function() {
		this._musicMediator._modosuButton			= new ModosuButton(MODOSU_BUTTON_WIDTH, MODOSU_BUTTON_HEIGHT);
		this._musicMediator._modosuButton.image		= core.assets[MODOSU_BUTTON_OFF];
		this._musicMediator._modosuButton.x			= 910;
		this._musicMediator._modosuButton.y			= 680;
		this._musicMediator._modosuButton._parent	= this._musicMediator;
		musicScene.addChild(this._musicMediator._modosuButton);
	},

	// <summary>
	// 音階の家のオブジェクトを生成して画面に表示する
	// </summary>
	_createScaleHouse : function() {
		this._musicMediator._scaleHouse			= new enchant.Sprite(SCALE_HOUSE_WIDTH, SCALE_HOUSE_HEIGHT);
		this._musicMediator._scaleHouse.image	= core.assets[SCALE_HOUSE];
		this._musicMediator._scaleHouse.x		= 16;
		this._musicMediator._scaleHouse.y		= 143;
		musicScene.addChild(this._musicMediator._scaleHouse);
	},

	_createHumen : function() {
		this._musicMediator._humen				= new Humen(HUMEN_WIDTH, HUMEN_HEIGHT);
		this._musicMediator._humen.image		= core.assets[HUMEN];
		this._musicMediator._humen.x			= (APP_WIDTH / 2) - (HUMEN_WIDTH / 2);
		this._musicMediator._humen.y			= 186;
		this._musicMediator._humen._parent		= this._musicMediator;
		musicScene.addChild(this._musicMediator._humen);
	},

	// <summary>
	// 小節を1つ次に進めるボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createMeasureNextButton : function() {
		this._musicMediator._measureNextButton			= new MeasureNextButton(MEASURE_NEXT_BUTTON_WIDTH, MEASURE_NEXT_BUTTON_HEIGHT);
		this._musicMediator._measureNextButton.image	= core.assets[MEASURE_NEXT_BUTTON];
		this._musicMediator._measureNextButton.x		= 860;
		this._musicMediator._measureNextButton.y		= 702;
		this._musicMediator._measureNextButton._parent	= this._musicMediator;
		musicScene.addChild(this._musicMediator._measureNextButton);
	},

	// <summary>
	// 小節を1つ前に戻すボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createMeasurePrevButton : function() {
		this._musicMediator._measurePrevButton			= new MeasurePrevButton(MEASURE_PREV_BUTTON_WIDTH, MEASURE_PREV_BUTTON_HEIGHT);
		this._musicMediator._measurePrevButton.image	= core.assets[MEASURE_PREV_BUTTON];
		this._musicMediator._measurePrevButton.x		= 130;
		this._musicMediator._measurePrevButton.y		= 702;
		this._musicMediator._measurePrevButton._parent	= this._musicMediator;
		musicScene.addChild(this._musicMediator._measurePrevButton);
	},

	// <summary>
	// サインボードのオブジェクトを3つ生成して画面に表示する
	// </summary>
	_createSignboards : function() {
		for(var i = 0; i < 3; i++) {
			this._musicMediator._signboards[i]			= new Signboard(SIGNBOARD_WIDTH, SIGNBOARD_HEIGHT);
			this._musicMediator._signboards[i].image	= core.assets[SIGNBOARD];
			this._musicMediator._signboards[i]._parent	= this._musicMediator;
			musicScene.addChild(this._musicMediator._signboards[i]);
		}
		this._musicMediator._signboards[0].x			= 354;
		this._musicMediator._signboards[0].y			= 255;
		this._musicMediator._signboards[1].x			= 593;
		this._musicMediator._signboards[1].y			= 255;
		this._musicMediator._signboards[2].x			= 832;
		this._musicMediator._signboards[2].y			= 255;
		for(var i = 0; i < 3; i++) {
			this._musicMediator._signboards[i]._setSignboardNumber(i + 1);
			this._musicMediator._signboards[i]._makeSignboardLabel();
		}
	},

	// <summary>
	// 譜面上に動物のオブジェクトを生成して配置し, 画面に表示する
	// </summary>
	_createAnimal : function(animalName, measure, beat, scale, walkSpeed, fadeOutSpeed, isSample) {
		// 動物の画像データを取得
		var animalImage		= animalsData[animalName].image;
		// 動物の画像の横幅を取得
		var animalWidth		= animalsData[animalName].width;
		// 動物の画像の縦幅を取得
		var animalHeight	= animalsData[animalName].height;
		// クリックした拍の場所からx座標値を取得
		var x				= beatToX[beat];
		// クリックした音階の場所からy座標値を取得
		var y				= scaleToY[scale];

		var index = this._musicMediator._getAnimalsCount();

		this._musicMediator._animals[index]			= new Animal(animalWidth, animalHeight);
		this._musicMediator._animals[index].image 	= core.assets[animalImage];
		// 動物の画像のx座標値を計算
		this._musicMediator._animals[index].x		= x + 240 * (measure - this._musicMediator._getNowPlace());
		// y座標値は別に計算とかしなくてOK
		this._musicMediator._animals[index].y		= y;
		this._musicMediator._animals[index]._parent	= this._musicMediator;

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

	// <summary>
	// 譜面上の論理的なデータ群を表すオブジェクトを生成
	// </summary>
	_createScoreData : function(measureMax, nowPlace) {
		this._musicMediator._scoreData			= new ScoreData(measureMax, nowPlace);
		this._musicMediator._scoreData._parent	= this._musicMediator;
	},
})