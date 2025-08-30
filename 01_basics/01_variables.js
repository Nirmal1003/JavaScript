const accountId = 144553
let accountEmail = "nirmaltopwal2003@gmail.com"
var accountPassword ="12345"
accountCity = "Dehradun"

// accountId = 2  //not allowed because accountId is constant and cant be changed

accountEmail = "nirmal@.com"
accountPassword = "23414"
accountCity = "Tehri"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])