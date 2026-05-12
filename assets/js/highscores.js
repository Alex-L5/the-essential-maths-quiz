const highScoresList = document.getElementById("highScoresList");
const clearScoresBtn = document.getElementById("clearScoresBtn");

function getHighScores() {
  return JSON.parse(localStorage.getItem("highScores")) || [];
}

function renderHighScores() {
  highScoresList.replaceChildren();

  getHighScores().forEach((score) => {
    const listItem = document.createElement("li");
    listItem.classList.add("high-score");
    listItem.textContent = `${score.name} - ${score.score}`;
    highScoresList.appendChild(listItem);
  });
}

clearScoresBtn.addEventListener("click", () => {
  localStorage.removeItem("highScores");
  renderHighScores();
});

renderHighScores();