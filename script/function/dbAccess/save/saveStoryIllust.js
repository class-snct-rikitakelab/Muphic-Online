var saveStoryIllust = function(userID, illustImagePath, focusImagePath, x, y, arrayIndex, zIndex) {
	$.ajax({
		type: "POST",
		url: "http://localhost/dbAccessPHP/StoryIllustUpdate.php" + parseInt((new Date)/1000),
		async: false,
		data: "userID='" + userID + "'&illustImagePath='" + illustImagePath + "'&focusImagePath='" + focusImagePath + "'&x='" + x + "'&y='" + y + "'&arrayIndex='" + arrayIndex + "'&zIndex='" + zIndex + "'",
		success: function(data) {
			alert(data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert(XMLHttpRequest+" "+textStatus+" "+errorThrown);
		}
	});
}