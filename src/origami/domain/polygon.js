
const Point = require('./point')

/**
 * The polygon model.
 */
class Polygon {
  /**
   * @param {Point[]} vertices
   */
  constructor (vertices = []) {
    this.vertices = vertices.map(x => x)
  }

  get length () {
    return this.vertices.length
  }

  /**
   * @return {Point}
   */
  avgPoint () {
    return Point.avg(this.vertices)
  }

  /**
   * Returns the center of the polygon.
   * @return {Point}
   */
  center () {
    const top = Point.top(this.vertices)
    const bottom = Point.bottom(this.vertices)
    const left = Point.left(this.vertices)
    const right = Point.right(this.vertices)

    return Point.avg([new Point({x: left, y: top}), new Point({x: right, y: bottom})])
  }
}

module.exports = Polygon
