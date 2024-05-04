/* Hint: Use Switch Case JavaScript

Ask the user which language they speak.

Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

Create a few conditions :
If the user speaks French : display “Bonjour”
If the user speaks English : display “Hello”
If the user speaks Hebrew : display “Shalom”
If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’ */


//let language = ["English, French, Spanish, Hebrew, Arabic"];
//let user = prompt ("Language speak");




function welcomeUser() {
    let user = prompt("Which language do you speak?");
    var lowerCaseInput = user.toLowerCase();
    var greeting;

    switch (lowerCaseInput) {
        case "french":
            greeting = "Bonjour";
            break;
        case "english":
            greeting = "Hello";
            break;
        case "hebrew":
            greeting = "Shalom";
            break;
        default:
            greeting = "01110011 01101111 01110010 01110010 01111001";
    }

    alert(greeting);
}

welcomeUser();
