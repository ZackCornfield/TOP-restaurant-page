export default function loadHome() {
    const home = document.createElement('div');
    home.classList.add('home-container');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Caffeniate Co.';

    const description = document.createElement('p');
    description.textContent = 'The finest coffee beans, delivered fresh to your door.';

    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about-section');

    const aboutHeading = document.createElement('h2');
    aboutHeading.textContent = 'About Us';

    const aboutText = document.createElement('p');
    aboutText.textContent = 'At Caffeniate Co., we are passionate about providing the best coffee experience. Our beans are sourced from the finest farms and roasted to perfection.';

    aboutSection.appendChild(aboutHeading);
    aboutSection.appendChild(aboutText);

    home.appendChild(heading);
    home.appendChild(description);
    home.appendChild(aboutSection);

    return home;
}