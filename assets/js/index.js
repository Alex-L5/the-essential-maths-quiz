document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("instructions-toggle");
  const instructions = document.getElementById("instructions");

  if (!toggleButton || !instructions) {
    return;
  }

  toggleButton.addEventListener("click", () => {
    instructions.classList.toggle("hidden");
    const isHidden = instructions.classList.contains("hidden");
    toggleButton.textContent = isHidden ? "Show instructions" : "Hide instructions";
  });
});