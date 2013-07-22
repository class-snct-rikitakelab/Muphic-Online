// 曲の速さ
TEMPO_SPEED		= 10;
// 動物が消える速さ(0.0 ~ 1.0)
FADE_OUT_SPEED	= 0.1;

// 譜面上の論理的なデータ群を表すクラス
var ScoreData = enchant.Class.create({
	initialize : function(measureMax, nowPlace) {
		this._notes			= new Array();	// 音符情報のオブジェクト(複数)
		this._measureMax	= measureMax;	// 曲の小節数の最大値
		this._nowPlace		= nowPlace;		// 現在の譜面上で最も左側に表示されている小節の値
		this._prevPlace		= nowPlace;		// 1つ前に表示されていた譜面上で最も左側に表示されていた小節の値
		this._isPlay		= false;		// 現在曲が再生状態かどうかを表すフラグ
		this._isRemove		= false;
		this._absoluteXMax	= 0;			// 現在の譜面上において最大であるx座標の絶対的な値
		this._absoluteYMax	= 0;			// 現在の譜面上において最大であるy座標の絶対的な値
		this._lastNoteIndex	= 0;			// 現在の譜面上において最後に配置されている音符の番号
		this._animalsCount	= 0;			// 譜面上に置かれている動物の数
		this._parent		= null;			// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// 音符情報オブジェクトを生成・追加してプロパティを指定
	// </summary>
	_addNote : function(index, soundSource, measure, beat, scale) {
		this._notes[index]				= new Note();
		this._notes[index]._index		= index;
		this._notes[index]._soundSource	= soundSource;
		this._notes[index]._measure		= measure;
		this._notes[index]._beat		= beat;
		this._notes[index]._scale		= scale;
		this._notes[index]._parent		= this;
	},

	_removeNote : function(index) {
		// 画面上から動物を削除
		musicScene.removeChild(this._parent._animals[index]);
		for(var i = 0, max = this._notes.length; i < max; i++) {
			if(i > index) {
				this._parent._animalIndexDecrement(i);
				this._parent._noteIndexDecrement(i);
			}
		}
		// 削除された分だけ動物の配列を詰める
		this._parent._animalsArraySplice(index);
		// 削除された分だけ音符の配列を詰める
		this._parent._notesArraySplice(index);
		this._parent._animalsCountDecrement();
		this._absoluteXMax = 0;
		this._absoluteYMax = 0;
		for(var i = 0, max = this._notes.length; i < max; i++) {
			this._compareAbsoluteMax(i);
		}
	},

	_compareAbsoluteMax : function(index) {
		var animalAbsoluteX	= this._parent._getAnimalAbsoluteX(index);
		var animalAbsoluteY	= this._parent._getAnimalAbsoluteY(index);

		if(animalAbsoluteX >= this._absoluteXMax) {
			this._absoluteXMax	= animalAbsoluteX;
			this._lastNoteIndex	= index;
			if(animalAbsoluteY >= this._absoluteYMax) {
				this._absoluteYMax	= animalAbsoluteY;
				this._lastNoteIndex	= index;
			}
		}
	},

	// <summary>
	// 現在譜面に表示されている小節に合わせて, 音符情報を参照して動物を表示する
	// その時々に応じて譜面を描画する
	// </summary>
	_drawScore : function() {
		for(var i = 0, max = this._notes.length; i < max; i++) {
			// 現在の譜面の表示範囲に入る音符が存在した場合
			if(this._notes[i]._measure >= this._nowPlace && this._notes[i]._measure <= this._nowPlace + 2) {
				// どの小節に音符が含まれているのか調べ, その結果に応じて音符のx座標値を計算
				switch(this._notes[i]._measure) {
					// 左から1番目に表示されている小節に含まれる音符だった場合
					case this._nowPlace:
						this._parent._setAnimalRelativeX(i, this._parent._getAnimalBaseX(i));
						this._parent._setAnimalX(i, this._parent._getAnimalBaseX(i));
						break;
					// 左から2番目に表示されている小節に含まれる音符だった場合
					case this._nowPlace + 1:
						this._parent._setAnimalRelativeX(i, (this._parent._getAnimalBaseX(i) + (60 * 4)));
						this._parent._setAnimalX(i, (this._parent._getAnimalBaseX(i) + (60 * 4)));
						break;
					// 左から3番目に表示されている小節に含まれる音符だった場合
					case this._nowPlace + 2:
						this._parent._setAnimalRelativeX(i, (this._parent._getAnimalBaseX(i) + (60 * 8)));
						this._parent._setAnimalX(i, (this._parent._getAnimalBaseX(i) + (60 * 8)));
						break;
				}
				// 動物を定位置に移動させ待機状態に
				this._parent._animalStopOwnPlace(i);
				// 動物を不透明状態に
				this._parent._animalSetOpacity(i);
				// 動物を表示させる
				this._parent._animalAppearVisible(i);
			}
		}
	},

	// <summary>
	// 現在譜面に表示されている小節に合わせて, 音符情報を参照して動物を非表示にする
	// その時々に応じて譜面をクリアする
	// </summary>
	_clearScore : function() {
		for(var i = 0, max = this._notes.length; i < max; i++) {
			// 現在の譜面の表示範囲に入る音符が存在した場合
			if(this._notes[i]._measure >= this._prevPlace && this._notes[i]._measure <= this._prevPlace + 2) {
				// 動物を非表示にして隠す
				this._parent._animalHideInvisible(i);
			}
		}
	},

	// <summary>
	// 1小節目から3小節目までにかけて, 音符情報を参照し動物を表示する
	// 1小節目から3小節目までの譜面を描画する
	// </summary>
	_initializeScore : function() {
		// 最も左側に表示される小節を1小節目に固定
		this._nowPlace = 1;
		for(var i = 0, max = this._notes.length; i < max; i++) {
			// 4小節目以降に含まれる音符があった場合
			if(this._notes[i]._measure > this._nowPlace + 2) {
				// 動物を非表示にして隠す
				this._parent._animalHideInvisible(i);
			}
		}
		// 一度譜面を綺麗にクリアして
		this._clearScore();
		// 動物を表示して譜面を描画する
		this._drawScore();
	},

	// <summary>
	// すべての動物を表示させる
	// </summary>
	_allAnimalsVisible : function() {
		for(var i = 0, max = this._notes.length; i < max; i++) {
			this._parent._animalAppearVisible(i);
		}
	},

	// <summary>
	// すべての動物のx, y座標値にそれぞれ絶対的なx, y座標値を与える
	// </summary>
	_allAnimalsMoveAbsolutePoint : function() {
		for(var i = 0, max = this._notes.length; i < max; i++) {
			var absoluteX = this._parent._getAnimalAbsoluteX(i);
			var absoluteY = this._parent._getAnimalAbsoluteY(i);

			this._parent._setAnimalX(i, absoluteX);
			this._parent._setAnimalY(i, absoluteY);
		}
	},

	// <summary>
	// 引数でもらった番号が, 譜面上において最後の音符番号と等しいかどうかを調べる
	// 等しければ再生後の再描画関数を実行
	// </summary>
	_checkLastNote : function(index) {
		if(index === this._lastNoteIndex) {
			this._drawScoreAfterPlay();
		}
	},

	// <summary>
	// 再生が終わった後に実行され, 再生前に表示していた譜面を再描画する
	// </summary>
	_drawScoreAfterPlay : function() {
		// 小節情報を再生前のものにセット
		this._nowPlace = this._prevPlace;
		this._clearScore();
		this._drawScore();
		// 小節番号を表示するサインボードも描き直し
		this._setSignboards();

		// 再生ボタンを再び押せるよう準備
		this._parent._setCanPlay();
	},

	// <summary>
	// 小節番号を表示するサインボードの小節番号を更新
	// </summary>
	_setSignboards : function() {
		// _nowPlaceプロパティの値に応じて小節番号を更新
		for(var i = 0; i < 3; i++) {
			this._parent._setSignboardNumber(i, this._nowPlace + i);
			this._parent._setSignboardLabel(i, this._nowPlace + i);
		}
	},

	// <summary>
	// 1小節目から3小節目までの小節番号を表示するようサインボードを設定
	// </summary>
	_initializeSignboards : function() {
		this._nowPlace = 1;
		this._setSignboards();
	},

	// <summary>
	// 次小節ボタンが押されたときに実行され, サインボードと譜面を描画し直す
	// </summary>
	_drawNextScore : function() {
		// 現在の小節をインクリメント
		this._nowPlace++;
		this._clearScore();
		this._drawScore();
		this._setSignboards();
		// _prevPlaceプロパティの値を更新
		this._prevPlace = this._nowPlace;
	},

	// <summary>
	// 前小節ボタンが押されたときに実行され, サインボードと譜面を描画し直す
	// </summary>
	_drawPrevScore : function() {
		// 現在の小節をデクリメント
		this._nowPlace--;
		this._clearScore();
		this._drawScore();
		this._setSignboards();
		// _prevPlaceプロパティの値を更新
		this._prevPlace = this._nowPlace;
	},

	// <summary>
	// 引数でもらったx座標値に応じた小節番号を返す
	// </summary>
	_takeClickMeasure : function(x) {
		if(x >= 128 && x < 368) {
			return this._nowPlace;
		} else if(x >= 368 && x < 608) {
			return this._nowPlace + 1;
		} else if(x >= 608 && x < 849) {
			return this._nowPlace + 2;
		}
	},

	// <summary>
	// 引数でもらったx座標値に応じた拍番号を返す
	// </summary>
	_takeClickBeat : function(x) {
		return xBoxToBeat[x];
	},

	// <summary>
	// 引数でもらったy座標値に応じた音階を返す
	// </summary>
	_takeClickScale : function(y) {
		return yBoxToScale[y];
	},

	// <summary>
	// 譜面上をクリックされた際にそのx座標値とy座標値を調べる
	// 有効範囲内ならば小節, 拍, 音階を取得して動物を生成する
	// </summary>
	_checkClickPoint : function(x, y) {
		if(x >= 128 && x < 849) {
			if(y >= 300 && y < 692) {
				var measure	= this._takeClickMeasure(x);
				var beat	= this._takeClickBeat(x);
				var scale	= this._takeClickScale(y);

				this._parent._createAnimal("cat", measure, beat, scale, TEMPO_SPEED, FADE_OUT_SPEED, false);
			}
		}
	},
})