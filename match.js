const Math = {}; //creo un objeto

function add(x1,x2){
    return x1 + x2;
}

function substract(x1,x2){
    return x1 - x2;

}

function multiply(x1,x2) {
    return x1 * x2;

}

function divide(x1,x2){
    if (x2 == 0) {
        return "error";
    }else {
        return x1 / x2;
    }
}

// console.log(multiply(20,10));


// exporto una propiedad de un objeto
// exports.add = add;
// exports.sub = substract;
// exports.mul = multiply;
// exports.div = divide;

Math.add = add;
Math.sub = substract;
Math.mul = multiply;
Math.div = divide;

module.exports = Math;
