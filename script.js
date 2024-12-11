document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    const menuStateKey = 'menuOpen';

    // Load menu state from local storage
    const savedMenuState = localStorage.getItem(menuStateKey);
    if (savedMenuState === 'true') {
        nav.style.display = 'block';
    }

    menuBtn.addEventListener('click', () => {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
            localStorage.setItem(menuStateKey, 'false');
        } else {
            nav.style.display = 'block';
            localStorage.setItem(menuStateKey, 'true');
        }
    });
});
