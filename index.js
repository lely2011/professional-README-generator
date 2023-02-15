// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');



// TODO: Create an array of questions for user input
async function promptUser(){
  const responses = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
      },
      {
          type: 'input',
          name: 'description',
          message: 'What is your project about?',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Are there additional installation needed?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Are there instruction and example for use?',
        },
        {
          type: 'input',
          name: 'credits',
          message: 'Any credits to add?',
        },
        {
          type: 'list',
          name: 'license',
          message: 'Which license would you like to include?',
          choices: [
            {value: 'Apache'},
            {value: 'BSD3'},
            {value: 'LGPL'},
            {value: 'MIT'},
            {value: 'None'},
          ]
        },
        {
          type: "input",
          name: "username",
          message: "Enter your GitHub username:",
        },
        {
          type: "input",
          name: 'email',
          message: "Enter your email:"
        },
    ]);
    fs.writeFile('ReadMe.generate ', generateMarkdown(responses))
}

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
   promptUser()
}


// Function call to initialize app
init();
