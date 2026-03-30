/**
 * Generates a random hex color code.
 * @returns {string} A hex color string (e.g. "#a1b2c3")
 */
function getRandomColor() {
  const hexChars = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  const hexCodeEl = document.getElementById("hexCode");
  const announce = document.getElementById("colorAnnouncement");
  if (hexCodeEl) {
    hexCodeEl.textContent = newColor;
  }
  if (announce) {
    announce.textContent = "Background color is now " + newColor;
  }
}

const changeColorBtn = document.getElementById("changeColorBtn");
if (changeColorBtn) {
  changeColorBtn.addEventListener("click", changeBackgroundColor);
}
