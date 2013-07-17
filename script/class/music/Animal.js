// 譜面上に配置される動物を表すクラス
// (enchant.Spriteクラスを継承)
var Animal = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);

		// 以下, このクラスのプロパティ
		this._index			= null;		// 動物の番号
		this._baseX			= null;		// 小節に初めて配置された際のx座標値
		this._baseY			= null;		// 小節に初めて配置された際のy座標値
		this._relativeX		= null;		// 小節に再配置される際に計算されるx座標値
		this._relativeY		= null;		// 小節に再配置される際に計算されるy座標値
		this._absoluteX		= null;		// 小節に初めて配置された際の, 画面上における絶対的なx座標値
		this._absoluteY		= null;		// 小節に初めて配置された際の, 
		this._walkSpeed		= 0;		// 歩く際の速度
		this._walkStepCount	= 0;		// 歩いてる際の歩数
		this._isSang		= false;	// 音声を再生したかどうかを表すフラグ
		this._fadeOutSpeed	= 0;		// 歩く際の消えていく速度
		this._parent		= null;		// このクラスの親にあたるオブジェクト
	},

	// <summary>
	// 動物が左方向にスキップしながら移動する
	// 画面右端にいる間は姿を隠す
	// </summary>
	_animationPlay : function() {
		// 歩数をインクリメント
		this._walkStepCount++;
		// 家に向かって歩く
		this._walkingToHouse();
		// 5歩ごとにスキップしながら歩く
		if(this._walkStepCount % 5 === 0) {
			if(this._walkStepCount % 2 === 1) {
				// ５歩ごとにスキップジャンプする
				this._skipJump();
			} else if(this._walkStepCount % 2 === 0) {
				// 5歩ごとに着地する
				this._skipGround();
			}
		}
		// 画面右端にいる間は姿を隠す
		if(this.x > 845) {
			this._hideInvisible();
		} else {
			this._appearVisible();
		}
	},

	// <summary>
	// 動物が左方向に歩く
	// </summary>
	_walkingToHouse : function() {
		// x座標値を歩行速度分だけ減ずる
		this.x -= this._walkSpeed;
	},

	// <summary>
	// 動物がスキップジャンプする
	// </summary>
	_skipJump : function() {
		// y座標値を2ピクセル分だけ減じてジャンプ
		this.y = this._relativeY - 2;
	},

	// <summary>
	// 動物が着地する
	// </summary>
	_skipGround : function() {
		// y座標値を2ピクセル分だけ足して着地
		this.y = this._relativeY + 2;
	},

	// <summary>
	// 動物が元居た位置に戻る
	// </summary>
	_stopOwnPlace : function() {
		// x座標値とy座標値を元の値にセットし直す
		this.x = this._relativeX;
		this.y = this._relativeY;
		// 歩数を0にリセットする
		this._walkStepCount = 0;
	},

	// <summary>
	// 動物が姿を見せる
	// </summary>
	_appearVisible : function() {
		// Spriteクラスのvisibleプロパティにtrueを与える
		this.visible = true;
	},

	// <summary>
	// 動物が姿を隠す
	// </summary>
	_hideInvisible : function() {
		// Spriteクラスのvisibleプロパティにfalseを与える
		this.visible = false;
	},

	// <summary>
	// 動物が不透明状態になる
	// </summary>
	_setOpacity : function() {
		// Spriteクラスのopacityプロパティに1.0を与える
		this.opacity = 1.0;
	},

	// <summary>
	// 動物が徐々に消える
	// </summary>
	_fadeOut : function() {
		// 消える直前まで透明になったら動物を隠す
		if(this.opacity < 0.1) {
			this._hideInvisible();
		}
		// 消える速さと歩く速さに応じて, 動物を徐々に消えさせる
		this.opacity -= this._fadeOutSpeed * (this._walkSpeed / 2);
	},

	// <summary>
	// 現在再生状態かどうかを調べ, 結果に応じた処理を行う
	// </summary>
	_checkIsPlay : function() {
		if(this._parent._score._isPlay === true) {
			// 再生状態の場合, 動物を歩かせる
			this._animationPlay();
		} else if(this._parent._score._isPlay === false) {
			// 再生状態でない場合, 動物を歩かせない
			this._stopOwnPlace();
		}
	},

	// <summary>
	// 動物と家の衝突を調べ, 結果に応じた処理を行う
	// </summary>
	_checkCollision : function() {
		if(this.x < this._parent._scaleHouse.x - 30) {
			// 動物が家を通り過ぎた際, 姿を隠す
			this._hideInvisible();
			// 動物の音声再生フラグをfalseにリセット
			this._isSang = false;
			// この動物が, 譜面上において最後の音符に該当するかを調べる
			this._parent._score._checkLastNote(this._index);
		} else if(this.x < this._parent._scaleHouse.x + 40) {
			// 動物が家と衝突してまだ音声を再生していなかった場合
			if(this._isSang === false) {
				// 動物の音声を再生する
				this._parent._score._notes[this._index]._playSound();
				// 動物の音声再生フラグをtrueにセット
				this._isSang = true;
			}
			// 動物が家と衝突した際, 動物を徐々に消えさせる
			this._fadeOut();
		}
	},

	// <summary>
	// 定期処理
	// </summary>
	onenterframe : function(event) {
		// 再生状態かどうかを常にチェック
		this._checkIsPlay();
		// 動物が家と衝突していないかどうかを常にチェック
		this._checkCollision();
	},
})