'use strict'

/**
 * The model of the problem.
 */
class Problem {
  /**
   * @param {string} id The id
   * @param {number} publishTime The published time
   * @param {number} size The size
   * @param {number} solutionSize The size of the owner's solution
   * @param {User} owner The owner of the problem
   * @param {string} specHash The hash of the spec
   * @param {SolutionEntryCollection} solutions The solutions
   */
  constructor ({id, publishTime, size, solutionSize, owner, specHash, solutions}) {
    this.id = id
    this.publishTime = publishTime
    this.size = size
    this.solutionSize = solutionSize
    this.owner = owner
    this.specHash = specHash
    this.solutions = solutions
  }

  /**
   * @return {number}
   */
  ownerScore () {
    return (5000 - this.solutionSize) / this.n()
  }

  /**
   * @return {number}
   */
  solverPerfectScore () {
    return this.solutionSize / this.n()
  }

  n () {
    return 1 + this.perfectSolutions().length
  }

  /**
   * @return {SolutionEntryCollection}
   */
  perfectSolutions () {
    return this.solutions.perfectSolutions()
  }

  /**
   * Returns the publish index from
   * @return {number|null}
   */
  publishIndex () {
    const index = (this.publishTime - 1470441600) / 3600

    if (index < 0) {
      return null
    }

    return index
  }
}

module.exports = Problem
