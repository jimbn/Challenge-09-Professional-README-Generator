const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user input
const questions = [
    // default <type> === 'input'
  {
    name: 'title',
    message: 'Provide the title of the project. (Required)',
    // <validate> ensure user makes an input
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please provide the title of the project.')
            return false;
        }
    }
  },
  {
    name: 'description',
    message: 'Provide a description of the project. (Required)',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please provide a description for the project.')
            return false;
        }
    }
  },
    //confirm with user if section is needed
  {
      type: 'confirm',
      name: 'confirmInstallation',
      message: 'Is there an instruction for installation?'
  },
  {
    name: 'installation',
    message: 'Provide an instruction on how to install the project.',
    // <when> allow prompt to ask if confirmation is true.
    when: ({confirmInstallation}) => { 
        if (confirmInstallation) {
            return true;
        } else {
            return false;
        }
    }
  },
  {
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Is there an instruction for using the project?'
  },
  {
    name: 'usage',
    message: 'Provide information on how to use the project.',
    when: ({confirmUsage}) => { 
        if (confirmUsage) {
            return true;
        } else {
            return false;
        }
    }
  },
  {
    type: 'confirm',
    name: 'confirmTests',
    message: 'Is there an example on how to test the project?'
  },
  {
    name: 'tests',
    message: 'Provide an example on how to test the project',
    when: ({confirmTests}) => { 
        if (confirmTests) {
            return true;
        } else {
            return false;
        }
    }
  },
  {
    type: 'confirm',
    name: 'confirmCredits',
    message: 'Are there any other collaborator(s), attribution of third-party assets and/or tutorials requiring credits?'
  },
  {
    name: 'credits',
    message: 'Provide a list of collaborator(s), attribution of third-party assets and/or tutorials used.',
    when: ({confirmCredits}) => { 
        if (confirmCredits) {
            return true;
        } else {
            return false;
        }
    }
  },
  {
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Is there a license for this project?'
  },
  {
      type: 'list',
      name: 'license',
      message: 'Please choose the license used.',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0',
          'Apache License 2.0', 'MIT License', 'Boost Software Lincense 1.0', 'The Unlicense'],
      when: ({confirmLicense}) => { 
      if (confirmLicense) {
          return true;
      } else {
          return false;
      }
      }
  },
  {
    name: 'github',
    message: 'Provide your github username. (Required)',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please provide your github username.')
            return false;
        }
    }
  },
  {
    name: 'email',
    message: 'Provide your email address. (Required)',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please provide your email address.')
            return false;
        }
    }
  }
]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (error) => {
            if (error) {
                console.log (error);
            }
            else {
                console.log('File written successfully');
            };
        });
    // });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
      .then((answer) => (writeToFile('./README/README.md', generateMarkdown(answer))))
      .then(() => console.log('File created'))
      .catch((err) => console.log(err));
};

// Function call to initialize app
init();
