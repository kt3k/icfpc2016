'use strict'

/**
 * The collection model of the problem.
 */
class ProblemCollection {
  /**
   * @param {Problem[]} problems The problems
   */
  constructor (problems = []) {
    this.problems = []

    problems.forEach(problem => this.problems.push(problem))
  }

  get length () {
    return this.problems.length
  }

  /**
   * Iterates the given func on the problems.
   * @param {function} func The iterator
   */
  forEach(func) {
    this.problems.forEach(func)
  }
}

module.exports = ProblemCollection
