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
    return (5000 - this.size) / this.n()
  }

  /**
   * @return {number}
   */
  solverPerfectScore () {
    return this.size / this.n()
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
}

module.exports = Problem
