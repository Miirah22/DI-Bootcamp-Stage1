/*Ask the user for a string of numbers separated by commas
Console.log the sum of the numbers.
Hint: use some string methods*/

/*let strNum = ["23 ", "43 ", "72 " ,"103 "];
let num = strNum.join();
console.log(num);
let sum = (23 + 43 + 72 + 103);
console.log(sum);*/

function calculateSum() {
    var inputString = prompt("Enter a string of numbers separated by commas:");
    
    // Remove any spaces and split the input string into an array of strings
    var numberStrings = inputString.replace(/\s/g, "").split(",");
    
    var sum = 0;
    
    for (var i = 0; i < numberStrings.length; i++) {
        // Convert each string to a number and add it to the sum
        var num = parseFloat(numberStrings[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    
    console.log("Sum of the numbers:", sum);
}

calculateSum();
