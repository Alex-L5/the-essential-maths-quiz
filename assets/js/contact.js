document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  const status = document.getElementById("feedback-status");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Please complete all fields with a valid email address.";
      form.reportValidity();
      return;
    }

    status.textContent = "Thank you. Your feedback has been received.";
    form.reset();
  });
});
