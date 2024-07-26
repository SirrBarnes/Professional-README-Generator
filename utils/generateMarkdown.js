// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseLink = renderLicenseLink(license);

 switch(licenseLink) {
    case "https://choosealicense.com/licenses/agpl-3.0/#":

    return `[![License](https://img.shields.io/badge/License-GNU_AGPL-brightgreen)](${licenseLink})`;

    case "https://choosealicense.com/licenses/gpl-3.0/":

    return `[![License](https://img.shields.io/badge/License-GNU_GPL-brightgreen)](${licenseLink})`;


    case "https://choosealicense.com/licenses/lgpl-3.0/":

    return `[![License](https://img.shields.io/badge/License-GNU_LGPL-brightgreen)](${licenseLink})`;

    case "https://choosealicense.com/licenses/mpl-2.0/":

    return `[![License](https://img.shields.io/badge/License-MPL-brightgreen)](${licenseLink})`;

    case "https://choosealicense.com/licenses/apache-2.0/":

    return `[![License](https://img.shields.io/badge/License-Apache-brightgreen)](${licenseLink})`;

    case "https://choosealicense.com/licenses/mit/":
      
    return `[![License](https://img.shields.io/badge/License-MIT-brightgreen)](${licenseLink})`;

    case "https://choosealicense.com/licenses/bsl-1.0/":

    return `[![License](https://img.shields.io/badge/License-BSL-brightgreen)](${licenseLink})`;

    case "https://choosealicense.com/licenses/unlicense/":

    return `[![License](https://img.shields.io/badge/License-Unlicense-brightgreen)](${licenseLink})`;

    default:

    return "";
 }
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch(license) {
    case "GNU AGP License v3.0":
      return "https://choosealicense.com/licenses/agpl-3.0/#"

    case "GNU GP License v3.0": 
      return "https://choosealicense.com/licenses/gpl-3.0/"

    case "GNU LGP License v3.0":
      return "https://choosealicense.com/licenses/lgpl-3.0/"
    
    case "Mozilla Public License 2.0":
      return "https://choosealicense.com/licenses/mpl-2.0/"
    
    case "Apache License v2.0":
      return "https://choosealicense.com/licenses/apache-2.0/"
    
    case "MIT License":
      return "https://choosealicense.com/licenses/mit/"
    
    case "Boost Software License 1.0":
      return "https://choosealicense.com/licenses/bsl-1.0/"
    
    case "The Unilicense":
      return "https://choosealicense.com/licenses/unlicense/"

    default:
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  
  This License is covered under the ${license}
  `

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.test}

  ## Questions
  Github Profile: https://github.com/${data.userName}\n
  You can send any additonal questions to
  Email: ${data.email}
`;
}

export default generateMarkdown;
