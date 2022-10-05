// TODO: Include packages needed for this application
//const { write } = require("fs");
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

const promptUser = ()=> inquirer.prompt(questions);


const generateREADME = ({projectTitle, description, installation, usage, contribution, tests, license, userName, email}) => 

    `# ${projectTitle}

    ## Description
    
    ${description}
    
    ## Table of Contents 
    
    - [Usage](#Usage)
    - [Credits](#Credits)
    - [License](#License)
    - [How to Contribute](#How-to-Contribute)
    - [Tests](#Tests)
    - [Questions](#Questions)
    
    ## Installation
    
    ${installation}
    
    ## Usage
    
    ${usage}
    
    ## Credits
    
    
    
    ## License
    
    ${license}
    

    ## How to Contribute
    
    ${contribution}
    
    ## Tests
    
    ${tests}
    
    ## Questions

    If you have any further questions, concerns, or feedback feel free to email me at ${email}.  Another way you can contact me is through my [GitHub](${userName}) link. 
    `
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
