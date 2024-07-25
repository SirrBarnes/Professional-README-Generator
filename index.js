// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "Please enter title of Project:",
        type: "input"
    },
    {   
        name: "description",
        message: "Please enter description of Project:",
        type: "input"
    },
    {   
        name: "installation",
        message: "Please enter any installation instructions for the Project:",
        type: "input"
    },
    {   
        name: "usage",
        message: "Please enter usage instructions for the Project:",
        type: "input"
    },
    {   
        name: "contribution",
        message: "Please enter any contribution guidelines for the Project:",
        type: "input"
    },
    {   
        name: "test",
        message: "Please enter test instructions for the Project:",
        type: "input"
    },
    {
        name: "license",
        message: "Please select license used in the Project:",
        type: "list",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unilicense"]
    },
    {
        name: "userName",
        message: "Please enter your GitHub User Name:",
        type: "input"
    },
    {
        name: "email",
        message: "Please enter your GitHub email:",
        type: "input"
}];

// TODO: Create a function to write README file
const writeToFile = (data) => {
    const parseData = JSON.parse(data);
    console.log(data);
    // fs.writeFile('README.md', data, (err) => {
    //     err ? console.error(err) : console.log("created");
    // });

    fs.appendFile('README.md', `# ${parseData.title}\n`, (err) =>
    err ? console.error(err) : console.log("commited"));

    fs.appendFile('README.md', `## ${parseData.description}\n`, (err) =>
        err ? console.error(err) : console.log("commited"));

    fs.appendFile('README.md', `## ${parseData.installation}\n`, (err) =>
        err ? console.error(err) : console.log("commited"));

    fs.appendFile('README.md', `## ${parseData.usage}\n`, (err) =>
        err ? console.error(err) : console.log("commited"));

    fs.appendFile('README.md', `## ${parseData.contribution}\n`, (err) =>
        err ? console.error(err) : console.log("commited"));

    fs.appendFile('README.md', `## ${parseData.test}\n`, (err) =>
        err ? console.error(err) : console.log("commited"));

    fs.appendFile('README.md', `## ${parseData.license}\n`, (err) =>
        err ? console.error(err) : console.log("commited"));

    fs.appendFile('README.md', `## ${parseData.username}\n`, (err) =>
        err ? console.error(err) : console.log("commited"));

    fs.appendFile('README.md', `## ${parseData.email}\n`, (err) =>
        err ? console.error(err) : console.log("commited"));
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((answers) => writeToFile(JSON.stringify(answers)))
    .catch((error) => console.log(error))
}

// Function call to initialize app
init();
