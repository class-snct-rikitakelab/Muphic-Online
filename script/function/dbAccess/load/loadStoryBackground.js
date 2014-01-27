var loadStoryBackground = function(userID) {
	var backgroundPath;
	var weatherPath;
	$.ajax({
		type: "POST",
		url: "http://localhost/php/StoryBackgroundGet.php",
		async: false,
		data: "userID='" + userID + "'",
		success: function(data) {
			backgroundPath = data.split(",")[0];
			weatherPath = data.split(",")[1];
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
	return [backgroundPath, weatherPath];
}