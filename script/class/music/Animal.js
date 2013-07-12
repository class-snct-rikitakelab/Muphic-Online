var FADE_OUT_SPEED	= 0.1;

var Animal = Class.create(MySprite, {
	initialize : function(image, w, h, scaleX, scaleY, x, y, game) {
		MySprite.call(this, image, w, h, scaleX, scaleY, x, y, game);
		this.walk_step		= 1;
		this.frame_count	= 0;
		this.baseX			= x;
		this.baseY			= y;
		this.opacity		= 1.0;
		this.sound			= null;
		this.played_flag	= false;
		this.walk_flag		= true;
		this.last			= false;
	},

	setSound : function() {
		this.sound = new Audio();
		this.sound.src = this.scene.conversion.yToSound(this.y);
	},

	playSound : function() {
		this.sound.play();
	},

	_fadeOut : function() {
		if(this.opacity <= 0.1) {
			this.visible = false;
			this.walk_flag = false;
			if(this.last === true) {
				this.scene.start.state = "stop";
				this.scene.signboard.setSignboardLabels(this.scene.left_measure);
				this.scene.signboard.showSignboardLabels();
				this.scene.humen.paintHumen(this.scene.left_measure);
			}
		}
		// テンポスピードにあわせてフェードアウトするスピードも速く
		this.opacity -= FADE_OUT_SPEED * (TEMPO_SPEED / 2);
	},

	_skipRun : function(step) {
		if(step === 1) {
			this.y = this.baseY + 2;
		} else if(step === -1) {
			this.y = this.baseY - 2;
		}
	},

	onenterframe : function(e) {
		// 「きく」ボタンが押された状態のとき
		if(this.scene.start.state === "start" && this.walk_flag === true) {
			if(this.x > (829 * SCALE_X) - PIANO_CAT_W + 25) {
				this.visible = false;
			} else {
				this.visible = true;
			}
			this.x -= TEMPO_SPEED;
			// 5フレーム毎に歩くアニメーションを再生
			if(this.frame_count === 5) {
				this.walk_step *= -1;
				this.frame_count = 0;
			}
			this._skipRun(this.walk_step);
			this.frame_count++;
		}

		if((this.x < this.scene.house.x + 30) && this.played_flag === false) {
			this.playSound();
			this.played_flag = true;
		}

		if(this.played_flag === true && this.scene.start.state === "start") {
			this._fadeOut();
		}
	},
})