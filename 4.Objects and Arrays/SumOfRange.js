var range = function (a, b) {
	var number = [];
	for (var i = 1; i <= b; i++) {
		number.push(i);
	};

	return number;
}
//console.log(range(1, 10));

var sum = function  (thing) {
	var sumOfThings = 0;
	for (var i = thing.length - 1; i >= 0; i--) {
		sumOfThings += thing.pop();
	};
	return sumOfThings;
}
console.log(sum(range(1, 10))); 
