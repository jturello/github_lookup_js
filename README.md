Epicodus javascript Week 1 Code Review - Using an API

#### Description/Assignment: Create a website where the user can enter a GitHub username into a form, submit it, and see names and descriptions of that person's public repositories. Use the GitHub API to retrieve this information.

#### By James Turello

## Setup/Installation Instructions/Requirements

 * Clone the git repository
 * From a terminal window cd into the project's root directory ('github_lookup_js')
 * Run the following commands in the terminal window
   * npm install
   * bower install
 * You need a github Personal Access Token to run this app. Setup instructions:
  * go to the Settings page of your GitHub account
  * select *Personal Access Tokens* from the sidebar
  * click *Generate New Token*
  * select *Generate Token*
  * create a .env file in your project's root directory
  * if your token is 12345, save the following string in your .env file: `exports.apiKey = "12345";`
 * Again in your terminal window (from the project root directory), enter the following commands:
   * gulp build
   * gulp serve
 * Enter `localhost:3000` in your browser and enter a github id to search for and display


## Known Bugs/Issues

The input field is `required`. Because of the asynchronous nature of ajax calls, the validation message *please fill out this field* will display after you submit a request.

## Technologies Used

npm (Node Package Manager) 3.10.3, gulp 3.9.1, bower 1.7.9, tested on Chrome 52.0.2743.116 (64-bit)(Mac)

### License

This software is available for use under the MIT license.

Copyright (c) 2016 - James Turello
