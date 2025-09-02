let score = "Nirmal"

// console.log(typeof score);
// console.log(typeof(score));

let ValueInNumber = Number(score)

// console.log(typeof ValueInNumber);

// console.log(ValueInNumber);    //NaN is a special type

/*
// "33" =>33
// "33abc" => NaN
// true => 1, false => 0
// null => NaN
// undefined => undefined
// "nirmal" => NaN (because string cant be converted to nuumber)

*/

let isLoggedIn = "nirmal"

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

/* "1" => true, 0 => false
   " " => false
   "nirmal" => true
*/

let someNumber = 33

let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************************** Operations ********************************

let value = 3
let negValue = -value
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


let str1 = "hello"
let str2 = " nirmal"
let str3 = str1 + str2
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log("1"+2+"2");
// console.log(1+"2"+2);


// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1= num2 = num3 =2+2    // not preferred , because it hampers the code readability

let gameCounter = 100
gameCounter++;
// console.log(gameCounter)

let gameCounterr = 100
++gameCounterr;
console.log(gameCounterr);
