
fetch("navbar.html")
.then(Response => Response.text())
.then(data => {
    document.getElementById("navbar-fetch").innerHTML = data;

    const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = "X";
        menuBtn.setAttribute("aria-expanded", "true");
    } else { 
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

})
.catch(error => console.error("The menu doesn't work:", error));