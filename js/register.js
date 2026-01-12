document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Registration successful!");

    // redirect to dashboard
    window.location.href = "dashboard.html";
  });
});
