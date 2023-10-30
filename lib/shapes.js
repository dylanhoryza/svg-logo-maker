//shapes.js file

class Shapes {
  constructor(text, textColor, fill ) {
   this.text = text;
   this.textColor = textColor;
   this.fill = fill;
  }

  setText() {
    return `<svg <text x="50" y="50" text-anchor="middle" font-size="50px" font-weight="700" xmlns="http://www.w3.org/2000/svg"
    fill="${this.textColor}">${this.text}</text></svg>`
  }
}

class Circle extends Shapes {
  renderCircle() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20"  fill="${this.fill}" stroke-width="5"/> </svg>`
  }
}

class Triangle extends Shapes {
  renderTriangle() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50 15, 100 100, 0 100"
     fill="${this.fill}" stroke-width="5"/></svg>`
  }
}

class Square extends Shapes {
  renderSquare() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="30" height="30" fill="${this.fill}" stroke-width="5"/></svg>`
  }
}

module.exports = { Shapes, Circle, Triangle, Square};