// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import colors from "colors";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: colors.brightMagenta("Please enter title of Project:"),
        type: "input"
    },
    {
        name: "description",
        message: colors.brightMagenta("Please enter description of Project:"),
        type: "input"
    },
    {
        name: "installation",
        message: colors.brightMagenta("Please enter any installation instructions for the Project:"),
        type: "input"
    },
    {
        name: "usage",
        message: colors.brightMagenta("Please enter usage instructions for the Project:"),
        type: "input"
    },
    {
        name: "credits",
        message: colors.brightMagenta("Please enter any contribution guidelines for the Project:"),
        type: "input"
    },
    {
        name: "test",
        message: colors.brightMagenta("Please enter test instructions for the Project:"),
        type: "input"
    },
    {
        name: "license",
        message: colors.brightMagenta("Please select license used in the Project:"),
        type: "list",
        choices: ["GNU AGP License v3.0", "GNU GP License v3.0", "GNU LGP License v3.0", "Mozilla Public License 2.0", "Apache License v2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
    },
    {
        name: "userName",
        message: colors.brightMagenta("Please enter your GitHub User Name:"),
        type: "input"
    },
    {
        name: "email",
        message: colors.brightMagenta("Please enter your GitHub email:"),
        type: "input"
    }];

// TODO: Create a function to write README file
const writeToFile = (data) => {
    const parseData = JSON.parse(data);

    fs.appendFileSync('./generatedReadMe/README.md', generateMarkdown(parseData), (err) =>
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
