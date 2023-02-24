const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
function createEngineer(team) {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the engineer's name?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add a name';
            }
        },
        {
            name: "id",
            message: "What is the engineer's ID?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add an ID';
            }
        },
        {
            name: "email",
            message: "What is the engineer's email?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add an email';
            }
        },
        {
            name: "github",
            message: "What is the engineer's GitHub username?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add a GitHub username';
            }
        },
    ]).then((engineerDetails) => {
        const engineer = new Engineer(engineerDetails.name, engineerDetails.id, engineerDetails.email, engineerDetails.github);
        team.push(engineer);
        createTeam(team); // at this point we add an engineer to the team array
    });
}

function createIntern(team) {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the intern's name?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add a name';
            }
        },
        {
            name: "id",
            message: "What is the intern's ID?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add an ID';
            }
        },
        {
            name: "email",
            message: "What is the intern's email address?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add an email address';
            }
        },
        {
            name: "name",
            message: "What is the intern's school?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add a school';
            }
        },
    ]).then((internDetails) => {
        // Initialise Intern class to create Manager object
        const intern = new Intern(internDetails.name, internDetails.id, internDetails.email, internDetails.school)
        team.push(intern);
        createTeam(team); // at this point we add an intern to the team array
    });
}

function createTeam(team) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'Which type of team member you wan to add?',
            choices: [
                'Engineer',
                'Intern',
                "I don't want to add any more team member",
            ],
        }
    ]).then((choice) => {
        if (choice.memberChoice === 'Engineer') {
            createEngineer(team);
        } else if (choice.memberChoice === 'Intern') {
            createIntern(team);
        } else {
            console.log('made it this far');
            // at this point, team array should have a manager and however many engineers and interns the user inputted
            const html = render(team); // html will be html file as string
            // write html to a file index.html using fs library
            fs.writeFile('./index.html', html, (err) => {
                if (err) {
                    console.log('Failed to write HTML file');
                }
            });
        }
    });
}

function createManager(team) {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the manager's name?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add a name';
            }
        },
        {
            name: "id",
            message: "What is the mananger's ID?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add an ID';
            }
        },
        {
            name: "email",
            message: "What is the manager's email?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add an email address';
            }
        },
        {
            name: "officeNumber",
            message: "What is the manager's office number?",
            type: "text",
            validate(value) {
                if (value.length) {
                    return true;
                }
                return 'You must add an office number';
            }
        },
    ]).then((managerDetails) => {
        // Initialise Manager class to create Manager object
        const manager = new Manager(managerDetails.name, managerDetails.id, managerDetails.email, managerDetails.officeNumber)
        team.push(manager);
        createTeam(team); // at this point, team array have a manager in it
    });
}

function start() {
    const team = []; // array of Employee objects (array of Manager, or Engineers, or Interns)
    // Employee can be Manager, Engineer, or Intern
    createManager(team);
}

start();