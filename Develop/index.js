const generateMarkdown = require(`./utils/generateMarkdown.js`);
const inquirer = require(`inquirer`);
const { writeFile } = require(`fs`).promises;

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
    {type:`list`,
    name:`license`,
    message: `What license do you have?`,
    choices:[`MIT`,`Apache`,`Mozilla`, `None`]
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

function writeToFile(data) {
    writeFile(`README.md`, generateMarkdown(data))
};

function init() {
    promptUser()
    .then((data) => writeToFile(data))
    .then(() => console.log(`Successfully created README file.`))
    .catch((err) => console.error(err));
};

init();
