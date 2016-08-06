
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
}

module.exports = Polygon
