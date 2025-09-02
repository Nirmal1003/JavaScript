// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1);
// console.log("02">1);          // js automatically converts datatypes of the value at the time of comparison but sometimes it do not gives predictable outcome, so make sure to compare same datatype values


// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);           // The reason is that an equality check == and comparisons >< >= <= work differently.             Comparisons convert null to a number, treating it as 0. That's why (3) null >=0 is true and (1) null > 0 is false.   so the above comparisons are as follows => 0>0(false),  null==0(false), 0>=0(true)....sometimes null is converted in "NaN" also



console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);         // all comparisons with undefined give false values



// ===   (it is also called as strict check because it not only compares values but also compares their datatype)

console.log("2"===2);

