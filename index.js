// Function to fetch and display initial movies
function displayInitialMovies() {
    axios
      .get(`https://www.omdbapi.com/?apikey=45f0782a&s=avengers`)
      .then((res) => {
        if (res.data.Response == "True") {
          let movies = res.data.Search;
          movieContainer.innerHTML = "";
          movieStatus.innerHTML = ""; // Clear previous content
  
          movies.map((movie, index) => {
            movieContainer.innerHTML += `
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="card" style="width: 18rem">
                  <img src="${movie.Poster}" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Title:  ${movie.Title}</h5>
                    <p class="card-text">Year:  ${movie.Year}</p>
                  </div>
                </div>
              </div>
            `;
          });
        } else {
          movieContainer.innerHTML = `<h2 style="text-align:center"> Movie not Found</h2>`;
          movieStatus.innerHTML = "";
        }
      });
  }
  
  // Call the function when the page loads
  displayInitialMovies();
  
  let submitBtn = document.getElementById("search-btn");
  let movieName = document.getElementById("movie-name");
  let movieContainer = document.getElementById("rowId");
  let movieStatus = document.getElementById("load");
  
  submitBtn.addEventListener("click", function () {
    movieStatus.innerHTML = "Loading...";
    if (movieName.value == "") {
      alert("Please enter movie name");
      movieStatus.innerHTML = "";
    } else {
      axios
        .get(`https://www.omdbapi.com/?apikey=45f0782a&s=${movieName.value}`)
        .then((res) => {
          if (res.data.Response == "True") {
            let movies = res.data.Search;
            movieContainer.innerHTML = "";
            movieStatus.innerHTML = ""; // Clear previous content
  
            movies.map((movie, index) => {
              movieContainer.innerHTML += `
              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="card" style="width: 18rem">
                  <img src="${movie.Poster}" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Title:  ${movie.Title}</h5>
                    <p class="card-text">Year:  ${movie.Year}</p>
                  </div>
                </div>
              </div>
            `;
            });
          } else {
            movieContainer.innerHTML = `<h2 style="text-align:center"> Movie not Found</h2>`;
            movieStatus.innerHTML = "";
          }
        });
    }
  });
  
