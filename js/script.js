/* =====================================
   SMART FARMING DASHBOARD - SCRIPT.JS
   ===================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* -------------------------------------
     ACTIVE SIDEBAR MENU HIGHLIGHT
  ------------------------------------- */

  const navLinks = document.querySelectorAll(".sidebar nav a");

  // Get current file name (index.html, weather.html, etc.)
  let currentPage = window.location.pathname.split("/").pop();

  // If site is opened as folder, default to index.html
  if (currentPage === "") {
    currentPage = "index.html";
  }

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });


  /* -------------------------------------
     OPTIONAL: CLICK HIGHLIGHT (UI FEEL)
  ------------------------------------- */

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

});
