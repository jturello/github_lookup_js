var Github = require('./../js/github.js').githubModule;

var displayRepoInfo = function(user_id, repos) {
  for (i=0; i < repos.length; i++) {
    $('#repo_list').append("<li><a href='" + repos[i][0] + "'>" + repos[i][1] + " : " + repos[i][2] + "</a></li>");
  }
};

$(document).ready(function(){

  $('#getGithub').click(function(){
    var user_id = $('#user_id').val();
    $('#user_id').val("");

    if(user_id === "") { return; }

    var githubObj = new Github();
    githubObj.getRepos(user_id, displayRepoInfo);

    $('#repo_list_header').text("Public github repos for id - " + user_id + ":");
    $('#repo_list_sub_header').text("Link format: 'project_name : project_description'. Click on a link to open the project page in github.")

  });
});
