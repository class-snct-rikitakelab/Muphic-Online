var model;
var measure = 1;
var beat = 2;
var scale = "E4";
var parent;

module("NoteModelクラスのテスト", {
	setup: function() {
		parent = new Object();
		model = new NoteModel(measure, beat, scale, parent);
	}
});

test("コンストラクタによるプロパティの指定が成功しているか", function() {
	ok(model._getMeasure() === measure, "_measureプロパティの指定に成功");
	ok(model._getBeat() === beat, "_beatプロパティの指定に成功");
	ok(model._getScale() === scale, "_scaleプロパティの指定に成功");
});