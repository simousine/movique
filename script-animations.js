document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll("#animation-categories .tile");
  const results = document.getElementById("animation-results");

  const animations = [
    { title: "Duckopolis", type: "2D" },
    { title: "Dream Circuit", type: "3D" },
    { title: "Cloth Wars", type: "Stop Motion" },
    { title: "Star Flow", type: "Anime" },
    { title: "Little Giants", type: "Kids" }
  ];

  categories.forEach(cat => {
    cat.addEventListener("click", () => {
      const picked = cat.textContent;
      const matched = animations.filter(a => a.type === picked);
      showAnimations(matched);
    });
  });

  function showAnimations(list) {
    results.innerHTML = "";

    if (list.length === 0) {
      results.innerHTML = "<p style='color:#ccc;'>No animations match this category.</p>";
      return;
    }

    list.forEach(anim => {
      const block = document.createElement("div");
      block.className = "tile";
      block.innerHTML = `
        <p><strong>${anim.title}</strong></p>
        <a href="player.html?animation=${encodeURIComponent(anim.title)}" class="watch-btn">Watch Now</a>
      `;
      results.appendChild(block);
    });
  }
});
