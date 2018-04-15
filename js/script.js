document.getElementById("calculate-button").onclick = function() {
	// Get the numbers inside the input element 

	let val1 = parseInt(document.getElementById('elem-1').value);
	let val2 = parseInt(document.getElementById('elem-2').value);

	if (isNaN(val1)) {
		alert('Digite os valores na caixa');
	}  else if (isNaN(val2)) {
		alert('Digite os valores na caixa');
	}  else {

	// Chosen operation from radio group
	let choice = document.querySelector('input[name="operation"]:checked');
	let operation =choice.value;
	let operationResult = getResult(val1, val2, operation);

	//Display result with element inside element with id "result"

	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;
	

	/**
	*Rerturns the result  of an operation of two numbers .
	*Arguments: two valid numbers  and one operation symbol.
	*Supports sum, subtraction, multiplication and division.
	*/



//Display the result according to the operation selected
function getResult(val1, val2, operation) {
	if (operation === '+') {
		return val1 + val2;
	} else if (operation === '-') {
		return val1 - val2;
	} else if (operation === '*') {
		return val1 * val2;
	} else if (operation === '/') {
		return val1 / val2;
	} else if (operation === '%') {
		return val1 * val2 / 100;
	} else if (operation ==='^') {
		return val1 ** val2;
	}
	}
}
}
