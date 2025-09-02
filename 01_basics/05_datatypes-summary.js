// Data has been categorized in two ways if.e. ho data is stored in the memory and how data is accessed :- Primitive and Non-Primitive datatypes

// 1. Primitive Datatype  (call by value)

// All primitive datatypes are "CALL BY VALUE" type. It means whenever they are copied from somewhere, then there original reference is not given but a copy of it is given. and the changes are being done on the copy, not on the original.

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt


// Important : JavaScript is a dynamically type language kyuki isme hume variable bnaate hue type nahi btana pdta ki vo integer hai ya boolean hai ya string hai.. vo value dekh kar khud hi smjh jata hai. Dusra type hota hai Statically like in C, C++, Java. jsime hume datatype define krna pdta hai variable define krte hue.


// Note: Decimal value also comes inside number category ( not in float like in other languages)


const score = 100
const scorevalue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;   // its value will be undefined , also we can manually assign undefined like userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// even if pass the same value inside two different variables , then the result(return value) of them will not be same.

console.log(id===anotherId);


// const bigNumber = 3644728789989188173n   //BigInt 


// 2. Non-Primitive   (Reference)

// Non-Primitive Datatypes are "CALL BY REFERENCE" type. These are the datatypes in which direct reference of them can be allocated in the memory.

// Types: Array, objects, Functions


const heroes =["ironman", "thor", "hulk"]    // they have reference typr or non-primitive type
let myObj = {
    name:"nirmal",
    age:22,
}   // inside the curly braces are the "OBJECTS"

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof scorevalue);
console.log(typeof outsideTemp);   // is variable ka(outsidetemp whose value we have assigned null) type agr hum "typeof" se pata krenge tw iska type "OBJECT" aayega because unique hai object tw object ata hai


console.log(typeof myFunction);   // iska type aayega funtion but isko full bolte hai "Object Function".  saare non-primitve datatypes ka type OBJECT hi hota ha


console.log(typeof heroes);

console.log(typeof id);



/*

Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.



 Reference / Non-Primitive(Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

Object

Definition: Key-Value pairs ka collection hota hai.

Keys (properties): hamesha strings (ya symbols).

Values: kuch bhi ho sakta hai (primitive ya reference).

Methods: Agar value ek function hai, to usse method bolte hain.

let person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

console.log(person.name);   // "John"
person.greet();             // "Hello, John"








2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].



Array

Definition: Ordered collection of values.

Index numbers ke basis pe access hoti hai (0-based indexing).

JavaScript me array bhi ek object hi hai, lekin special features ke sath.

Example:

let numbers = [1, 2, 3, 4];
console.log(numbers[0]); // 1
console.log(numbers.length); // 4
numbers.push(5); // [1,2,3,4,5]


Matlab array ek list jaisa hai jo order maintain karta hai.











3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.



Function

Definition: Reusable block of code jo input (parameters) leta hai aur output (return value) deta hai.

JavaScript me functions bhi objects hote hain (Function object).

Isiliye functions ko "first-class citizens" bolte hain → matlab function ko variable me store kar sakte ho, argument bana sakte ho, return kar sakte ho.

Example:

function add(x, y) {
  return x + y;
}

let sum = add(3, 4); // 7
console.log(sum);


Matlab function code ko reuse aur organize karne ke liye hota hai.




4.Date: Represents dates and times.


Date

Definition: JavaScript ka built-in object jo date aur time handle karta hai.

Ye milliseconds count karta hai (Jan 1, 1970 se leke).

Example:

let today = new Date();
console.log(today); // current date and time

let specificDate = new Date("2025-09-02");
console.log(specificDate.toDateString()); // Tue Sep 02 2025




5.RegExp: Represents regular expressions for pattern matching.


RegExp (Regular Expression)

Definition: Ek pattern jo strings me search/match karne ke liye use hota hai.

Useful for validation (email, phone number), search-replace, etc.

Example:

let pattern = /hello/i; // "i" = case insensitive
let result = pattern.test("Hello World"); 
console.log(result); // true

let replaceText = "2025-09-02".replace(/\d{4}/, "Year");
console.log(replaceText); // "Year-09-02"


Matlab RegExp ek search tool hai jo strings me patterns find karta hai.



Lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.

        */




        /* short table of return type

        Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object 
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function    (iska pura return type hota hai object function but ye function hi dikhata hai)
       Object  =>  object

       */