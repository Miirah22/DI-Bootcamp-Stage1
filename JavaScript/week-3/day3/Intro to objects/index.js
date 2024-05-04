/*Create a stuctured html file linked to a JS file

1. Create an object that has properties "username" and "password". Fill those values in with strings.

2. Create an array which contains the object you have made above and name the array "database".

3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".*/

let company = {
    comName:"Coastline Graphic ltd",
    password:"C0031D60",
}
console.log(company);

let company1 = ["Coastline Graphic ltd" + ", " +  "C0031D60"];
console.log(company1);

let newsfeed = {
    socialMedia:["facebook, Instagram, Watsap" ],
    username:["John," ],
    timeline:[2012,2015,2018],

}
console.log(newsfeed);