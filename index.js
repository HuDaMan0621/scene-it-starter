const allMovies = document.querySelector('.all-movies')
const movieList = document.getElementById('search-form');

document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieData) {
        let movieHtmlArray = movieData.map(function (currentMovie) {
            return ` 
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div class="card w-100 h-100">
                    <img class="card-img-top w-100 p-3" src="${currentMovie.Poster}"  alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">${currentMovie.Title}</h5>
                        <p class="card-text">${currentMovie.Year}</p>
                        <a href='#/' id='trig1'>Trailer </a>
                        <iframe id='ifrm1' name='ifrm1' &autoplay=1; frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" src='${currentMovie.Intro}' width="200" height="200" ></iframe>
                        <a href="#" class="btn btn-primary p-2" onclick="saveToWatchlist('${currentMovie.imdbID}')" >Add to Favorite</a>
                    </div>
                </div>
            </div>
        `
        });
        console.log(movieHtmlArray);
        return movieHtmlArray.join('');
    }

    const moviesContainer = document.querySelector('.all-movies')
    moviesContainer.innerHTML = renderMovies(movieData);
});

// const searchFn =document.getElementById('search-bar')
movieList.addEventListener("submit", function (e) {
    e.preventDefault();
});


console.log('======================');
$(document).ready(function(){
    // Get value on button click and show alert
    $('sumbit').click(function(){
        var str = $('.search-bar').val();
        console.log(str);
    });
});

// const $submitBtn = $('submit')  //declare submitBtn 
// const $input = $('search-bar') //input value from search-bar
// $submitBtn.click(function () {    //click function when submit button is clicked
    
//     var searchString = document.getElementById('search-bar').value //searchString = value from search-bar
//     const newValue = searchString.val() //creates a newValue to hold the information from $field.val()
//     $item.text(newValue); //puts the newValue into text and name it $item
//     console.log(newValue);//print newValue
//     searchString.append($item) //append item to searchString. 
// })

// console.log(searchString);
console.log('!!!!!!!!!!!!!!!!!!!!!!');


// let movies = [];
function saveToWatchlist(imdbID) {
    console.log(imdbID);
    const movie = movieData.find(currentMovie => currentMovie.imdbID == imdbID);
    console.log(movie);
    let watchlistJSON = localStorage.getItem('.watch-movies');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = []
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    // localStorage.set('key',1);
    localStorage.setItem('.watch-movies', watchlistJSON);
    console.log(watchlistJSON);
    console.log(watchlist);
};
// Create the variable movie with const movie =
// Set it equal to movieData.find();
// Give the find method an anonymous function that takes currentMovie as a parameter
// Have this anonymous function return currentMovie.imdbID == imdbID;
// In the end, you’ll have
// const movie = movieData.find(function (currentMovie) {
//     return currentMovie.imdbID == imdbID;
// });


// addFavorite.addEventListener('click', function () {
//     console.log(currentMovie.imdbID)
        // addFavorite.textContent = "Generating Doggo...";

            // .then(function (data) {

            // console.log(currentMovie[2])
                // const img = document.createElement('img');
                // img.setAttribute('src', data.message);


                // const imagesDiv = document.getElementById('images');
                // imagesDiv.innerHTML = '';
                // imagesDiv.appendChild(img);

                // dogButton.textContent = 'Generate Doggo';
            // });
    // });
// })