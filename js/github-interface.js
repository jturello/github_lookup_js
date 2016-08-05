var Github = require('./../js/github.js').githubModule;

$(document).ready(function(){

  $('#getGithub').click(function(){
    var user_id = $('#user_id').val();
    $('#user_id').val("");

    if(user_id !== "") {
      var githubObj = new Github();
      var result = githubObj.getRepos(user_id);
      
      console.log("hi");
    }

  });
});
