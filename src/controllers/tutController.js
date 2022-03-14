const { getTutorialsByUserIdDb } = require('../model/tutModel');
const { failResponce, successResponce } = require('../utils/dbHelpers');

async function getTutorialByUserId(req, res) {
  const userId = req.params.user_id;
  const foundTutorials = await getTutorialsByUserIdDb(userId);

  return foundTutorials === false
    ? failResponce(res)
    : successResponce(res, foundTutorials);
}

module.exports = {
  getTutorialByUserId,
};
