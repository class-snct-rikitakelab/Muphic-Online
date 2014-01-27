// スプライト描画関数
// enchant.Spriteクラスのプロパティをいじる必要がないような画像の描画関数
// 入力 (int x座標, int y座標, int 横幅, int 縦幅, string 画像のパス, Scene 描画シーン)
// 出力 なし

var drawSprite = function(x, y, width, height, imagePath, scene) {
	var _sprite = new enchant.Sprite(width, height);
	_sprite.image = core.assets[imagePath];
	_sprite.width = width;
	_sprite.height = height;
	_sprite.x = x;
	_sprite.y = y;

	scene.addChild(_sprite);
}