var PreviewIllust = enchant.Class.create(StorySceneSprite, {
	initialize : function(imagePath, focusPath, width, height, x, y, arrayIndex, zIndex, parent) {
		StorySceneSprite.call(this, imagePath, width, height, x, y, parent);
		// 以下, このクラスのプロパティ
		this._arrayIndex = arrayIndex;
		this._zIndex = zIndex;
		this._focus = new PreviewIllustRemoveFocus(focusPath, this.width, this.height, this.x, this.y, this);
	},

	// 配列のインデックスをセット
	_setArrayIndex : function(arrayIndex) {
		this._arrayIndex = arrayIndex;
	},

	// プレビュー画面に配置するイラストの破棄
	_destroyIllust : function() {
		this._parent._destroyIllust(this._arrayIndex);
	},

	// フォーカス表示処理
	_addFocus : function() {
		storyScene.addChild(this._focus);
	},
	// フォーカス非表示処理
	_removeFocus : function() {
		if(this._focus.scene === storyScene) {
			storyScene.removeChild(this._focus);
		}
	},

	// フレーム処理
	onenterframe : function() {
		var removeButtonPush = this._parent._removeButton._isPush;
		if(removeButtonPush === false) {
			return;
		}
		var myselfLeftX = this.x;
		var myselfRightX = this.x + this.width;
		var myselfTopY = this.y;
		var myselfBottomY = this.y + this.height;
		var mOverX = mouseOverX(clientX, myselfLeftX, myselfRightX, 0, 0);
		var mOverY = mouseOverY(clientY, myselfTopY, myselfBottomY, 0, 0);
		if(mOverX === true && mOverY === true) {
			var illust = this._parent._illust;
			var overlapIllustIndex = new Array();
			for(var i = 0; i < this._parent._illust.length; i++) {
				if(i === this._arrayIndex) {
					continue;
				} else {
					if(this._isNoOverlap(clientX, clientY, illust[i].x, illust[i].y, illust[i].width, illust[i].height) === false) {
						overlapIllustIndex.push(i);
					}
				}
			}
			if(overlapIllustIndex.length === 0) {
				this._addFocus();
			} else {
				var zIndexMax = 0;
				for(var i = 0; i < overlapIllustIndex.length; i++) {
					if(zIndexMax <= illust[overlapIllustIndex[i]]._zIndex) {
						zIndexMax = illust[overlapIllustIndex[i]]._zIndex;
					}
				}
				if(this._zIndex >= zIndexMax) {
					this._addFocus();
				} else {
					this._removeFocus();
				}
			}
		} else {
			this._removeFocus();
		}
	},

	// マウスポインタの座標上にイラストの重なりがあるか調べる
	_isNoOverlap : function(mouseX, mouseY, illustX, illustY, illustWidth, illustHeight) {
		var isNoOverlap = true;
		if(mouseX >= illustX && mouseX <= illustX + illustWidth) {
			if(mouseY >= illustY && mouseY <= illustY + illustHeight) {
				isNoOverlap = false;
			}
		}
		return isNoOverlap;
	},
})