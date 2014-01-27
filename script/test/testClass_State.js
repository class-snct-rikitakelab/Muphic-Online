var state;
var parent;

module("Stateのテスト", {
	setup: function() {
		parent = new Object();
		state = new State(parent);
	}
});

test("親オブジェクトが正常に指定されている(コンストラクタ指定)", function() {
	ok(state._parent === parent, "親オブジェクトの指定は正常");
});