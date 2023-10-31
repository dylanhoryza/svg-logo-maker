//shapes.js file

class Shapes {
  constructor(text, textColor, fill ) {
   this.text = text;
   this.textColor = textColor;
   this.fill = fill;
  }

}

class Circle extends Shapes {
  renderCircle() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="150" r="60"  fill="${this.fill}" stroke-width="5"/> 
    <text xmlns="http://www.w3.org/2000/svg" x="50%" y="60%" text-anchor="middle" font-size="50px" fill="${this.text}" dy=".3em">
     ${this.textColor}
    </text>
    </svg>`
  }
}

class Triangle extends Shapes {
  renderTriangle() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100 65, 150 150, 50 150"
     fill="${this.fill}" stroke-width="5"/> 
     <text xmlns="http://www.w3.org/2000/svg" x="50%" y="50%" text-anchor="middle" font-size="50px" fill="${this.text}" dy=".3em">
     ${this.textColor}
    </text>
     </svg>`
  }
}

class Square extends Shapes {
  renderSquare() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="200" height="200" fill="${this.fill}" stroke-width="5"/> 
    <text xmlns="http://www.w3.org/2000/svg" x="50%" y="50%" text-anchor="middle" font-size="50px" fill="${this.text}" dy=".3em">
    ${this.textColor}
   </text>
    </svg>`
  }
}

module.exports = { Shapes, Circle, Triangle, Square};