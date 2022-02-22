const multiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiply(12,12,1));

const number = num => num + 5
console.log(number(5));

const empty = () => 'Md Junayed';
console.log(empty());

const number2 = (x,y) => {
    const sum = x + y;
    const minus = sum - 1;
    const multiply = minus * 2;
    return multiply;
}

console.log(number2(5,2));