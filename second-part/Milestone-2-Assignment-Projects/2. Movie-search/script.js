const apiKey = "b3d8a02c"; // Replace with your actual OMDB API key

// default image url if poster not found
const defaultImg="./assets/not-found.png"

// getting the search-button, searchBox = movieInput and movieDetails container
const searchButton = document.getElementById("searchButton");
const movieInput = document.getElementById("movieInput");
const movieDetails = document.getElementById("movieDetails");

// hide the movieDetails container if nothing has been searched
window.onload=function(){
  movieDetails.style.display="none"
}

// on clicking the search button
searchButton.addEventListener("click", async () => {
  //getting the searchBox value
  const searchTerm = movieInput.value.trim();

  if (searchTerm === "") {
    return;
  }

  
  const apiUrl = `https://www.omdbapi.com/?t=${searchTerm}&apikey=${apiKey}`;
  try {
    // fetch data and show the relevant movie
    const result = await fetch(`${apiUrl}`);
    const data = await result.json();
    if (data.Response == "True") {
      //show the movieDetails container after searching
      movieDetails.style.display="flex"
    displayMovieDetails(data);
     
    } else {
      movieDetails.innerHTML = "<p>Sorry! Movie not found :(</p>";
    }
  } catch (error) {
    // handling error
    console.error("Error fetching data:", error);
    movieDetails.innerHTML = "<p>An error occurred while fetching data</p>";
  }
});

// show the movie details on the page after searching
function displayMovieDetails(movie) {
  movieDetails.innerHTML = `
        <div class="left-part">
        <h2>${movie.Title}</h2>
        <img src="${(movie.Poster)=="N/A"?defaultImg:(movie.Poster)}" alt="${movie.Title} Poster">
        </div>
        <div class="right-part">
        <p><strong>Year:</strong> ${movie.Year}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        </div>
    `;
}
