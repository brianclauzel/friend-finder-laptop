var friends = require("../data/friends");
console.log(friends);

const sumOfArray = (array) => {
  return array.reduce((acc, cv) => acc + cv, 0)
}

const getUserScores = (array) => {
  return array.map(element => parseInt(element))
}

module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    return res.json(friends);
    console.log(friends);
    console.log(res.scores);
    console.log(req.scores);
  });

  app.post("/api/friends", function (req, res) {

    const userScores = getUserScores(req.body.scores)
    const mostCompatiible = friends
      .map(friend => {
        friend.diff = Math
          .abs(
            sumOfArray(friend.scores) -
            sumOfArray(getUserScores(req.body.scores))
          )
        return friend
      }).sort((a, b) => a.diff > b.diff)[0]
    res.json(mostCompatiible)

  });
};