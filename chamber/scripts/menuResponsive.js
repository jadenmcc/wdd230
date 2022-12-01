function toggleMenu () {
    document.getElementById('primary-nav').classList.toggle('open');
    document.getElementById('parent-primary-nav').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;