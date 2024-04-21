const accId = 1234
var accName = "Rajat"
let accAddress = "Gadarpur"
email = "abc@abc.com"
let status; // on printing, this will be undefined

console.log(accId);
// to comment use ctrl+/
/* javascript was having issue with the scope so variable declared with var keyword can be modified easily if reused in any block
so now it is recommended to use only let*/
console.table([accName, accAddress,email]);