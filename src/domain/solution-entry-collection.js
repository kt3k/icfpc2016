'use strict'

/**
 * The collection model of the solution entries.
 */
class SolutionEntryCollection {
  /**
   * @param {SolutionEntry[]} solutions The solution entries
   */
  constructor (solutions = []) {
    this.solutions = []

    solutions.forEach(solution => this.solutions.push(solution))
  }

  /**
   * @return {SolutionEntryCollection}
   */
  perfectSolutions () {
    return new SolutionEntryCollection(this.solutions.filter(solution => solution.isPerfect()))
  }

  get length () {
    return this.solutions.length
  }
}

module.exports = SolutionEntryCollection
