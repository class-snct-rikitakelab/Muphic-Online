var makePutButton = function(game) {
	var o_label = new Sprite(18, 20);
	o_label.image = game.assets[CHAR_TABLE];
	o_label.frame = 4;
	o_label.x = 0;
	o_label.y = 0;

	var ku_label = new Sprite(18, 20);
	ku_label.image = game.assets[CHAR_TABLE];
	ku_label.frame = 7;
	ku_label.x = 18;
	ku_label.y = 0;

	var o_ku = new Group();
	o_ku.x = 0;
	o_ku.y = 0;
	o_ku.addChild(o_label);
	o_ku.addChild(ku_label);

	return o_label;
}