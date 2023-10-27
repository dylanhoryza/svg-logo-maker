class Shapes {
  constructor(text, textColor, fill ) {
   this.text = text;
   this.textColor = textColor;
   this.fill = fill;
  }

  setText() {
    return `<text x="50" y="50" text-anchor="middle" font-size="50px" font-weight="700"
    fill="${this.textColor}>${this.text}</text>`
  }
}

class Circle extends Shapes {
  renderCircle() {
    return `<circle cx="25" cy="75" r="20"  fill="${this.fill}" stroke-width="5"/>`
  }
}

class Triangle extends Shapes {
  renderTriangle() {
    return `<polygon points="50 15, 100 100, 0 100"
     fill="${this.fill}" stroke-width="5"/>`
  }
}

class Square extends Shapes {
  renderSquare() {
    return `<rect x="10" y="10" width="30" height="30" fill="${this.fill}" stroke-width="5"/>`
  }
}

module.exports = Shapes;