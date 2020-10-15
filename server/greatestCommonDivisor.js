const process = (n1, n2) => {
    if (Number.isInteger(n1) && Number.isInteger(n2) && !(n1 === 0 && n2 === 0)) {
        if (!n2) {
            return n1;
        }
        return process(n2, n1 % n2);
    }
}

const gcd = () => {

    var n1 = parseInt(document.getElementById("first-number").value);
    var n2 = parseInt(document.getElementById("second-number").value);

    if (n1 < 0) {
        n1 = -n1;
    }

    if (n2 < 0) {
        n2 = -n2;
    }

    if (n1 === 0 && n2 === 0) {
        return document.getElementById("result").innerHTML = "Invalid numbers. They cannot be both 0";
    }
    else if (Number.isNaN(n1) || Number.isNaN(n2)){
        return document.getElementById("result").innerHTML = "Insert both numbers";
    }
    else {
        return document.getElementById("result").innerHTML = "The greatest common divisor<br>of " + n1 + " and " + n2 + " is " + process(n1, n2);
    }
}