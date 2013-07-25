var MusicMediator = enchant.Class.create({
	initialize : function() {
		this._changeStoryButton	= null;			// 物語作成画面への遷移ボタンオブジェクト
		this._playButton		= null;			// 再生ボタンのオブジェクト
		this._animalButton		= null;			// 動物ボタンのオブジェクト
		this._modosuButton		= null;			// 削除ボタンのオブジェクト
		this._scaleHouse		= null;			// 音階の家のオブジェクト
		this._humen				= null;			// 譜面のオブジェクト
		this._measureNextButton	= null;			// 小節を1つ次に進めるボタンのオブジェクト
		this._measurePrevButton	= null;			// 小節を1つ前に戻すボタンのオブジェクト
		this._signboards		= new Array(3);	// サインボードのオブジェクト(3つ)
		this._animals			= new Array();	// 譜面上に置かれる動物のオブジェクト(複数)
		this._scoreData			= null;
		this._parent			= null;
	},

	// 再生ボタンに関する仲介メソッド
	_getPlayButtonState : function() {
		return this._playButton._isPush;
	},

	_setCanPlay : function() {
		this._playButton._setCanPlay();
	},

	// 動物ボタンに関する仲介メソッド
	_setAnimalButtonState : function(isPush) {
		this._animalButton._setIsPush(isPush);
	},

	_getAnimalButtonState : function() {
		return this._animalButton._isPush;
	},

	_setAnimalButtonImage : function(imageString) {
		if(imageString === "off") {
			this._animalButton._setOffImage();
		} else if(imageString === "on") {
			this._animalButton._setOnImage();
		}
	},

	// 削除ボタンに関する仲介メソッド
	_setModosuButtonState : function(isPush) {
		this._modosuButton._setIsPush(isPush)
	},

	_getModosuButtonState : function() {
		return this._modosuButton._isPush;
	},

	_setModosuButtonImage : function(imageString) {
		if(imageString === "off") {
			this._modosuButton._setOffImage();
		} else if(imageString === "on") {
			this._modosuButton._setOnImage();
		}
	},

	// 音階を表す家に関する仲介メソッド
	_getScaleHouseX : function() {
		return this._scaleHouse.x;
	},

	_getScaleHouseY : function() {
		return this._scaleHouse.y;
	},

	// サインボードに関する仲介メソッド
	_setSignboardNumber : function(index, number) {
		this._signboards[index]._setSignboardNumber(number);
	},

	_setSignboardLabel : function(index, number) {
		this._signboards[index]._setSignboardLabel(number);
	},

	// 動物に関する仲介メソッド
	_resetIsSang : function() {
		for(var i = 0, max = this._animals.length; i < max; i++) {
			this._animals[i]._isSang = false;
		}
	},

	_animalIndexDecrement : function(index) {
		this._animals[index]._index--;
	},

	_animalsArraySplice : function(index) {
		this._animals.splice(index, 1);
	},

	_setAnimalIndex : function(index) {
		this._animals[index]._index = index;
	},

	_getAnimalIndex : function(index) {
		return this._animals[index]._index;
	},

	_setAnimalX : function(index, x) {
		this._animals[index].x = x;
	},

	_getAnimalX : function(index) {
		return this._animals[index].x;
	},

	_setAnimalY : function(index, y) {
		this._animals[index].y = y;
	},

	_getAnimalY : function(index) {
		return this._animals[index].y;
	},

	_setAnimalBaseX : function(index, baseX) {
		this._animals[index]._baseX = baseX;
	},

	_getAnimalBaseX : function(index) {
		return this._animals[index]._baseX;
	},

	_setAnimalBaseY : function(index, baseY) {
		this._animals[index]._baseY = baseY;
	},

	_getAnimalBaseY : function(index) {
		return this._animals[index]._baseY;
	},

	_setAnimalRelativeX : function(index, relativeX) {
		this._animals[index]._relativeX = relativeX;
	},

	_getAnimalRelativeX : function(index) {
		return this._animals[index]._relativeX;
	},

	_setAnimalRelativeY : function(index, relativeY) {
		this._animals[index]._relativeY = relativeY;
	},

	_getAnimalRelativeY : function(index) {
		return this._animals[index]._relativeY;
	},

	_setAnimalAbsoluteX : function(index, absoluteX) {
		this._animals[index]._absoluteX = absoluteX;
	},

	_getAnimalAbsoluteX : function(index) {
		return this._animals[index]._absoluteX;
	},

	_setAnimalAbsoluteY : function(index, absoluteY) {
		this._animals[index]._absoluteY = absoluteY;
	},

	_getAnimalAbsoluteY : function(index) {
		return this._animals[index]._absoluteY;
	},

	_setAnimalWalkSpeed : function(index, walkSpeed) {
		this._animals[index]._walkSpeed = walkSpeed;
	},

	_setAnimalFadeOutSpeed : function(index, fadeOutSpeed) {
		this._animals[index]._fadeOutSpeed = fadeOutSpeed;
	},

	_animalStopOwnPlace : function(index) {
		this._animals[index]._stopOwnPlace();
	},

	_animalSetOpacity : function(index) {
		this._animals[index]._setOpacity();
	},

	_animalAppearVisible : function(index) {
		this._animals[index]._appearVisible();
	},

	_animalHideInvisible : function(index) {
		this._animals[index]._hideInvisible();
	},

	// スコアデータに関する仲介メソッド
	_addNote : function(index, soundSource, measure, beat, scale) {
		this._scoreData._addNote(index, soundSource, measure, beat, scale);
	},

	_removeNote : function(index) {
		this._scoreData._removeNote(index);
	},

	_noteIndexDecrement : function(index) {
		this._scoreData._notes[index]._index--;
	},

	_notesArraySplice : function(index) {
		this._scoreData._notes.splice(index, 1);
	},

	_checkLastNote : function(index) {
		this._scoreData._checkLastNote(index);
	},

	_animalsCountIncrement : function() {
		this._scoreData._animalsCount++;
	},

	_animalsCountDecrement : function() {
		this._scoreData._animalsCount--;
	},

	_compareAbsoluteMax : function(index) {
		this._scoreData._compareAbsoluteMax(index);
	},

	_allAnimalsMoveAbsolutePoint : function() {
		this._scoreData._allAnimalsMoveAbsolutePoint();
	},

	_allAnimalsVisible : function() {
		this._scoreData._allAnimalsVisible();
	},

	_drawScore : function() {
		this._scoreData._drawScore();
	},

	_drawNextScore : function() {
		this._scoreData._drawNextScore();
	},

	_drawPrevScore : function() {
		this._scoreData._drawPrevScore();
	},

	_initializeScore : function() {
		this._scoreData._initializeScore();
	},

	_initializeSignboards : function() {
		this._scoreData._initializeSignboards();
	},

	_takeClickMeasure : function(x) {
		return this._scoreData._takeClickMeasure(x);
	},

	_takeClickBeat : function(x) {
		return this._scoreData._takeClickBeat(x);
	},

	_takeClickScale : function(y) {
		return this._scoreData._takeClickScale(y);
	},

	_checkGapBetweenScale : function(y) {
		return this._scoreData._checkGapBetweenScale(y);
	},

	_checkClickPoint: function(x, y) {
		this._scoreData._checkClickPoint(x, y);
	},

	_getNotesLength : function() {
		return this._scoreData._notes.length;
	},

	_getNoteMeasure : function(index) {
		return this._scoreData._notes[index]._measure;
	},

	_getNoteBeat : function(index) {
		return this._scoreData._notes[index]._beat;
	},

	_getNoteScale : function(index) {
		return this._scoreData._notes[index]._scale;
	},

	_getMeasureMax : function() {
		return this._scoreData._measureMax;
	},

	_setNowPlace : function(nowPlace) {
		this._scoreData._nowPlace = nowPlace;
	},

	_getNowPlace : function() {
		return this._scoreData._nowPlace;
	},

	_getPrevPlace : function() {
		return this._scoreData._prevPlace;
	},

	_getAnimalsCount : function() {
		return this._scoreData._animalsCount;
	},

	_getNoteSoundSource : function(index) {
		return this._scoreData._notes[index]._soundSource;
	},

	// 動物生成メソッドへのアクセス
	_createAnimal : function(animalName, measure, beat, scale, walkSpeed, fadeOutSpeed, isSample) {
		this._parent._createAnimal(animalName, measure, beat, scale, walkSpeed, fadeOutSpeed, isSample);
	},
})