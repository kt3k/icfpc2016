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
    this.dict = {}

    problems.forEach(problem => {
      this.problems.push(problem)
      this.dict[problem.id] = problem
    })
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

  /**
   * Gets by the id.
   */
  getById (id) {
    return this.dict[id]
  }
}

module.exports = ProblemCollection
