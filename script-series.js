document.addEventListener("DOMContentLoaded", () => {
  const genres = document.querySelectorAll("#series-genres .tile");
  const results = document.getElementById("series-results");

  const seriesList = [
    { title: "Laugh Riot", genre: "Comedy" },
    { title: "Heartline", genre: "Drama" },
    { title: "Nova Crypt", genre: "Mystery" },
    { title: "Sky Trails", genre: "Adventure" },
    { title: "Shade Watchers", genre: "Supernatural" }
  ];

  genres.forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.textContent;
      const filtered = seriesList.filter(s => s.genre === selected);
      displaySeries(filtered);
    });
  });

  function displaySeries(list) {
    results.innerHTML = "";

    if (!list.length) {
      results.innerHTML = "<p style='color:#ccc;'>No series found for this genre.</p>";
      return;
    }

    list.forEach(show => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.innerHTML = `
        <p><strong>${show.title}</strong></p>
        <a href="player.html?series=${encodeURIComponent(show.title)}" class="watch-btn">Watch Now</a>
      `;
      results.appendChild(tile);
    });
  }
});
