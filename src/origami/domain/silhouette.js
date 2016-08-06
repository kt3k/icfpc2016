const Point = require('./point')

/**
 * The silhouette model.
 */
class Silhouette {
  constructor (polygons = []) {
    this.polygons = polygons.map(polygon => polygon)
  }

  get length () {
    return this.polygons.length
  }

  /**
   * Gets the polygon of the given index.
   * @param {number} i The index of polygon
   * @return {Polygon}
   */
  get (i) {
    return this.polygons[i]
  }

  avgPoint () {
    return Point.avg(this.polygons.map(polygon => polygon.avgPoint()))
  }
}

module.exports = Silhouette
