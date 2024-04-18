document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const logo = document.querySelector(".logo");
    const navLinks = document.querySelector(".nav-list");
  
    logo.addEventListener("animationstart", function () {
      // Remove overflow:hidden during the animation
      body.style.overflow = "visible";
    });
  
    logo.addEventListener("animationend", function () {
      // Add overflow:hidden after the animation is complete
      body.style.overflow = "hidden";
    });
  
    navLinks.addEventListener("animationstart", function () {
      // Remove overflow:hidden during the navigation links animation
      body.style.overflow = "visible";
    });
  
    navLinks.addEventListener("animationend", function () {
      // Add overflow:hidden after the navigation links animation is complete
      body.style.overflow = "hidden";
    });
  });