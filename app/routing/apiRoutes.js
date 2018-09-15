var friends = reuqire('../data/friends.js');

module.exports = function(app) {
  app.get('/api/friedns', function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends',function(req,res){
    var bestMatch ={
      name="",
      photo="",
      friendDifference=1000
    };
    var userData = req.body;
    var userName = userData.name;
    var userPhoto = userData.photo;
    var userScores = userData.scores;

    var totalDifference = 0;

    for(var i=0;i<friends.length;i++){
      console.log(friends[i].name)
      totalDifference = 0;

      for(var a=0;a<friends[i].socres[a];a++){
        totalDifference+=Marth.abs(parseInt(userScores[a]-parseInt(friends[i].scores[a])));
        if(totalDifference<=bestMatch.friendDifference){
          bestMatch.name=friends[i].name;
          bestMatch.photo=friends[i].photo;
          bestMatch.friendDifference=totalDifference;
        }
      }
    }
    friends.push(userData);
    res.json(bestMatch);
  })
};
