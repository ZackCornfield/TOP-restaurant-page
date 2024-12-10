export default function loadContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-container');

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('contact-info-container');

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = 'Contact Us';

    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = '📍 123 Coffee Lane, Bean City<br>📞 (555) 123-4567<br>✉️ contact@caffeinateco.com';

    contactInfoContainer.appendChild(contactHeading);
    contactInfoContainer.appendChild(contactInfo);

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const formHeading = document.createElement('h1');
    formHeading.textContent = 'Send Us a Message';

    const form = document.createElement('form');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    const messageInput = document.createElement('textarea');
    messageInput.name = 'message';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageInput);
    form.appendChild(submitButton);

    formContainer.appendChild(formHeading);
    formContainer.appendChild(form);

    contact.appendChild(contactInfoContainer);
    contact.appendChild(formContainer);

    return contact;
}