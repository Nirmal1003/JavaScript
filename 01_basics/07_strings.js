const name = "Nirmal"
const repocount = 20

// console.log(name+repocount+" Value");                 This is an outdated syntax which looks bad while reading


console.log(`My name is ${name} and my repo count is ${repocount}`);          //inside curly braces we can use methods also like name.ToUpperCase, etc.


const gameName = new String('Nirmal TopwaL')                  //another way to define string. Copy this line and paste it in console of the browser , it will automatically give you the key value pair of string's letters. Dont get confuse by thinking of them as arrays beacuse key value pair starts from 0(zero). Output will be like 0:N, 1:i, 2:r.......12:L. it will also give many methods or functions inside prototype


console.log(gameName[0]);    // output => N
console.log(gameName.__proto__);    //output => {}           this is looking empty but it is not empty actually, inside it thera are other values. To look at those values, go to console and run the new String command there.


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('L'));

const newgameName = gameName.substring(7,13);    // end value is not included
console.log(newgameName);

const anotherString = gameName.slice(2,6)
console.log(anotherString);


const Stringnew = ("      Nirmalll    ")
console.log(Stringnew);

console.log(Stringnew.trim());              //  there are methods like trimStart and trimEnd but we mostly use trim 


const url = "https://nirmal.com/nirmal%20topwal"        //when there is a space in url , browser automatically converts that space into %20, because browser doesn't understand the space, now if we have to remove that, we will use replace

console.log(url.replace('%20','-'));

console.log(url.includes('hello'));


const stringAgain = new String('nirmal-topwal-hello-hi')

console.log(stringAgain.split('-', 3));      // it gives output in array, one argument is separator and another one is limit. Limit defines that how many elements will be included in the array, here i have mentioned 3 so only 3 elements will be included in the array
