/*const myDiv =  document.querySelector("div");
console.log(myDiv);

const myDiv1 =  document.querySelector("#idDiv");
console.log(myDiv1);

const myDiv2 =  document.querySelector(".classDiv");
console.log(myDiv2);

const divList =  document.querySelector("div");
console.log(divList);

const parentDiv =  document.getElementById("parent");
console.log(parentDiv);

const classDiv =  document.getElementByClassName("classDiv");
console.log(classDiv);

const divs =  document.getElementByTagName("div");
console.log(divs);*/


//For each of the questions, find 2 WAYS of accessing :

//1. The div DOM node?

//3 ways to access the document:

/*const myDiv=document.querySelector("div");
console.log(myDiv);

const myDiv1=document.getElementsByTagName("div");
console.log(myDiv1[0]);

const myDiv2=document.getElementsByTagName("body")[0].firstElementChild;
console.log(myDiv2);


//2. The ul DOM node?

const ul=document.querySelector("ul");
console.log(ul);

const ul1=document.getElementsByTagName("ul");
console.log(ul1[0]);

//3. The second li (with Pete)?

const ul=document.querySelector("ul");
console.log(ul.children[1]);
const secondChildElement = ul.querySelector(":nth-child(2)");
console.log(secondChildElement);*/


//Inner HTML:manipulating/changing

const ul = document.querySelector("ul");
const div = document.querySelector("div");
const input=document.querySelector("#myInput")
//console.log(input);   //testing
//console.log(ul.innerHTML);
function changeHtml() {
    div.innerHTML = "Fruits";
    ul.innerHTML = `
    <li>Apple</li>
    <li>Banana</li>
    <li>Durian</li>
`;
}

//creating/adding/deleting DOM Nodes
//1.
/*function addListItem(){
    const newLi=document.createElement("li")
    const newText=document.createTextNode("new list item: )");
    newLi.append(newText);
    ul.append(newLi);
}*/

//2.
function addListItem(){
    //const newLi=document.createElement("li");
    // const newText=document.createTextNode("new list item: )");
    // newLi.append(newText);
    //newLi.innerHTML = "new list item";
    //ul.append(newLi);

 //<!----input.value---->
    const newLi=document.createElement("li");
    newLi.innerHTML = input.value;
    ul.append(newLi);
    input.value= "";
    //console.log(input.value);
}

function deleteElement(){
    ul.firstChild.remove();
}

function giveColor(){
    ul.style.backgroundColor = "red";
}



