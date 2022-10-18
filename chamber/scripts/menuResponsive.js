function toggleMenu () {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('parentPrimaryNav').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;