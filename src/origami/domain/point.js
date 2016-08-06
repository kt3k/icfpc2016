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

  /**
   * @param {Point[]}
   */
  static avg (points) {
    const x = points.map(p => p.x).reduce((x0, x1) => x0.add(x1).divide(2))
    const y = points.map(p => p.y).reduce((y0, y1) => y0.add(y1).divide(2))

    return new Point({x, y})
  }
}

module.exports = Point
