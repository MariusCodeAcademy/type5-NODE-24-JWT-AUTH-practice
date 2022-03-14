const BASE_URL = 'http://localhost:3000';
const myTutBtnEl = document.getElementById('my-tut-btn');

async function getTutorials() {
  const token = localStorage.getItem('token24');
  const resp = await fetch(`${BASE_URL}/tutorials`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
}
getTutorials();

myTutBtnEl.addEventListener('click', async () => {
  const token = localStorage.getItem('token24');
  const resp = await fetch(`${BASE_URL}/user-tutorials/5`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
});
