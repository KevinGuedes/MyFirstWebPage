function testIfPrime() {
    var number = document.getElementById("input-number").value;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return document.getElementById("result").innerHTML = "The number " + number + " is not Prime";
        }
    }
    
    var isPrime = number !== 1
    if (isPrime) {
        return document.getElementById("result").innerHTML = "The number " + number + " is Prime";
    }
    else {
        return document.getElementById("result").innerHTML = "The number " + number + " is not Prime";
    }
}
