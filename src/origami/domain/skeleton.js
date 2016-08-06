

/**
 * The skeleton model.
 */
class Skeleton {
  /**
   * @param {Edge[]} edges The edges
   */
  constructor (edges = []) {
    this.edges = edges.map(x => x)
  }

  get length () {
    return this.edges.length
  }
}

module.exports = Skeleton
