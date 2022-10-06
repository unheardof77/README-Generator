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
},
    {type:`input`,
    name:`collaborators`,
    message:`How many collaborators do you have?`
}];

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        let collabQuestionsArray = [];
        for(i=0; i < data.collaborators; i++){
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

init();