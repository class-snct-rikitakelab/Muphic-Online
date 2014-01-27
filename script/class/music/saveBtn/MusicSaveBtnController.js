var MusicSaveBtnController = enchant.Class.create({
	// コンストラクタ
	initialize : function(parent) {
		this._parent = parent;
	},

	// 音符の保存
	_saveMusicNote : function(docs) {
		var doc = {
			"user_id" : USER_ID
		};
		socket.emit('removeMusicNote', doc);
		for(var i = 0; i < docs.length; i++) {
			doc = {
				"user_id" : docs[i].user_id,
				"animal" : docs[i].animal,
				"measure" : docs[i].measure,
				"beat" : docs[i].beat,
				"scale" : docs[i].scale,
				"save_date" : docs[i].save_date
			};
			socket.emit('saveMusicNote', doc);
		}
	}
})