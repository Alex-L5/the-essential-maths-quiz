const VALID_PATHS = ["/", "/index.html", "/game.html","/highscores.html", "/end.html"];

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const isKnown = VALID_PATHS.includes(currentPath);
  if (!isKnown) {
    window.location.replace("/index.html");
  }
});