var StoryPreviewImage = enchant.Class.create(NormalImage, {
	initialize : function(path, width, height, type) {
		NormalImage.call(this, path, width, height);
		this._type = type;
	},
});