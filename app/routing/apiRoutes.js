var friends = require("app/data/friends.js");

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.post("/api/friends", function(req, res) {
  
    var newFriends = req.body;

    newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriends);

    characters.push(newFriends);
  
    res.json(newFriends);
 });
