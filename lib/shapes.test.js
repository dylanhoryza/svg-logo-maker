// Import classes from shapes.js
const { Circle, Triangle, Square } = require('./shapes');

// Test for Circle SVG
describe('Circle Class', () => {
  it('Should render Circle with blue color and green text', () => {
    const circle = new Circle();
    const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="120" r="60"  fill="${this.fill}" stroke-width="5"/> 
    <text xmlns="http://www.w3.org/2000/svg" x="50%" y="60%" text-anchor="middle" font-size="50px" fill="${this.text}" dy=".3em">
     ${this.textColor}
    </text>
    </svg>`

    expect(circle.renderCircle()).toEqual(expectedSvg);
  });
});

// Test for Triangle SVG
describe('Triangle Class', () => {
  it('Should render Triangle with red color and green text', () => {
    const triangle = new Triangle();
    const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100 65, 150 150, 50 150"
     fill="${this.fill}" stroke-width="5"/> 
     <text xmlns="http://www.w3.org/2000/svg" x="33%" y="60%" text-anchor="middle" font-size="50px" fill="${this.text}" dy=".3em">
     ${this.textColor}
    </text>
     </svg>`

    expect(triangle.renderTriangle()).toEqual(expectedSvg);
  });
});

// Test for Square SVG
describe('Square Class', () => {
  it('Should render Square with green color and blue text', () => {
    const square = new Square();
    const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="10" width="200" height="200" fill="${this.fill}" stroke-width="5"/> 
    <text xmlns="http://www.w3.org/2000/svg" x="50%" y="50%" text-anchor="middle" font-size="50px" fill="${this.text}" dy=".3em">
    ${this.textColor}
   </text>
    </svg>`

    expect(square.renderSquare()).toEqual(expectedSvg);
  });
});
