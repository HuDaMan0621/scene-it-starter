const allMovies = document.querySelector('.all-movies')
const movieList = document.getElementById('search-form');

document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieData) {
        let movieHtmlArray = movieData.map(function (currentMovie) {
            return ` 
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div class="card w-100 h-100">
                    <img class="card-img-top w-100 p-3" src="${currentMovie.Poster}"  alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${currentMovie.Title}</h5>
                        <p class="card-text">${currentMovie.Year}</p>
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


// movieList.addEventListener("submit", function (e) {
//     e.preventDefault();


// });
// let movies = [];
function saveToWatchlist(imdbID) {
    console.log(imdbID);
    const movie = movieData.find(currentMovie => currentMovie.imdbID == imdbID);
    console.log(movie);
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = []
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
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