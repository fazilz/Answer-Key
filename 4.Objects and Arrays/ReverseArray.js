var reverseArray = function (array) {
	var reverse = [];
	for (var i = array.length - 1; i >= 0; i--) {
	 reverse.push(array.pop());
	}
	return reverse;
};


console.log(reverseArray(["A", "B", "C"]));