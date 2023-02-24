# Team Profile Generator
![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description
My task was to take some given starter code and convert it into a working Node.js command-line application. This application will take in information about employees on a software engineering team, then generate an HTML webpage that displays summaries for each person.

Tests have also been provided and every part of the code must pass the provided tests.
  
There must be an employee parent class that contains:
  * Name.
  * ID.
  * Email.
  * Employee role

There must be an manager class that extends employee containing:
  * Office number.
  * ID.
  * Email.
  * Manager role

There must be an engineer class that extends employee containing:
  * GitHub username.
  * Engineer role

There must be an intern class that extends employee containing:
  * School.
  * Intern role
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
  
## Installation
A user will need to clone the repository to their local machine and run npm install to install the Inquirer and Jest packages.

## Usage
The application is run by typing 'node index.js' into the command line and the user will be prompted to enter the manager details followed by options to add additional engineers or interns or an option to not add any more team members. When all details have been entered the index.html file is created.

![demo of the application running](assets/TeamProfileGenerator.mp4)

## License
 MIT

## Tests
Classes have been tested with Jest. You can trigger the tests by running 'npm run test'.

## Questions
You can find my GitHUb here: [Drrobertson9673](https://github.com/drrobertson9673)

If you have any questions please email me here: drrobertson@gmail.co.uk