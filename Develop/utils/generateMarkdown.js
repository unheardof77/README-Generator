//this function has a switchCase in it comparing the users license selection and returning the badge that matches that selection.
const whatLicenseImg = (license) =>{
  switch(license){
    case`MIT`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case`None`:
      return ``;
    case`Apache`:
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case`Mozilla`:
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  };
};
//this function checks if they selected none, if they did then it returns the string no, if they chose a license other than None then it returns the and the license they chose.
const whatLicense = (license) => license === `None`? `no` : `the ${license}`;
//this function first checks if the object is empty.  It does this using Object.keys().length.  What this does is convert it to an array then checks the length of the array.  If the object was empty then the array has a length of 0.  When the if condition triggers, it returns "There were no collaborators.".  When else triggers then it creates a links string and for every property in the object it sets links equal to links.concat(`string`).  This allows me to return a string populated with the links and formatted so there on individual lines using template literal syntax.
const createColab = (secondData) => {
  if(Object.keys(secondData).length === 0){
    return `There were no collaborators.`;
  }else {
    let links = ``;
    for(const prop in secondData ){
      links = links.concat(`[${secondData[prop]}](https://github.com/${secondData[prop]})  
`);
    }
    return links
  };
};
//this function first takes in the first paramater and uses object deconstruction to break it apart.  Then it uses implied return to return my now filled in README template.
const generateMarkdown = ({projectTitle, description, installation, usage, license, contribution, tests, email, userName}, secondData) => 
`# ${projectTitle} ${whatLicenseImg(license)}

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

${createColab(secondData)}

## License

This application uses ${whatLicense(license)} license.

## How to Contribute

${contribution}

## Tests

${tests}

## Questions

If you have any further questions, concerns, or feedback feel free to email me at ${email}.  Another way you can contact me is through my [GitHub](https://github.com/${userName}) account. 
`;
//this line below exports the generateMarkdown function allowing it to be used in my index.js file.
module.exports = generateMarkdown;