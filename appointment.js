document.addEventListener("DOMContentLoaded", function () {
  // Success Modal on Form Submit
  const form = document.getElementById("appointmentForm");
  const successModalElement = document.getElementById("successModal");

  if (form && successModalElement) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const successModal = new bootstrap.Modal(successModalElement);
      successModal.show();

      form.reset();
    });
  }

  // Doctor Pre-selection via URL Parameter
  const params = new URLSearchParams(window.location.search);
  const selectedDoctor = params.get("doctor");

  if (selectedDoctor) {
    const doctorSelect = document.getElementById("doctor");
    const options = doctorSelect.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].text === selectedDoctor) {
        options[i].selected = true;
        break;
      }
    }
  }
});