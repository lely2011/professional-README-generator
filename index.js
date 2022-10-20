// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, tableContents, installation, usage, credits, license }) =>
`# ${title}

## ${description}

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## ${tableContents}

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## ${installation}

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## ${usage}

Provide instructions and examples for use. Include screenshots as needed.

## ${credits}

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## ${license}

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---`

inquirer
  .prompt([
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
        name: 'tableContents',
        message: 'Does your project have multiple sections?',
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
        type: 'input',
        name: 'license',
        message: 'Which license would you like to include?',
      },
  ])

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
// FileSystem.writeToFile('README.generate', generateREADME)

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
