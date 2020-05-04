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
                        <a href="#" class="btn btn-primary p-2" onclick="saveToWatchlist('${currentMovie.imdbID}')" >Add to Favorite</a>
                    </div>
                </div>
            </div>
        `
        });
        console.log(movieHtmlArray);
        return movieHtmlArray.join('');
    }

});

const submit = document.querySelector('#search-form')
$(document).ready(function () {
    // Get value on button click and show alert
    function renderMovies(movieData) {
        let movieHtmlArray = movieData.map(function (currentMovie) {
            return ` 
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <div class="card w-100 h-100">
                        <img class="card-img-top w-100 p-3" src="${currentMovie.Poster}"  alt="Card image cap"></img>
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
    $('#search-form').submit(function (e) {  //keep in mind, submit function is getting the information from the search form 
        e.preventDefault();


        var str = $('#search-bar').val();
        console.log(str);
        // submit.append(str);
        let urlEncodedSearchString = encodeURIComponent(str);  //step 1 to 5
        axios.get("https://www.omdbapi.com/?apikey=efe3c50b&s=" + urlEncodedSearchString) //send a request to this website 
            //use the searching on line 47 "urlEncodedSearchString" which is whatever they typed in the searchbar.
            .then(function (response) {
                console.log(response.data);

                const moviesContainer = document.querySelector('.all-movies')
                moviesContainer.innerHTML = renderMovies(response.data.Search);
            }
            )  //promise do this when it gets back


    });
});

function saveToWatchlist(imdbID) {
    // console.log(imdbID);

    axios.get("https://www.omdbapi.com/?apikey=efe3c50b&i=" + imdbID)
    .then(function (response) {
        const movie = response.data
        console.log(response.data);
        let watchlistJSON = localStorage.getItem('.watch-movies');
        let watchlist = JSON.parse(watchlistJSON);
        if (watchlist == null) {
            watchlist = []
        }
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        // localStorage.set('key',1);
        localStorage.setItem('.watch-movies', watchlistJSON);
        // console.log(watchlistJSON);
        // console.log(watchlist);
    });
};