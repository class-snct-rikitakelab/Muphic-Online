var objectCopy = function(originalObject) {
	var copyObject = function() {};
	copyObject.prototype = originalObject;
	return new copyObject;
}