function testIfPrime() {

    var number = parseInt(document.getElementById("input-number").value);
    var count = 0;

    if (number === 1 || number === 0) {
        return document.getElementById("result").innerHTML = "The number " + number + " is neither a prime nor a composite number";
    }
    else {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }
    
        if (count === 2) {
            return document.getElementById("result").innerHTML = "The number " + number + " is Prime";
        }
        else {
            return document.getElementById("result").innerHTML = "The number " + number + " is not Prime";
        }
    }
    

}
