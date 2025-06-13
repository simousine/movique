document.addEventListener("DOMContentLoaded", () => {
  const genres = document.querySelectorAll("#genre-buttons .tile");
  const movieResults = document.getElementById("movie-results");

  const movies = [
    { title: "Skybreaker", genre: "Action" },
    { title: "Chrono Files", genre: "Sci-Fi" },
    { title: "Heartline", genre: "Romance" },
    { title: "Echolight", genre: "Thriller" },
    { title: "City Lock", genre: "Drama" }
  ];

  genres.forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.textContent;
      const matches = movies.filter(m => m.genre === selected);
      renderMovies(matches);
    });
  });

  function renderMovies(list) {
    movieResults.innerHTML = "";

    if (list.length === 0) {
      movieResults.innerHTML = "<p style='color:#ccc;'>No movies found in this genre.</p>";
      return;
    }

    list.forEach(movie => {
      const card = document.createElement("div");
      card.className = "tile";
      card.innerHTML = `
        <p><strong>${movie.title}</strong></p>
        <a href="player.html?title=${encodeURIComponent(movie.title)}" class="watch-btn">Watch Now</a>
      `;
      movieResults.appendChild(card);
    });
  }
});
