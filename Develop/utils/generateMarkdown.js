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

const whatLicense = (license) => {
  if(license === `None`){
    return `no`;
  } else {
    return `the ${license}`;
  }
};

const generateMarkdown = ({projectTitle, description, installation, usage, license, contribution, tests, email, userName}) => 
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
