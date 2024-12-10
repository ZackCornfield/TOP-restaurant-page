export default function loadHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');

    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.textContent = 'Caffeniate Co.';

    logoContainer.appendChild(logo);

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const menu = document.createElement('ul');
    menu.classList.add('nav');

    const homeLink = document.createElement('li');
    homeLink.classList.add('nav-item');
    homeLink.id = 'home-tab';   
    homeLink.textContent = 'Home';

    const menuLink = document.createElement('li');
    menuLink.classList.add('nav-item');
    menuLink.id = 'menu-tab';
    menuLink.textContent = 'Menu';

    const contactLink = document.createElement('li');
    contactLink.classList.add('nav-item');
    contactLink.id = 'contact-tab';
    contactLink.textContent = 'Contact';

    menu.appendChild(homeLink);
    menu.appendChild(menuLink);
    menu.appendChild(contactLink);

    nav.appendChild(menu);

    header.appendChild(logoContainer);
    header.appendChild(nav);

    return header;
}