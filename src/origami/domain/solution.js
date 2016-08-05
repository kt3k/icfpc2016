const Point = require('./point')
const Rotation = require('./rotation')

/**
 * The solution model.
 */
class Solution {
  static parse (text) {
    const vertices = []
    const facets = []
    const destinations = []

    const lines = text.trim().split('\n')
    const numVertices = lines.shift()

    for (let i = 0; i < numVertices; i++) {
      vertices.push(Point.parse(lines.shift()))
    }

    const numFacets = lines.shift()
    for (let i = 0; i < numFacets; i++) {
      facets.push(lines.shift())
    }

    while (lines.length > 0) {
      destinations.push(Point.parse(lines.shift()))
    }

    return new Solution({vertices, facets, destinations})
  }

  /**
   * @param {Point[]} vertices The vertices
   * @param {string[]} facets The facets
   * @param {Point[]} destinations The destinations
   */
  constructor ({vertices, facets, destinations}) {
    this.vertices = vertices
    this.facets = facets
    this.destinations = destinations
  }

  /**
   * @param {Rational} s The sine
   * @param {Rational} c The cosine
   */
  rot (s, c) {
    const rotation = new Rotation({s, c})

    this.destinations = this.destinations.map(dest => rotation.rotate(dest))
  }

  /**
   * @param {string} str The rotation string like 12/13,5/13
   */
  rotByStr (str) {
    const rotation = Rotation.parse(str)

    this.destinations = this.destinations.map(dest => rotation.rotate(dest))
  }

  /**
   * @return {string}
   */
  toString () {
    let buf = ''

    buf += this.vertices.length + '\n'
    this.vertices.forEach(vertex => { buf += vertex.toString() + '\n' })
    buf += this.facets.length + '\n'
    this.facets.forEach(facet => { buf += facet + '\n' })
    this.destinations.forEach(dest => { buf += dest.toString() + '\n' })

    return buf
  }
}

module.exports = Solution
