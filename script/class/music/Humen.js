// 譜面を表すクラス
// (enchant.Spriteクラスを継承)
var Humen = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);

		// 以下, このクラスのプロパティ
		this._playButton		= null;			// 再生ボタンのオブジェクト
		this._signboards		= new Array(3);	// サインボードのオブジェクト(3つ)
		this._scaleHouse		= null;			// 音階の家のオブジェクト
		this._measureNextButton	= null;			// 小節を1つ次に進めるボタンのオブジェクト
		this._measurePrevButton	= null;			// 小節を1つ前に戻すボタンのオブジェクト
		this._animals			= new Array();	// 譜面上に置かれる動物のオブジェクト(複数)
		this._animalsCount		= 0;			// 譜面上に置かれている動物の数
		this._score				= null;			// 譜面上の論理的なデータ群を表すオブジェクト
		this._parent			= null;			// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// 再生ボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createPlayButton : function() {
		this._playButton			= new PlayButton(PLAY_BUTTON_WIDTH, PLAY_BUTTON_HEIGHT);

		this._playButton.image		= core.assets[PLAY_BUTTON];
		this._playButton.x			= 210;
		this._playButton.y			= 20;
		this._playButton._parent	= this;

		musicScene.addChild(this._playButton);
	},

	// <summary>
	// サインボードのオブジェクトを3つ生成して画面に表示する
	// </summary>
	_createSignboards : function() {
		for(var i = 0; i < this._signboards.length; i++) {
			this._signboards[i]			= new Signboard(SIGNBOARD_WIDTH, SIGNBOARD_HEIGHT);
			this._signboards[i].image	= core.assets[SIGNBOARD];
			this._signboards[i]._parent	= this;
			musicScene.addChild(this._signboards[i]);
		}
		this._signboards[0].x			= 354;
		this._signboards[0].y			= 255;
		this._signboards[1].x			= 593;
		this._signboards[1].y			= 255;
		this._signboards[2].x			= 832;
		this._signboards[2].y			= 255;
		for(var i = 0; i < this._signboards.length; i++) {
			this._signboards[i]._setSignboardNumber(i + 1);
			this._signboards[i]._makeSignboardLabel();
		}
	},

	// <summary>
	// 音階の家のオブジェクトを生成して画面に表示する
	// </summary>
	_createScaleHouse : function() {
		this._scaleHouse			= new enchant.Sprite(SCALE_HOUSE_WIDTH, SCALE_HOUSE_HEIGHT);

		this._scaleHouse.image		= core.assets[SCALE_HOUSE];
		this._scaleHouse.x			= 16;
		this._scaleHouse.y			= 143;
		this._scaleHouse._parent	= this;

		musicScene.addChild(this._scaleHouse);
	},

	// <summary>
	// 小節を1つ次に進めるボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createMeasureNextButton : function() {
		this._measureNextButton			= new MeasureNextButton(MEASURE_NEXT_BUTTON_WIDTH, MEASURE_NEXT_BUTTON_HEIGHT);

		this._measureNextButton.image	= core.assets[MEASURE_NEXT_BUTTON];
		this._measureNextButton.x		= 860;
		this._measureNextButton.y		= 702;
		this._measureNextButton._parent	= this;

		musicScene.addChild(this._measureNextButton);
	},

	// <summary>
	// 小節を1つ前に戻すボタンのオブジェクトを生成して画面に表示する
	// </summary>
	_createMeasurePrevButton : function() {
		this._measurePrevButton			= new MeasurePrevButton(MEASURE_PREV_BUTTON_WIDTH, MEASURE_PREV_BUTTON_HEIGHT);

		this._measurePrevButton.image	= core.assets[MEASURE_PREV_BUTTON];
		this._measurePrevButton.x		= 130;
		this._measurePrevButton.y		= 702;
		this._measurePrevButton._parent	= this;

		musicScene.addChild(this._measurePrevButton);
	},

	// <summary>
	// 譜面上に動物のオブジェクトを生成して配置し, 画面に表示する
	// </summary>
	_createAnimal : function(animalName, measure, beat, scale, walkSpeed, fadeOutSpeed, isSample) {
		// 動物の画像データを取得
		var animalImage		= animalsData[animalName];
		// 動物の画像の横幅を取得
		var animalWidth		= animalsData[animalName + "Width"];
		// 動物の画像の縦幅を取得
		var animalHeight	= animalsData[animalName + "Height"];
		// クリックした拍の場所からx座標値を取得
		var x				= beatToX[beat];
		// クリックした音階の場所からy座標値を取得
		var y				= scaleToY[scale];

		this._animals[this._animalsCount]				= new Animal(animalWidth, animalHeight);
		this._animals[this._animalsCount].image 		= core.assets[animalImage];
		// 動物の画像のx座標値を計算
		this._animals[this._animalsCount].x				= x + 240 * (measure - this._score._nowPlace);
		// y座標値は別に計算とかしなくてOK
		this._animals[this._animalsCount].y				= y;
		this._animals[this._animalsCount]._parent		= this;

		// 音階から音声データを取得
		var soundSource = scaleToSound[scale];
		// 動物や音声などのデータをまとめて音符オブジェクトに保持させる
		this._score._setNote(this._animalsCount, soundSource, measure, beat, scale);

		// 動物のカウント数をそのまま動物オブジェクトのインデックスとして登録
		this._animals[this._animalsCount]._index		= this._animalsCount;
		// _baseXプロパティにはxの値をそのまま入れる
		this._animals[this._animalsCount]._baseX		= x;
		// _baseYプロパティにはyの値をそのまま入れる
		this._animals[this._animalsCount]._baseY		= y;
		// _relativeXプロパティには現在表示されている小節などから計算したx座標値を入れる
		this._animals[this._animalsCount]._relativeX	= x + 240 * (measure - this._score._nowPlace);
		// _relativeYプロパティにはyの値をそのまま入れる
		this._animals[this._animalsCount]._relativeY	= y;
		// _absoluteXプロパティには指定された小節を用いて計算したx座標値を入れる
		this._animals[this._animalsCount]._absoluteX	= x + 240 * (measure - 1);
		// _absoluteYプロパティにはyの値をそのまま入れる
		this._animals[this._animalsCount]._absoluteY	= y;
		// _walkSpeedプロパティに歩く速度を入れる
		this._animals[this._animalsCount]._walkSpeed	= walkSpeed;
		// _fadeOutSpeedプロパティに消える速度を入れる
		this._animals[this._animalsCount]._fadeOutSpeed	= fadeOutSpeed;

		// 画面上に動物を表示させる
		musicScene.addChild(this._animals[this._animalsCount]);

		// プリセットデータとして打ち込まれた動物の場合は譜面に置かれたときに音声を再生しない
		if(isSample === false) {
			this._score._notes[this._animalsCount]._playSound();
		}

		// _absoluteXプロパティと_absoluteYプロパティの値から動物が譜面上において最後に位置しているかどうかを調べる
		if(this._animals[this._animalsCount]._absoluteX >= this._score._absoluteXMax) {
			// x座標の最大値更新
			this._score._absoluteXMax = this._animals[this._animalsCount]._absoluteX;
			// 最後の動物のインデックスを示すプロパティを更新
			this._score._lastNoteIndex = this._animalsCount;
			if(this._animals[this._animalsCount]._absoluteY >= this._score._absoluteYMax) {
				// y座標の最大値更新
				this._score._absoluteYMax = this._animals[this._animalsCount]._absoluteY;
				// 最後の動物のインデックスを示すプロパティを更新
				this._score._lastNoteIndex = this._animalsCount;
			}
		}

		// 動物の数をインクリメント
		this._animalsCount++;
	},

	// <summary>
	// 譜面上の論理的なデータ群を表すオブジェクトを生成
	// </summary>
	_createScore : function(measureMax, nowPlace) {
		this._score			= new Score(measureMax, nowPlace);
		this._score._parent	= this;
	},

	// <summary>
	// 譜面上が押された際の処理
	// </summary>
	ontouchend : function(event) {
		if(this._parent._animalButton._state === "not put") {
			// 動物が置ける状態でないならばreturnで終わり
			return;
		} else if(this._parent._animalButton._state === "put") {
			// 動物が置ける状態ならばクリックしたx座標値とy座標値を調べてもらう
			this._score._checkClickPoint(event.x, event.y);
		}
	},
})