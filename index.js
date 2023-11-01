// Variables to require other files and inquirer
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const questions = require('./lib/questions.js');
const inquirer = require('inquirer');
const fs = require('fs');

// Function that uses the questions from questions.js to create prompt and render each shape into a SVG file
const init = () => {
  inquirer.prompt(questions)
  .then((data) => {
    switch (`${data.shape}`) {
      case 'Circle': 
      const circle = new Circle(data.fill, data.text, data.textColor);
      fs.writeFile('examples/logo.svg', circle.renderCircle(), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Circle has been created!');
        }
      });
      break;
      case 'Triangle': 
      const triangle = new Triangle(data.fill, data.text, data.textColor);
      fs.writeFile('examples/logo.svg', triangle.renderTriangle(), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Logo has been created!');
        }
      });
      break;
      case 'Square': 
      const square = new Square(data.fill, data.text, data.textColor);
      fs.writeFile('examples/logo.svg', square.renderSquare(), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Logo has been created!');
        }
      });
    }
  })
}

init();