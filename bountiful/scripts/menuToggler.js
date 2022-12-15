function toggleMenu () {
    document.querySelector('.headboard').classList.toggle('open');
    document.querySelector('nav').classList.toggle('open');
    document.getElementById('nav-drawer').classList.toggle('open');
}

const x = document.getElementById('burger-button');
x.onclick = toggleMenu;