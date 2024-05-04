/*Create 2 variables. The values should be strings. For example:

let str1 = "mix";       
let str2 = "pod"; */

let productName = ["Aloe Vera", "stick Aloe", "Propolis", "Aloe Jelly"];
let productType = ["Big tupe", "small tupe", "Sample tupe"];

//Slice out and swap the first 2 characters of the two strings from part 1.//
let strPro = productName.slice(2);
let strProT = productType.slice(2);
console.log(strPro + " " + ", "  + strProT);

//Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).//

let country = ["France", "USA"];
let productDetails = (productName + " " + productType + " " + country);

//Finally console.log the new concatenated string.//

console.log(productDetails);
