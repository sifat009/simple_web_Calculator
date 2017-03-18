var inputs = document.querySelectorAll("input");
Array.prototype.forEach.call(inputs, function (input) {
	switch (input.value) {
		case '√' :
			input.onclick = function() {
				var result = Math.sqrt(document.calculator.screen.value);
				document.calculator.screen.value = String(result).slice(0,11);
			};
			break;
		
		case 'CE' :
			input.onclick = function() {
				document.calculator.screen.value = ""; 
			};
			break;
		
		case 'C' :
			input.onclick = function() {
				document.calculator.screen.value = ""; 
			};
			break;
			
		case '←' :
			input.onclick = function() {
				document.calculator.screen.value = document.calculator.screen.value.slice(0,-1); 
			};
			break;
			
		case '=' :
			input.onclick = function() {
				document.calculator.screen.value = eval(document.calculator.screen.value); 
			};
			break;
		
		default :
			input.onclick = function() {
				if(document.calculator.screen.value.length <= 11) {
					document.calculator.screen.value += input.value;	
				} 
			}
		
	}
});
