// document.addEventListener('DOMContentLoaded', function () {
//     function renderMovies(movieData) {
//         let movieHtmlArray = movieData.map(function (currentMovie) {
//             return ` 
//             <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
//                 <div class="card w-100 h-100">
//                     <img class="card-img-top w-100 p-3 " src="${currentMovie.Poster}" alt="Card image cap">
//                         <div class="card-body">
//                             <h5 class="card-title">${currentMovie.Title}</h5>
//                             <p class="card-text">${currentMovie.Year}</p>
//                             <a href="#" class="btn btn-primary" onclick="saveToWatchList('${currentMovie.imdbID}')" >Add to Favorite</a>
//                         </div>    
//                 </div>
//             </div> `
//         });
//         // console.log(movieHtmlArray);
//         return movieHtmlArray.join('');
//     };
// });

// // const allMovies = document.querySelector('.all-movies')
// const movieList = document.getElementById('search-form');

// movieList.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const moviesContainer = document.querySelector('.all-movies')
//     moviesContainer.innerHTML = renderMovies(movieData);
// });