var apiKey = require('./../.env').apiKey;

function Github(){
  var result = "";
}

Github.prototype.getRepos = function(user_id) {

  console.log("Hi! I'm a github object.");
  console.log("This is the user_id: " + user_id);

  $.get('https://api.github.com/users/' + user_id + '?access_token=' + apiKey).then(function(response){

    console.log(JSON.stringify(response));
    // console.log(JSON.stringify(response[0].name));
    // console.log(JSON.stringify(response[0].description));
    return response;

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;
