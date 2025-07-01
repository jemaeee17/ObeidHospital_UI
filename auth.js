// Toggle password visibility for both fields
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", function () {
      const input = this.previousElementSibling;
      const type = input.getAttribute("type") === "password" ? "text" : "password";
      input.setAttribute("type", type);
      this.innerHTML = type === "password"
        ? '<i class="fas fa-eye"></i>'
        : '<i class="fas fa-eye-slash"></i>';
    });
  });

  // Register form submission with password check
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const modal = new bootstrap.Modal(document.getElementById("successModal"));
      modal.show();
      registerForm.reset();
    });
  }

  // Login form (if it exists)
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const modal = new bootstrap.Modal(document.getElementById("successModal"));
      modal.show();
      loginForm.reset();
    });
  }
});
