const {
  getTutorialsByUserIdDb,
  getTutorialsDb,
  getPublicTutorials,
} = require('../model/tutModel');
const { failResponce, successResponce } = require('../utils/dbHelpers');

async function getTutorialByUserId(req, res) {
  const userId = req.params.user_id;
  // pasiimti id is token
  // const userId  = req.userId;
  const foundTutorials = await getTutorialsByUserIdDb(userId);

  return foundTutorials === false
    ? failResponce(res)
    : successResponce(res, foundTutorials);
}

async function getTutorials(req, res) {
  // let foundTutorials = await getTutorialsDb();
  let foundTutorials;
  if (req.validUser === true) {
    // visi tutorial
    foundTutorials = await getTutorialsDb();
  } else {
    // public tutorial
    foundTutorials = await getPublicTutorials();
  }

  return foundTutorials === false
    ? failResponce(res)
    : successResponce(res, foundTutorials);
}

module.exports = {
  getTutorialByUserId,
  getTutorials,
};
