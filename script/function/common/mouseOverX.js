// 引数のx座標値が画像のx座標上にあるかチェック
// 入力 (int x座標, int 左端のx座標, int 右端のx座標, int 左端からのオフセット幅, int 右端からのオフセットじゃ場)
// 出力 (bool 引数xが引数leftXと引数rightXの間のどこかにあるか否か)
var mouseOverX = function(x, leftX, rightX, leftOffset, rightOffset) {
	if(leftX + leftOffset <= x && x <= rightX + rightOffset) {
		return true;
	} else {
		return false;
	}
}