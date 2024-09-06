// const NavMenuBtn = document.getElementById("menu");
// const NavLink = document.getElementById('nav-res');

// NavMenuBtn.addEventListener("click", () => {
//     NavLink.classList.toggle('active');
// });
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const navRes = document.getElementById('nav-res');
    const navLinks = navRes.querySelectorAll('a');
    
    // Toggle the menu on button click
    menuButton.addEventListener('click', function () {
      navRes.classList.toggle('active');
    });
  
    // Close the menu when a link is clicked, but only on screens <= 660px
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 660) {
          navRes.classList.remove('active');
        }
      });
    });
  });
  