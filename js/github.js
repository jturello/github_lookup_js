var apiKey = require('./../.env').apiKey;

function Github(){
}

Github.prototype.getRepos = function(user_id) {
  console.log("Hi! I'm a github object.");
  console.log("This is the user_id: " + user_id);
  $.get('https://api.github.com/users/' + user_id + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubModule = Github;










exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
