// Запуск фоновой музыки по клику
const playButton = document.getElementById("playButton");
const bgAudio = document.getElementById("bgAudio");

playButton.addEventListener("click", () => {
  bgAudio.play();
  playButton.style.display = "none";
});