const { getArticles } = require('../model/articleModel');
const { failResponce, successResponce } = require('../utils/dbHelpers');

async function listArticles(req, res) {
  const foundArticles = await getArticles();

  return foundArticles === false
    ? failResponce(res)
    : successResponce(res, foundArticles);
}

module.exports = {
  listArticles,
};
