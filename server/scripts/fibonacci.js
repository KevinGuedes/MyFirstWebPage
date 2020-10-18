function fibonacci(n) {
	if (n < 2) {
		return n;
	}
	else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

const fibonacciElement = () => {
	var elementNumber = parseInt(document.getElementById("element-number").value) - 1;
	document.getElementById("result").innerHTML = "The element #" + elementNumber +  " is " + fibonacci(elementNumber);
}