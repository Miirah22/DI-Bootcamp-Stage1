function custom(){
    console.log('custom function has been called');
}

var x=0;
x=x+1;
setTimeout(custom, 5000); //wait 5 seconds then call function custom
console.log(x);