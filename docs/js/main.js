// main.js
console.log("JavaScript connected");
// Quiz / Puzzle logic
function checkAnswer(button, correct) {
  const feedback = button.parentElement.querySelector(".feedback");

  if (correct) {
    feedback.textContent = "✅ Correct! Well done.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Try again. Think carefully.";
    feedback.style.color = "red";
  }
}
