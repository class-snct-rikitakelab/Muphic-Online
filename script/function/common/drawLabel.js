// ラベル描画関数
// enchant.Labelクラスのプロパティをいじる必要がないような文字列の描画関数
// 入力 (int x座標, int y座標, int 横幅, int 縦幅, string 文字列, string 色, string フォントサイズ, Scene 描画シーン)
// 出力 なし

var drawLabel = function(x, y, width, height, text, color, fontSize, scene) {
	var _label = new enchant.Label();
	_label.text = text;
	_label.textAlign = "center";
	_label.color = color;
	_label.font = fontSize + " " + "monospace";
	_label.width = width;
	_label.height = height;
	_label.x = x;
	_label.y = y;

	scene.addChild(_label);
}