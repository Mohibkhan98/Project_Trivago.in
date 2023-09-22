
const createForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');

createForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check if password input is empty
  if (!passwordInput.value) {
    const passwordError = document.createElement('p');
    passwordError.textContent = 'Enter your password';
    passwordError.style.color = 'red';
    passwordError.style.textAlign = 'center';
    passwordInput.insertAdjacentElement('afterend', passwordError);
    return; // stop the function execution
  }

  // Store the password entered by user in local storage with email key
  const storedEmail = localStorage.getItem('email');
  localStorage.setItem(storedEmail, passwordInput.value);

  // Redirect to index.html page
  window.location.href = 'index.html';
});

// Show email and navigate to login page when clicked
const emailLabel = document.querySelector('[for="email"]');
const storedEmail = localStorage.getItem('email');
emailLabel.innerHTML = `< ${storedEmail}`;
emailLabel.addEventListener('click', () => {
  window.location.href = 'login.html';
});

// Insert emailLabel element before h1 element
const mainDiv = document.getElementById('main');
const h1Element = document.querySelector('#main h1');
mainDiv.insertBefore(emailLabel, h1Element);

// Adjust position of emailLabel element
emailLabel.style.marginTop = '30px';
emailLabel.style.marginBottom = '0px'

const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
passwordLabel.textContent = 'Password';

const passwordInp = document.getElementById('password');
passwordInp.insertAdjacentElement('beforebegin', passwordLabel);

// Remove error message when user enters a password
passwordInput.addEventListener('input', () => {
  const passwordError = document.querySelector('#password + p');
  if (passwordInput.value && passwordError) {
    passwordError.remove();
  }
});




