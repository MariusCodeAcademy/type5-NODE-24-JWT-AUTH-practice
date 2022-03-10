const BASE_URL = 'http://localhost:3000';

async function getArticles() {
  const token = localStorage.getItem('token24');
  const resp = await fetch(`${BASE_URL}/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const jsData = await resp.json();

  console.log('jsData===', jsData);
  if (jsData.success === false) {
    console.log('yra klaidu redirect');
    window.location.replace('login.html');
  }
  // renderArticles(jsData.data, PostDestination);
}
getArticles();
