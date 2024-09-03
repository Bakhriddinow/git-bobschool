const NavMenuBtn = document.getElementById("menu");
const NavLink = document.getElementById('nav-res')
NavMenuBtn.addEventListener("click", () => {
    if(NavLink.style.left === '-100%'){
        NavLink.style.left = '0'
    } else{
        NavLink.style.left = '-100%'
    }
});
