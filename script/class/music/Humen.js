// 譜面を表すクラス
// (enchant.Spriteクラスを継承)
var Humen = enchant.Class.create(enchant.Sprite, {
	// コンストラクタ
	initialize : function(width, height) {
		// enchant.Spriteクラスのコンストラクタを実行
		enchant.Sprite.call(this, width, height);

		// 以下, このクラスのプロパティ
		this._animalSign	= new AnimalSign("cat");
		this._removeSign	= new RemoveSign();
		this._parent		= null;			// このクラスの親にあたるオブジェクト
	},

	onenterframe : function(event) {
		var canPlay			= this._parent._getPlayButtonState();
		var canPutAnimal	= this._parent._getAnimalButtonState();
		var canRemoveAnimal	= this._parent._getModosuButtonState();

		if(canPlay === true) {
			return;
		}

		if(canPutAnimal === true) {
			if(clientX >= 128 && clientX < 849) {
				if(clientY >= 300 && clientY < 692) {
					if(this._parent._checkGapBetweenScale(clientY) === true) {
						musicScene.removeChild(this._animalSign);
						return;
					}
					var measure	= this._parent._takeClickMeasure(clientX);
					var beat	= this._parent._takeClickBeat(clientX);
					var scale	= this._parent._takeClickScale(clientY);

					this._animalSign.x			= beatToX[beat] + 240 * (measure - this._parent._getNowPlace());
					this._animalSign.y			= scaleToY[scale];
					this._animalSign._parent	= this._parent;
					musicScene.addChild(this._animalSign);
				} else {
					musicScene.removeChild(this._animalSign);
				}
			} else {
				musicScene.removeChild(this._animalSign);
			}
		} else {
			musicScene.removeChild(this._animalSign);
		}

		if(canRemoveAnimal === true) {
			if(clientX >= 128 && clientX < 849) {
				if(clientY >= 300 && clientY < 692) {
					if(this._parent._checkGapBetweenScale(clientY) === true) {
						musicScene.removeChild(this._removeSign);
						return;
					}
					var measure	= this._parent._takeClickMeasure(clientX);
					var beat	= this._parent._takeClickBeat(clientX);
					var scale	= this._parent._takeClickScale(clientY);

					for(var i = 0, max = this._parent._getNotesLength(); i < max; i++) {
						var equalMeasure	= false;
						var equalBeat		= false;
						var equalScale		= false;

						if(measure === this._parent._getNoteMeasure(i)) {
							equalMeasure	= true;
						}
						if(beat === this._parent._getNoteBeat(i)) {
							equalBeat		= true;
						}
						if(scale === this._parent._getNoteScale(i)) {
							equalScale		= true;
						}
						if(equalMeasure === true && equalBeat === true && equalScale === true) {
							this._removeSign._setBoxImage();
							break;
						} else {
							this._removeSign._setCursorImage();
						}
					}
					this._removeSign.x			= beatToX[beat] + 240 * (measure - this._parent._getNowPlace());
					this._removeSign.y			= scaleToY[scale];
					this._removeSign._parent	= this._parent;
					musicScene.addChild(this._removeSign);
				} else {
					musicScene.removeChild(this._removeSign);
				}
			} else {
				musicScene.removeChild(this._removeSign);
			}
		} else {
			musicScene.removeChild(this._removeSign);
		}
	},
})