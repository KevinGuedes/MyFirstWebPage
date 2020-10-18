function fibonacci(elementNumber) {
	if (elementNumber < 2) {
		return elementNumber;
	}
	else {
		return fibonacci(elementNumber - 1) + fibonacci(elementNumber - 2);
	}
}

const fibonacciElement = () => {
	var elementNumber = parseInt(document.getElementById("element-number").value);
	return document.getElementById("result").innerHTML = "The element #" + elementNumber +  " is " + fibonacci(elementNumber - 1);
}