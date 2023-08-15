// omdb apiKey
const apiKey = "b3d8a02c";
//initializing the searchItem
let searchTerm="avenger";
// movies section
const moviesSection = document.querySelector(".movies");

// searchbox
const searchBar = document.querySelector(".search-box");

// function to fetch all the movies
const getMovies = async () => {
  try {
    const movies = await fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
    );
    const data = await movies.json();
    // return all the elements of search array
    return data.Search;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// function to show all movies in dom
const showAllMovies = async () => {
  // getting all the movies
  const movies = await getMovies();

  // creating a movie-card for each movie
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `<img class="movie-img" src=${movie.Poster} alt=${movie.Title} />
        <p class="movie-title">${movie.Title}</p>
        <button class="watch">Watch Now</button>`;
    moviesSection.appendChild(movieCard);
  });
};

showAllMovies();

// functionality of searchBar
searchBar.onkeyup = function (e) {
  let filter = e.target.value.toUpperCase();

  let movieCards = moviesSection.getElementsByTagName("div");

  for (let i = 0; i < movieCards.length; i++) {
    const title = movieCards[i].querySelector("p");

    if (title) {
      let titleVal = title.textContent || title.innerHTML;

      if (titleVal.toUpperCase().indexOf(filter) > -1) {
        movieCards[i].style.display = "";
      } else {
        movieCards[i].style.display = "none";
      }
    }
  }
};