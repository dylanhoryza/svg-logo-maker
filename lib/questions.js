const inquirer = require('inquirer');
const fs = require('fs');

class Questions {
  constructor(){
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo text.'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text? Enter a color name or hexadecimal number.'
      },
      {
        type: 'checkbox',
        name: 'shape',
        message: 'What kind of shape do you want?',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'fill',
        message: 'What color do you want the shape? Enter a color name or hexadecimal number.'
      },
      
    ])
  }
  
}





module.exports = Questions;