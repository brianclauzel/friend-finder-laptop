var friends = require("../data/friends");
console.log(friends);

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
      return res.json(friends);
      console.log(friends);
      console.log(res.scores);
      console.log(req.scores);
    });

  app.post("/api/friends", function(req, res) {

    
      var newFriends = req.body;

      // console.log(newFriends);

      friends.push(newFriends);
    
      res.json(newFriends);

      console.log(newFriends)

  });
};