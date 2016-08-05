


class Point {
  constructor ({x, y}) {
    this.x = x
    this.y = y
  }
}

/**
 * @param {Rational} x
 * @param {Rational} y
 * @param {Rational} s The sine
 * @param {Rational} c The cosine
 * @return {Point}
 */
exports.rot = (x, y, s, c) => {
  return new Point({x: c.times(x).minus(s.times(y)), y: s.times(x).plus(c.times(y))})
}
