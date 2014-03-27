//Bean Counting 

(function(){
	function countBs (string) {
		var numberOfB = 0;

		for (var i = 0; i <string.length; i++) {
			if(string.charAt(i) === "B" || string.charAt(i) ==="b") {
				numberOfB +=1;
			}
		};
		
		return numberOfB;
	}

	function countChar (string, character) {
		var numberOfChar = 0; 

		for (var i = 0; i<string.length;  i++) {
			if(string.charAt(i) === character) {
				numberOfChar +=1;
			}
		};

		return numberOfChar;
	}

	console.log(countBs("BBC"));
	console.log(countChar("holla halleleleleldsf" , "h"));
})();