/*Hint: if statement (tomorrow’s lesson)

Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
Find the word “Nemo”
Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
If you can’t find Nemo, console.log “I can’t find Nemo”.*/

let strSentence = ("I love the movie named Nemo");
let searchWord = strSentence[5];
console.log(searchWord);

let strSentence2 = ("Nemo is a cute fish");
let searchWord2 = strSentence2[0];
console.log("I found Nemo at " + searchWord2);

if(searchWord == "I found Nemo")
{
    console.log(searchWord);
  }
  else if(searchWord != "I found Nemo")
  {
    console.log("I can't find Nemo");
  }

  
