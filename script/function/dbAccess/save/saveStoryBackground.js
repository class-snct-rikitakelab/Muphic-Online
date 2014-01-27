var saveStoryBackground = function(userID, backgroundPath, weatherPath) {
	$.ajax({
		type: "POST",
		url: "http://localhost/dbAccessPHP/StoryBackgroundUpdate.php",
		async: false,
		data: "userID='" + userID + "'&backgroundImagePath='" + backgroundPath + "'&weatherImagePath='" + weatherPath + "'",
		success: function() {
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}