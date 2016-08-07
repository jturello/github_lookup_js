var apiKey = require('./../.env').apiKey;

function Github(){
}

Github.prototype.getRepos = function(user_id, displayFunction) {
  var repos = [];
  var repo = [];

  $.get('https://api.github.com/users/' + user_id + '/repos?access_token=' + apiKey).then(function(response){

    console.log('https://api.github.com/users/' + user_id + '/repos?access_token=' + apiKey);
    console.log(response);
    console.log(response.length);

    if (response.length < 1) {
      $('#err').text("Github returned an empty payload");
      return false;
    }

    for (i=0; i < response.length; i++){
      repo = [];
      repo.push(response[i].owner.html_url + "/" + response[i].name);
      repo.push(response[i].name);
      repo.push(response[i].description);

      repos.push(repo);
    }
    displayFunction(user_id, repos);

  }).fail(function(error){
    $('#err').text(error.responseJSON.message);
  });
};

exports.githubModule = Github;
