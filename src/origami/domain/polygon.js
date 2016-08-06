

/**
 * The polygon model.
 */
class Polygon {
  /**
   * @param {Point[]} points
   */
  constructor (points = []) {
    this.points = points.map(x => x)
  }

  get length () {
    return this.points.length
  }
}

module.exports = Polygon
