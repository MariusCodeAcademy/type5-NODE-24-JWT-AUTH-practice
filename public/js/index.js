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
  renderArticles(jsData.data);
}
getArticles();

/* <article class="post">
  <h2>title</h2>
  <p>body</p>
  <p class="footer">data</p>
</article> */
function makeArticle(post) {
  const artEl = document.createElement('article');
  artEl.className = 'post';
  const h2El = document.createElement('h2');
  h2El.textContent = post.title;
  const pEl = document.createElement('p');
  pEl.textContent = post.content;
  const pElFooter = document.createElement('p');
  pElFooter.className = 'footer';
  pElFooter.textContent = post.date;
  artEl.append(h2El, pEl, pElFooter);
  return artEl;
}
function renderArticles(postsArray) {
  const postsEl = document.createElement('div');
  postsEl.className = 'posts';
  postsArray.forEach((post) => {
    const singlePost = makeArticle(post);
    postsEl.append(singlePost);
  });
  document.body.append(postsEl);
}
