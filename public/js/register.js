// 1. uzdedam formai eventa
console.log('register');
const BASE_URL = 'http://localhost:3000';
const formEl = document.forms.register;
const errorsContainerEl = document.querySelector('.errors');

// sustabdyti formos nustatytahi siuntima ir perkrovima
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const loginUserData = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
  };
  // validation
  // TODO:
  registerUser(loginUserData);
});

async function registerUser(loginUserData) {
  console.log('registerUser ===', loginUserData);
}
