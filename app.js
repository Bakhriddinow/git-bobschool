const NavMenuBtn = document.getElementById("menu");
const NavLink = document.getElementById('nav-res');

NavMenuBtn.addEventListener("click", () => {
    NavLink.classList.toggle('active');
});
