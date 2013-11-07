// 引数のy座標値が画像のy座標上にあるかチェック
// 入力 (int y座標, int 上端のy座標, int 下端のy座標, int 上端からのオフセット幅, int 下端からのオフセットじゃ場)
// 出力 (bool 引数yが引数topYと引数bottomYの間のどこかにあるか否か)
var mouseOverY = function(y, topY, bottomY, topOffset, bottomOffset) {
	if(topY + topOffset <= y && y <= bottomY + bottomOffset) {
		return true;
	} else {
		return false;
	}
}