//this require grabs the generateMarkdown function from the generateMarkdown file
const generateMarkdown = require(`./utils/generateMarkdown.js`);
//this require gets the inquirer module allowing inquirer methods to be used.
const inquirer = require(`inquirer`);
//this require specifically grabs writeFile form the fs module
const { writeFile } = require(`fs`).promises;
//This is an array of questions that the user is prompted when they boot the application
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
},
    {type:`number`,
    name:`collaborators`,
    message:`How many collaborators do you have?`
}];
//This is a function that prompts the user when the function is run then takes that data and checks a condition of one of the questions, then either prompts them different questions if they have collaborators or moves on and generates the readme.
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        let collabQuestionsArray = [];
        for(i=1; i < data.collaborators + 1; i++){
            let collabQuestionsObject = {name: `collaborators${[i]}`, message: `What is the Github username of collaborator${i}?`};
            collabQuestionsArray.push(collabQuestionsObject);
        }
        if(collabQuestionsArray){
            inquirer.prompt(collabQuestionsArray)
            .then((secondData) => writeFile(`README.md`, generateMarkdown(data, secondData)))
        }else{
            writeFile(`README.md`, generateMarkdown(data));
        };
    })
    .catch((err) => console.error(err));
};
//  This calls the init function on page load.
init();