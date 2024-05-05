// function add(a,b){
//     return a+b;
// }

// function main(){
//     a=1;
//     b=2;
//     c=add(a,b);
//     console.log(c);
// }

// main();

// async function process(){

// }


// async function main(){

// }

// main();

async function fetchJoke(){
    try{
        joke=await fetch("https://api.chucknorris.io/jokes/random");
        joke=await joke.json();
        return joke.value;
    }catch(error){
        console.log(error);
    }
}

async function main(){
    // var start=Date.now();
    i=0;
    for (let i=0;i<10;i++){
        i=i+1;
        console.log(i+" : "+ await fetchJoke());
    }
    // var end=Date.now();
    // console.log("Time taken: "+((end-start)/1000));
}

main();
main();
main();
main();
main();
main();
main();
main();
main();
main();
main();