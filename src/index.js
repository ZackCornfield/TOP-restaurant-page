import './style.css';

import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import loadHeader from './header';   

const header = loadHeader();
document.body.prepend(header);

const container = document.getElementById('content');
const home = loadHome();
const menu = loadMenu();
const contact = loadContact();
container.append(home, menu, contact);

function renderHome() {
    container.innerHTML = '';
    container.appendChild(home);
    setActiveTab('home-tab');
}

function renderMenu() {
    container.innerHTML = '';
    container.appendChild(menu);
    setActiveTab('menu-tab');
}

function renderContact() {
    container.innerHTML = '';
    container.appendChild(contact);
    setActiveTab('contact-tab');
}

function setActiveTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

function initializeTabs() {
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('contact-tab');

    homeTab.addEventListener('click', renderHome);
    menuTab.addEventListener('click', renderMenu);
    contactTab.addEventListener('click', renderContact);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    renderHome(); // Default to home tab on load
});
