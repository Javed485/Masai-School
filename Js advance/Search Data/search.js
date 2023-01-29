// async function searchMovie(){
//     let movie = document.getElementById('movie_name').value;
//     let response = await fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${movie}`);
//     // console.log('response:',response);

//     let data = await response.json();
//     let actualData = data.Search;
//     console.log('actualData', actualData);
// }

async function searchMovie(){
    let movie = document.getElementById('movie_name').value;
    try{
        let response = await fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${movie}`);
        let data = await response.json();
        let actualData = data.Search;
        console.log('actualData', actualData);
    }
    catch(err){
        console.log('err', err);
    }
}