const gcd = () => {
    
    var n1 = parseInt(document.getElementById("first-number").value);
    var n2 = parseInt(document.getElementById("input-number").value);

    if (n1 < 0) {
        n1 = -n1;
    }

    if (n2 < 0) {
        n2 = -n2;
    }

    if (Number.isInteger(n1) && Number.isInteger(n2) && !(n1 === 0 && n2 === 0)) {
        if (!n2) {
            return n1;
        }
        return gcd(n2, n1 % n2);
    }

    return console.log("Parâmetros inválidos. Os dois devem ser inteiros e não podem ser ambos iguais a 0");
}