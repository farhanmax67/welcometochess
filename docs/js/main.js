// main.js
console.log("JavaScript connected");
// main.js
console.log("JavaScript connected");

/* =========================
   LESSON TAB FUNCTIONALITY
   ========================= */

const lessonTabs = document.querySelectorAll(".lesson-tab");
const lessonPanels = document.querySelectorAll(".lesson-panel");

lessonTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    lessonTabs.forEach(t => t.classList.remove("active"));
    lessonPanels.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    const lessonId = tab.dataset.lesson;
    document.getElementById(lessonId).classList.add("active");
  });
});

/* =========================
   QUIZ & PRACTICE FEEDBACK
   ========================= */

const quizButtons = document.querySelectorAll(".quiz-option");

quizButtons.forEach(button => {
  button.addEventListener("click", () => {
    const parent = button.parentElement;
    const feedback =
      parent.querySelector(".quiz-feedback") ||
      parent.parentElement.querySelector(".quiz-feedback");

    if (button.dataset.correct === "true") {
      feedback.textContent = "✅ Correct! Well done.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Try again. Think carefully.";
      feedback.style.color = "red";
    }
  });
});

/* =========================
   LEARNING PATH REDIRECTS
   ========================= */

document.querySelectorAll(".path-btn").forEach(button => {
  button.addEventListener("click", () => {
    const path = button
      .closest(".path-card")
      .querySelector(".path-tag")
      .textContent.toLowerCase();

    if (path.includes("beginner")) {
      window.location.href = "beginner.html";
    } else if (path.includes("intermediate")) {
      window.location.href = "intermediate.html";
    } else if (path.includes("advanced")) {
      window.location.href = "advanced.html";
    }
  });
});
