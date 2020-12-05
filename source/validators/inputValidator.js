const numberGreaterThanZero = (number) => {
    if (number < 0) { 
        throw {
            isValidInput : false,
            message : "Insert numbers greater than zero"
        }
    }
}

const integerNumber = (number) => {
    if (!Number.isInteger(input)){
        throw {
            isValidInput : false,
            message : "Insert integer numbers"
        }
    }
}

const validNumber = (number) => {
    if (isNaN(number)){
        throw {
            isValidInput : false,
            message : "Insert numbers only"
        }
    }
}



const primeInputValidator = (input) => {

    try{
        numberGreaterThanZero(input);
        integerNumber(input);
        validNumber(input);
    }
    catch (exception){
        return exception;
    }

    
    return {
        isValidInput : true,
        message: "Correct input"
    }
    
};

const fibonacciInputValidator = (input) => {

    try{
        numberGreaterThanZero(input);
        integerNumber(input);
        validNumber(input);

        return {
            isValidInput : true,
            message: "Correct input"
        }
    }
    catch (exception){
        return exception;
    }
};


const countInputValidator = (input) => {

    try{
        numberGreaterThanZero(input);
        integerNumber(input);
        validNumber(input);

        return {
            isValidInput : true,
            message: "Correct input"
        }
    }
    catch (exception){
        return exception;
    }
};
