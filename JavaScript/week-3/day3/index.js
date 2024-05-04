/*Make a keyless car!

This car will only let you drive if you are over 18. Make it do the following:

Using prompt() and alert(), ask a user for their age.

IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"*/

let age = 20;
let user = (age);


if (age == 18){

    prompt(user);
    console.log("congratulation on your first year of driving. Enjoy the ride!");
    

}else if(age > 18){

    prompt(user);
    console.log("Powering on. Enjoy the ride!");
    
}else {

    console.log("Sorry, you are too young to drive this car. Powering off!");
    alert(age);

}
