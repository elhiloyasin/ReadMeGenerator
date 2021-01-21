//The file system module
const fs = require('fs');
// NPM inquirer package
const inquirer = require('inquirer');
// Retrieves generateMarkdown.js module
const MarkdownGenerator = require('./utils/generateMarkdown');

// An array containing questions for the users input
inquirer.prompt([
    {
        type:'input',
        name: 'user_name',
        message: 'What is your name?'

    }, 
    {
        type:`input`,
        name:'github_username',
        message:'What is your Github username?'


    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?', 

    },
    {
        type:'input',
        name:'project',
        message:'Enter the name of your project', 

    },
    {
        type:'input',
        name:'description',
        message:'Enter a description of your project'
    },
    {
        type:`list`,
        name:'license',
        message:`What is the type of license that your project has?`,
        choices:['MIT', "Apache 2.0", 'IBM', 'Mozilla', 'None']
        

    },
    {
        type:'input',
        name:'installation',
        message:'Do you have installation instructions for this project?' 
    },
    {
        type:'input',
        name:'uses',
        message:'Provide any usage instructions if applicable' 
    },
    {
        type:'input',
        name:'contribution',
        message:'What is required for the user to contribute to this project?'
    },
    {
        type:'input',
        name:'test',
        message:'What command would run your project test?'

    }
])
.then((response) => {
    const data = MarkdownGenerator(response);
    fs.writeFile("READMEgenerated.md", data, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
  });



