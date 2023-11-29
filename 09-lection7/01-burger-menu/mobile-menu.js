const menu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('mobile-menu-close');
const menuOpen = document.getElementById('mobile-menu-open');

if (menuOpen) {
    menuOpen.addEventListener('click', function() {
        if (menu) {
            menu.setAttribute('data-open', '');
        }
    });
}

if (menuClose) {
    menuClose.addEventListener('click', function() {
        if (menu) {
            menu.removeAttribute('data-open');
        }
    });
}
