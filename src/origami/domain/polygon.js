

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
}

module.exports = Polygon
