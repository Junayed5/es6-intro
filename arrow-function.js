// Function declaretion
function add(num1,num2) {
    return num1 + num2;
}

///Function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

//Function expression (annonymous)

const add3 = function (num1, num2) {
    return num1+ num2;
}

//Arrow function 

const add4 = (num1,num2) => num1 + num2;

const sum1 = add(12,13);
const sum2 = add2(12,13);
const sum3 = add3(12,13);
const sum4 = add4(12,13);

console.log(sum1,sum2,sum3,sum3);

//mcq practice

const y = x => x*x

const z = y(5);
console.log(z);