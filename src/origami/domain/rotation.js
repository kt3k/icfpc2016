const Point = require('./point')

class Rotation {
  static parse (str) {
    const p = Point.parse(str)
    return new Rotation({s: p.x, c: p.y})
  }
  /**
   * @param {Rational} s The sine
   * @param {Rational} c The cosine
   */
  constructor ({s, c}) {
    this.s = s
    this.c = c
  }

  rotate (point) {
    const x = point.x
    const y = point.y
    const s = this.s
    const c = this.c
    return new Point({x: c.times(x).minus(s.times(y)), y: s.times(x).plus(c.times(y))})
  }
}

module.exports = Rotation
