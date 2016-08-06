
const Edge = require('./edge')
const Skeleton = require('./skeleton')
const Polygon = require('./polygon')
const Point = require('./point')
const Silhouette = require('./silhouette')
const SvgRenderService = require('./svg-render-service')

/**
 * The problem model.
 */
class ProblemSpec {
  /**
   * Parses the problem spec text.
   * @return {ProblemSpec}
   */
  static parse (text) {
    const polygons = []
    const edges = []
    text = text.trim()

    const lines = text.split('\n')
    const numPolygons = +lines.shift()

    for (let i = 0; i < numPolygons; i++) {
      const numVertices = +lines.shift()
      const vertices = []

      for (let j = 0; j < numVertices; j++) {
        vertices.push(Point.parse(lines.shift()))
      }

      polygons.push(new Polygon(vertices))
    }

    const numEdges = +lines.shift()

    for (let i = 0; i < numEdges; i++) {
      edges.push(Edge.parse(lines.shift()))
    }

    const silhouette = new Silhouette(polygons)
    const skeleton = new Skeleton(edges)

    return new ProblemSpec({silhouette, skeleton})
  }
  /**
   * @param {Silhouette} silhouette The silhouette
   * @param {Skeleton} skeleton The skeleton
   */
  constructor ({silhouette, skeleton}) {
    this.silhouette = silhouette
    this.skeleton = skeleton
  }

  /**
   * @return {string}
   */
  toString () {}

  /**
   * @return {string}
   */
  toSvg () {
    return new SvgRenderService().render(this)
  }
}

module.exports = ProblemSpec
