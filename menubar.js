const headerItems = document.querySelectorAll('.header-menu > *');
const headerMenuButton = document.querySelector('.header-menu-button');
const headerMenuBar = document.querySelector('.header-menu-bar');
const headerNav = document.querySelector('.header-menu nav');

headerItems.forEach(item => {
    console.log("child element:", item);
});

headerMenuButton.addEventListener('click', () => {
    headerMenuBar.classList.toggle('opened');
    headerMenuBar.classList.toggle('closed');

    headerMenuButton.classList.toggle('closed');
    headerMenuButton.classList.toggle('opened');

    headerNav.classList.toggle('closed');
    headerNav.classList.toggle('opened');
});

