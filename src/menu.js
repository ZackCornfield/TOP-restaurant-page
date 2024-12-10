import coffeeBeans from './assets/coffee-beans.png';

export default function loadMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-container');

    const menuHeading = document.createElement('h1');
    menuHeading.textContent = 'Our Menu';

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    const menuImage = document.createElement('img');
    menuImage.src = coffeeBeans; 
    menuImage.alt = 'Coffee beans';
    menuImage.classList.add('menu-image');

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const items = [
        { name: 'Arabica Beans', price: '$40.00', description: 'Smooth and complex flavor with a hint of sweetness.' },
        { name: 'Robusta Beans', price: '$45.00', description: 'Strong and bold flavor with a high caffeine content.' },
        { name: 'Liberica Beans', price: '$55.00', description: 'Unique and exotic flavor with a fruity aroma.' }
    ];

    items.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        listItem.appendChild(itemName);
        listItem.appendChild(itemPrice);
        listItem.appendChild(itemDescription);
        menuList.appendChild(listItem);
    });

    menuContent.appendChild(menuImage);
    menuContent.appendChild(menuList);

    menu.appendChild(menuHeading);
    menu.appendChild(menuContent);

    return menu;
}