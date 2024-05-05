// fetch("https://api.chucknorris.io/jokes/random")
// .then(function(response){
//     //console.log(response);
//     if (response.ok){
//         return response.json();
//     }
// })
// .then(function(result){
//     // console.log(result);
//     console.log(result.value);
// });


//fetch api for post request

postData={
    method: "POST",
    body: JSON.stringify({
        title: "Article on Javascript",
        body: "This is an article presenting the new features of Javascript", 
        userId:1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }

}

fetch("https://jsonplaceholder.typicode.com/posts",postData)
.then(function(response){
    if (response.ok){
        return response.json();
    }
})
.then( function (result){
    console.log(result);
})