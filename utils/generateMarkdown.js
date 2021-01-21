// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
return ` ![${license} license](https://img.shields.io/badge/license-${license}-Blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
license !== 'None' ? `* [License](license)`:'' 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license !== `None`){
  return (
    ` # License
    This project is license under the ${license} lincense
    `
  )
 }
 return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.user_name}
  ${renderLicenseBadge(data.license)}
## INSTRUCTIONS
  ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink (`${data.license}`)}
  * [Contributing](#contributing)
  * [Tests](#tests) 
  * [Questions](#questions)
  
  ## Installation
    ${data.installation}

  ## Usage
    ${data.uses}
    
  ${renderLicenseSection(data.license)}

  ## Contribututing
    ${data.contribution}

  ## Tests
    ${data.test}

  ## Questions 

    If you have any questions regarding the repo please contact me at ${data.email}, 
    if you would like to checkout any more of my work checkout my repo's at github 
    here is my github username ${data.github_username}
`;
}

module.exports = generateMarkdown;
