let hamIcon = document.querySelector("#ham-icon");
let navLinks = document.querySelector(".nav-links");
let isSideMenuOpen = false;
hamIcon.addEventListener("click", () => {
  if (!isSideMenuOpen) {
    navLinks.style.right = "0";
    isSideMenuOpen = true;
  } else {
    navLinks.style.right = "-200px";
    isSideMenuOpen = false;
  }
});
