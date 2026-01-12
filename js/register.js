document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Registration successful!");

  // Redirect to dashboard
  window.location.href = "dashboard.html";
});
