let hamIcon = document.querySelector("#ham-icon");
let navLinks = document.querySelector(".nav-links");
let crossIcon = document.querySelector("#cross-icon");
let isSideMenuOpen = false;
hamIcon.addEventListener("click", () => {
  if (!isSideMenuOpen) {
    navLinks.style.display = "block";
    hamIcon.style.display = "none";
    crossIcon.style.display = "block";
    isSideMenuOpen = true;
  }
});
crossIcon.addEventListener("click", () => {
  if (isSideMenuOpen) {
    navLinks.style.display = "none";
    hamIcon.style.display = "block";
    crossIcon.style.display = "none";
    isSideMenuOpen = false;
  }
});
