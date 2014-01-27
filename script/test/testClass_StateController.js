var controller;
var object;
var parent;

module("StateControllerのテスト", {
	setup: function() {
		object = new Object();
		parent = new Object();
		controller = new StateController(parent);
	}
});

test("親オブジェクトが正常に指定されている(コンストラクタ指定)", function() {
	ok(controller._parent === parent, "親オブジェクトの指定は正常");
});

test("制御対象オブジェクトが正常に指定されている(セッタ指定)", function() {
	controller._setObject(object);
	ok(controller._object === object, "制御対象オブジェクトの指定は正常");
});