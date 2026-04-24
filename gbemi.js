const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* CLOSE MENU WHEN LINK IS CLICKED */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* CLOSE MENU WHEN USER CLICKS OUTSIDE */

document.addEventListener("click", (e) => {

    if(
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ){
        navLinks.classList.remove("active");
    }

});
