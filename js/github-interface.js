var Github = require('./../js/github.js').githubModule;

var displayRepoInfo = function(user_id, repos) {
  // console.log("displayRepos - top");

  $('#repo_list_header').text("Public github repos for id - " + user_id + ":");
  $('#repo_list_sub_header').text("Link format: 'name : description'. Click a link to open the github project page.");

  for (i=0; i < repos.length; i++) {
    $('#repo_list').append("<li><a href='" + repos[i][0] + "'>" + repos[i][1] + " : " + repos[i][2] + "</a></li>");
  }
// console.log("end of display repos");
};

    // console.log("no man's land");

$(document).ready(function(){
    // console.log("doc ready");

  $('#getGithub').click(function(){
    // console.log("click - start");

    var user_id = $('#user_id').val();

    $('#user_id').val("");
    $('#repo_list_header').text("");
    $('#repo_list_sub_header').text("");
    $('#repo_list').empty();
    $('#err').text("");

    if(user_id === "") {
    // console.log("id == empty");

      $('#err').text("Enter an ID and try again!");
      return false;
    }

    var githubObj = new Github();
    githubObj.getRepos(user_id, displayRepoInfo);

    // console.log("click - after api call");
  });
});
