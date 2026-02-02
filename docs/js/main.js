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
// ---------- Contact Form: AJAX submit (Formspree) ----------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  if (!form) return; // not on contact page

  const successBox = document.getElementById("form-success");
  const errorBox = document.getElementById("form-error");
  const submitBtn = form.querySelector('button[type="submit"]');

  // Helper: show/hide elements safely
  const show = (el) => { if (el) el.style.display = "block"; };
  const hide = (el) => { if (el) el.style.display = "none"; };

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop page reload

    hide(successBox);
    hide(errorBox);

    // Disable button while sending
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
      // Formspree accepts FormData
      const formData = new FormData(form);

      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (res.ok) {
        // Success: hide form, show success message
        form.reset();
        form.style.display = "none";
        show(successBox);

        // Optional: scroll to success message
        successBox.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Formspree error
        show(errorBox);
      }
    } catch (err) {
      // Network error
      show(errorBox);
    } finally {
      // Re-enable button if form still visible
      if (submitBtn && form.style.display !== "none") {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    }
  });
});

