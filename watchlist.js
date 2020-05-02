const watchlist = localStorage.getItem('.watch-movies')

const parsedList = JSON.parse(watchlist)

// document.addEventListener('clickDOMContentLoaded', function (){
    // document.addEventListener('submit', function (e) {
    //     e.preventDefault(parsedList);
    //     function renderMovies(movieArray) {
    //         let movieHtmlArray = movieArray.map(function (currentMovie) {
    //             return ` 
    //             <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
    //                 <div class="card w-100 h-100 ">
    //                     <img class="card-img-top w-100 p-3" src="${currentMovie.Poster}"  alt="Card image cap">
    //                         <div class="card-body">
    //                             <h5 class="card-title">${currentMovie.Title}</h5>
    //                             <p class="card-text">${currentMovie.Year}</p>
    //                             <a href='#/' id='trig1'>Trailer </a>
    //                             <iframe id='ifrm1' name='ifrm1' &autoplay=1; frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" src='${currentMovie.Intro}' width="200" height="200" ></iframe>
    //                             <a href="#" class="btn btn-primary p-2" onclick="saveToWatchlist('${currentMovie.imdbID}')" >Remove</a>
    //                          </div>
    //                     </img>
    //                 </div>
    //             </div>
    //             `
    //         });
    //         console.log(movieHtmlArray);
    //         return movieHtmlArray.join('');
    //     }
    //     const moviesContainer = document.querySelector('.watch-movies');
    //     moviesContainer.innerHTML = renderMovies(parsedList);
    // });
    // console.log(parsedList);
    
// })

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
        const moviesContainer = document.querySelector('.watch-movies');
        moviesContainer.innerHTML = renderMovies(parsedList);
    });

// movieList.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const moviesContainer = document.querySelector('.all-movies')
//     moviesContainer.innerHTML = renderMovies(movieData);
// });