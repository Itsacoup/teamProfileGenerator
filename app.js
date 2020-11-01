// all neccesary requires and pathing, as well as global variables

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const teamMembers = [];
const arrayId = [];

// this is the main function of the app, while running it prompts using inquirer and creates an array of objects out of inputs. 
// Once all inputs are added, another function is fired that sends that array to be rendered into html
function appStart() {

    // This is the initial inquire function. Allows you to select a team member to add, or exit which will output html.
    buildTeam();

    function buildTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "team",
                message: "Which team member would you like to add?",
                choices: ["Manager", "Engineer", "Intern", "Exit"]
            }

        ]).then(answer => {
            if (answer.team === "Engineer"){
                createEngineer();
            }
            else if (answer.team === "Manager"){
                createManager();
            }
            else if (answer.team === "Intern"){
                createIntern();
            }
            else if (answer.team === "Exit"){
                outputTeam();
            }

        });
    };

    // called if manager is selected from buildTeam, prompts the user for manager data. 
    // Data is passed into manager.js in library directory and returns an constructed object
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a name";
                }
            },
            {
                type: "input",
                name: "managerID",
                message: "What is your manager's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a ID";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a email";
                }
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "What is your manager's office number?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a number";
                }
            }

        ]).then(answers => {
            const manager = new Manager (answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum);
            teamMembers.push(manager);
            arrayId.push(answers.managerID);

            buildTeam();
        });
    };

    // called if engineer is selected from buildTeam, prompts the user for engineer data. 
    // Data is passed into engineer.js in library directory and returns an constructed object
    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a name";
                }
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is your engineer's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a ID";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a email";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's GitHub account?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter an account name";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer (answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            arrayId.push(answers.engineerID);

            buildTeam();
        });
    };

    // called if intern is selected from buildTeam, prompts the user for intern data. 
    // Data is passed into intern.js in library directory and returns an constructed object
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a name";
                }
            },
            {
                type: "input",
                name: "internID",
                message: "What is your intern's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a ID";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter a email";
                }
            },
            {    
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }

                    return "Please enter an school name";
                }
            }

        ]).then(answers => {
            const intern = new Intern (answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            arrayId.push(answers.internID);

            buildTeam();
        });
    };

    //Checks to make output dir exists, if not creates it then writes htmlfile
    //it does so by passing in the array of constructed objects to the provide htmlrender file in library
    function outputTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

};

// initalizes
appStart();