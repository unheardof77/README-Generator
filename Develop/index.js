// TODO: Include packages needed for this application
const { write } = require("fs");
const inquirer = require(`inquirer`);
const { writeFile } = require(`fs`).promises;

// TODO: Create an array of questions for user input
const questions = [
    {type:`input`,
    name:`projectTitle`,
    message:`What is the title of your project?`
},
    {type:`input`,
    name:`description`,
    message:`Please write a brief description about the project.`
},
    {type:`input`,
    name:`installation`,
    message:`Please write installation instructions.`
},
    {type:`input`,
    name:`usage`,
    message:`Please write instructions on how to use.`
},
    {type:`input`,
    name:`contribution`,
    message:`Please write instructions on how to contribute.`
},
    {type:`input`,
    name:`tests`,
    message:`Please write instructions on how to test the application.`
},
    {type:`checkbox`,
    name:`license`,
    choices:[`MIT`, `None`]
},
    {type:`input`,
    name:`userName`,
    message:`What is your GitHub username?`
},
    {type:`input`,
    name:`email`,
    message:`What is your email?`
}];

const promptUser = ()=> {
    return inquirer.prompt(questions)
};

const generateREADME = ({projectTitle, description, installation, usage, contribution, tests, license, userName, email}) => 
    `# ${projectTitle}

    ## Description
    
    ${description}
    
    ## Table of Contents (Optional)
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${installation}
    
    ## Usage
    
    ${usage}
    <!---
    ## Credits
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    -->
    ## License
    
    ${license}
    
    
    <!---
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ## Features
    
    If your project has a lot of features, list them here.
    -->
    ## How to Contribute
    
    ${contribution}
    
    ## Tests
    
    ${tests}`
;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {};

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((data) => {
        writeFile(`README.md`, generateREADME(data))
    })
    .then(() => console.log(`Successfully created README file.`))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
