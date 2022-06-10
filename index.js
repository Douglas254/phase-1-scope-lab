// Write your solution in this file!
/*declare customerName to be bob in global scope
returns the customerName
*/
var customerName = "bob";

function myFun() {
  return customerName;
}

/* upperCaseCustomerName()
   modifies the customerName variable*/
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

/*
  setBestCustomer()
  setBestCustomer
*/
function setBestCustomer() {
  bestCustomer = "not bob";
}

/*
    overwriteBestCustomer()
    overwrites the best customer
*/
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

/*
    changeLeastFavoriteCustomer()
    unsuccessfully tries to reassign the least favorite customer
*/
const leastFavoriteCustomer = "itCouldBeMe";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "debtCustomer";
}
console.log(leastFavoriteCustomer); // itCouldBeMe
