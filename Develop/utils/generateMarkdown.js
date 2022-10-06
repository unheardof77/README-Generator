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

const whatLicense = (license) => license === `None`? `no` : `the ${license}`;

const createColab = (secondData) => {
  console.log(secondData);
  if(Object.keys(secondData).length === 0){
    console.log("If triggered.");
    return `There were no collaborators.`;
  }else {
    console.log("Else triggered");
    let links = ``;
    for(const prop in secondData ){
      links = links.concat(`[${secondData[prop]}](https://github.com/${secondData[prop]})  
`);
    }
    return links
  }
};

const generateMarkdown = ({projectTitle, description, installation, usage, license, contribution, tests, email, userName}, secondData) => 
`
# ${projectTitle} ${whatLicenseImg(license)}

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


module.exports = generateMarkdown;
