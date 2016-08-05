var Github = require('./../js/github.js').githubModule;

$(document).ready(function(){

  $('#getGithub').click(function(){
    var user_id = $('#user_id').val();
    $('#user_id').val("");

    var githubObj = new Github();
    githubObj.getRepos(user_id);

    $('.output').text("user_id = " + user_id + "!");
  });
});
