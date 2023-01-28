function searchMovie(){
    let movie = document.getElementById('movie_name').value;
    let response = fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${movie}`);
    // console.log('response:',response);

    response
    .then(function(success) {
        let data = success.json();
        data
        .then(function(success){
            console.log('success',success);
        })
        .catch(function(error){
            console.log('error',error);
        });
    })
    .catch(function(error) {
        console.log('error',error);
    });
}