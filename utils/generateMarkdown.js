function renderLicenseBadge(license) {
  let licenseBadge = '';

  if (license === 'GNU AGPLv3') {
    licenseBadge = `https://img.shields.io/badge/license-GNUAGPLv3-green`;
  };
  if (license === 'GNU GPLv3') {
    licenseBadge = `https://img.shields.io/badge/license-GNUGPLv3-green`;
  };
  if (license === 'GNU LGPLv3') {
    licenseBadge = `https://img.shields.io/badge/license-GNULGPLv3-green`;
  };
  if (license === 'Mozilla Public License 2.0') {
    licenseBadge = `https://img.shields.io/badge/license-MozillaPublicLicense2.0-green`;
  };
  if (license === 'Apache License 2.0') {
    licenseBadge = `https://img.shields.io/badge/license-ApacheLicense2.0-green`;
  };
  if (license === 'MITLicense') {
    licenseBadge = `https://img.shields.io/badge/license-MITLicense-green`;
  };
  if (license === 'Boost Software Lincense 1.0') {
    licenseBadge = `https://img.shields.io/badge/license-BoostSoftwareLincense1.0-green`;
  };
  if (license === 'The Unlicense') {
    licenseBadge = `https://img.shields.io/badge/license-TheUnlicense-green`;
  }
  return licenseBadge;
};

function renderLicenseLink(license) {
  let licenseLink = '';
 
  if (license === 'GNU AGPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/'
  };
  if (license === 'GNU GPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0';
  };
  if (license === 'GNU LGPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0';
  };
  if (license === 'Mozilla Public License 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0';
  };
  if (license === 'Apache License 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0';
  };
  if (license === 'MITLicense') {
    licenseLink = 'https://choosealicense.com/licenses/mit';
  };
  if (license === 'Boost Software Lincense 1.0') {
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0';
  };
  if (license === 'The Unlicense') {
    licenseLink = 'https://choosealicense.com/licenses/unlicense';
  }
  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
 
  if (license === 'GNU AGPLv3') {
    licenseSection = `This application is licensed under GNU Affero General Public License v3.0.`;
  };
  if (license === 'GNU GPLv3') {
    licenseSection = `This applicaiton is licensed under GNU General Public License v3.0.`;
  };
  if (license === 'GNU LGPLv3') {
    licenseSection = `This applicaiton is licensed under GNU Lesser General Public License v3.0.`;
  };
  if (license === 'Mozilla Public License 2.0') {
    licenseSection = `This applicaiton is licensed under Mozilla Public License 2.0.`;
  };
  if (license === 'Apache License 2.0') {
    licenseSection = `This applicaiton is licensed under Apache License 2.0.`;
  };
  if (license === 'MITLicense') {
    licenseSection = `This applicaiton is licensed under MIT License.`;
  };
  if (license === 'Boost Software Lincense 1.0') {
    licenseSection = `This applicaiton is licensed under Boost Software License 1.0.`;
  };
  if (license === 'The Unlicense') {
    licenseSection = `This applicaiton is licensed under The Unlicense.`;
  }
  return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  // renderLicenseSection(data.confirmLicense, data.license);
  // variable holds markdown template that can dynamically add to it
  let markdownTemplate =

  // title
  `
  # ${data.title}
  `;
 if (data.confirmLicense) {
    markdownTemplate += 
    `
  ![badge](${renderLicenseBadge(data.license)})

  You can access more badges and their purposes at [shields.io](https://shields.io)

    `
  };

  //description
  markdownTemplate +=
  `
  ## Description

  ${data.description}

  `;

  // table of contents
  markdownTemplate +=
  `
  ## Table of Contents`;
    if (data.confirmInstallation) {
      markdownTemplate +=
      `
  * [Installation](#installation)
      `
    };
    if (data.confirmUsage) {
      markdownTemplate +=
      `
  * [Usage](#usage)
      `
    };
    if (data.confirmTests) {
      markdownTemplate +=
      `
  * [Tests](#tests)
      `
    };
    if (data.confirmCredits) {
      markdownTemplate +=
      `
  * [Credits](#credits)
      `
    };
    markdownTemplate +=
    ` 
  * [Questions](#questions)
    `;
    if (data.license) {
      markdownTemplate +=
      `
  * [License](#license)
      `
    };

  // add sections contents

  // installation
  if (data.confirmInstallation) {
    markdownTemplate +=
    `

  ## Installation

  ${data.installation}

    `
  };

  // usage
  if (data.confirmUsage) {
    markdownTemplate +=
    `

  ## Usage

  ${data.usage}

    `
  };

  // test
  if (data.confirmTests) {
    markdownTemplate +=
    `

  ## Test

  ${data.tests}

    `
  };

  // credit
  if (data.confirmCredits) {
    markdownTemplate +=
    `

  ## Credits

  ${data.credits}

    `
  };
  
  // question
  markdownTemplate +=
  `

  ## Questions

  For any questions about ${data.title}, please contact at:
  
  GitHub:[${data.github}](https://github.com/${data.github})

  Email: [${data.email}](mailto:${data.email})

  `;

  // license
  if (data.confirmLicense) {
    markdownTemplate +=
    `

  ## License
    
  ${renderLicenseSection(data.license)}

  For more information please view the [license description](${renderLicenseLink(data.license)}).
    `
  };
  return markdownTemplate;

}

module.exports = generateMarkdown;
