const watchlist = localStorage.getItem('watchlist')

const parsedList = JSON.parse(watchlist)
console.log(parsedList);

document.addEventListener('submit', function (e) {
    e.preventDefault(parsedList);
    function renderMovies(movieArray) {
        let movieHtmlArray = movieArray.map(function (currentMovie) {
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
    const moviesContainer = document.querySelector('.watch-movies');
    moviesContainer.innerHTML = renderMovies(parsedList);
});

// movieList.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const moviesContainer = document.querySelector('.all-movies')
//     moviesContainer.innerHTML = renderMovies(movieData);
// });