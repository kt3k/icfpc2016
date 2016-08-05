const rational = require('big-rational')
const r2s = require('../util').r2s

class Point {
  static parse (str) {
    const [x, y] = str.split(',')
    return new Point({x: rational(x), y: rational(y)})
  }

  constructor ({x, y}) {
    this.x = x
    this.y = y
  }

  toString () {
    return `${r2s(this.x)},${r2s(this.y)}`
  }
}

module.exports = Point
