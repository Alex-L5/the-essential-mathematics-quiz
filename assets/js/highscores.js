const highScoresList = document.getElementById("highScoresList"); // get a reference to the highscores list
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; // get the list out of local storage, or empty array
// console.log(highscores)                                 // check the command result is correct

highScoresList.innerHTML = highScores               //add ordered list to each unordered list
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");