var PreviewIllust = enchant.Class.create(enchant.Sprite, {
	initialize : function(imagePath, focusPath, width, height, x, y, arrayIndex, zIndex, parent) {
		enchant.Sprite.call(this, width, height);
		this.image = core.assets[imagePath];
		this.x = x;
		this.y = y;
		this._arrayIndex = arrayIndex;
		this._zIndex = zIndex;
		this._focus = new PreviewIllustRemoveFocus(focusPath, this.width, this.height, this.x, this.y, this);
		this._parent = parent;
	},

	// 配列のインデックスをセット
	_setArrayIndex : function(arrayIndex) {
		this._arrayIndex = arrayIndex;
	},

	// 物語作成画面へ加える
	_addToStoryScene : function() {
		storyScene.addChild(this);
	},
	// 物語作成画面から削除する
	_removeFromStoryScene : function() {
		storyScene.removeChild(this);
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

	// 引数のx座標値が画像のx座標上にあるかチェック
	_mouseOverX : function(x, leftX, rightX, leftOffset, rightOffset) {
		if(leftX + leftOffset <= x && x <= rightX + rightOffset) {
			return true;
		} else {
			return false;
		}
	},
	// 引数のy座標値が画像のy座標上にあるかチェック
	_mouseOverY : function(y, topY, bottomY, topOffset, bottomOffset) {
		if(topY + topOffset <= y && y <= bottomY + bottomOffset) {
			return true;
		} else {
			return false;
		}
	},

	ontouchend : function() {
		alert(this._zIndex);
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
		var mouseOverX = this._mouseOverX(clientX, myselfLeftX, myselfRightX, 0, 0);
		var mouseOverY = this._mouseOverY(clientY, myselfTopY, myselfBottomY, 0, 0);
		if(mouseOverX === true && mouseOverY === true) {
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

	// 重なり判定
	_isMouseover : function(tX, tY, tWidth, tHeight, bX, bY, bWidth, bHeight) {
		var isMouseover = false;
		// 左上
		if(tX + tWidth >= bX && tX + tWidth <= bX + bWidth) {
			if(tY + tHeight >= bY && tY + tHeight <= bY + bHeight) {
				isMouseover = true;
			}
		}
		// 中央上
		if(tX >= bX && tX + tWidth <= bX + bWidth) {
			if(tY + tHeight >= bY && tY + tHeight <= bY + bHeight) {
				isMouseover = true;
			}
		}
		// 右上
		if(tX >= bX && tX <= bX + bWidth) {
			if(tY + tHeight >= bY && tY + tHeight <= bY + bHeight) {
				isMouseover = true;
			}
		}

		// 左中央
		if(tX + tWidth >= bX && tX + tWidth <= bX + bWidth) {
			if(tY >= bY && tY + tHeight <= bY + bHeight) {
				isMouseover = true;
			}
		}
		// 中央中央
		if(tX >= bX && tX + tWidth <= bX + bWidth) {
			if(tY >= bY && tY + tHeight <= bY + bHeight) {
				isMouseover = true;
			}
		}
		// 右中央
		if(tX >= bX && tX <= bX + bWidth) {
			if(tY >= bY && tY + tHeight <= bY + bHeight) {
				isMouseover = true;
			}
		}

		// 左下
		if(tX + tWidth >= bX && tX + tWidth <= bX + bWidth) {
			if(tY >= bY && tY <= bY + bHeight) {
				isMouseover = true;
			}
		}
		// 中央下
		if(tX >= bX && tX + tWidth <= bX + bWidth) {
			if(tY >= bY && tY <= bY + bHeight) {
				isMouseover = true;
			}
		}
		// 右下
		if(tX >= bX && tX <= bX + bWidth) {
			if(tY >= bY && tY <= bY + bHeight) {
				isMouseover = true;
			}
		}

		if((tX < bX && tX + tWidth > bX + bWidth) || tY < bY && tY + tHeight > bY + bHeight) {
			isMouseover = false;
		}
		return isMouseover;
	},
})