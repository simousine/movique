document.addEventListener("DOMContentLoaded", () => {
  const liveContainer = document.getElementById("live-matches");
  const upcomingContainer = document.getElementById("upcoming-events");
  const highlightContainer = document.getElementById("highlight-reel");

  const liveMatches = [
    { title: "Lakers vs Heat", status: "Live" },
    { title: "Arsenal vs Barcelona", status: "Live" }
  ];

  const upcomingEvents = [
    { title: "Bulls vs Celtics", time: "8:00 PM" },
    { title: "PSG vs Bayern", time: "10:30 PM" }
  ];

  const highlights = [
    "Man City vs Real Madrid",
    "Golden State vs Bucks",
    "SA vs India – ODI"
  ];

  function renderLive() {
    liveMatches.forEach(match => {
      const div = document.createElement("div");
      div.className = "tile";
      div.innerHTML = `
        <p><strong>${match.title}</strong></p>
        <a href="player.html?sport=${encodeURIComponent(match.title)}" class="watch-btn">Watch Live</a>
      `;
      liveContainer.appendChild(div);
    });
  }

  function renderUpcoming() {
    upcomingContainer.innerHTML = upcomingEvents.map(evt => `
      <div class="tile">
        <p><strong>${evt.title}</strong></p>
        <small>Kickoff: ${evt.time}</small>
      </div>
    `).join("");
  }

  function renderHighlights() {
    highlightContainer.innerHTML = highlights.map(clip => `
      <div class="tile">
        <p>${clip}</p>
        <a href="player.html?sport=${encodeURIComponent(clip)}" class="watch-btn">Watch Replay</a>
      </div>
    `).join("");
  }

  renderLive();
  renderUpcoming();
  renderHighlights();
});
