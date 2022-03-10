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
  const resp = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginUserData),
  });
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
  if (dataInJs.success === false) {
    handleErrors(dataInJs.error);
  }
  if (dataInJs.success === true) {
    window.location.replace('login.html');
  }
}

function handleErrors(erorrArray) {
  errorsContainerEl.innerHTML = '';
  console.log('erorrArray ===', erorrArray);
  erorrArray.forEach((err) => {
    errorsContainerEl.innerHTML += `<p>${err.message}</p>`;
  });
}
