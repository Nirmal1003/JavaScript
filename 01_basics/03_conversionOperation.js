let score = "Nirmal"

console.log(typeof score);
console.log(typeof(score));

let ValueInNumber = Number(score)

console.log(typeof ValueInNumber);

console.log(ValueInNumber);    //NaN is a special type

// "33" =>33
// "33abc" => NaN
// true => 1, false => 0
// null => NaN
// undefined => undefined
// "nirmal" => NaN (because string cant be converted to nuumber)

let isLoggedIn = "nirmal"

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// "1" => true, 0 => false
// " " => false
// "nirmal" => true


let someNumber = 33

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);