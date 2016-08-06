
const Point = require('./point')

/**
 * The edge model.
 */
class Edge {
  static parse (str) {
    const [start, end] = str.split(' ')

    return new Edge(Point.parse(start), Point.parse(end))
  }
  /**
   * @param {Point} start The start point
   * @param {Point} end The end point
   */
  constructor(start, end) {
    this.start = start
    this.end = end
  }
}

module.exports = Edge
