const fibonacci = (elementNumber) => {
	let sequence = [0, 1];
	for (let i = 2; i < elementNumber; i++) {
		sequence.push(sequence[i - 2] + sequence[i - 1])
	}
	return sequence[elementNumber - 1];
}


const fibonacciElement = () => {
	var elementNumber = parseInt(document.getElementById("element-number").value);

	if (elementNumber <= 0) {
		return document.getElementById("result").innerHTML = "Insert a number greater than 0";
	}
	else {
		return document.getElementById("result").innerHTML = "The element #" + elementNumber + " is " + fibonacci(elementNumber);
	}
}
