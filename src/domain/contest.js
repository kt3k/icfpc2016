'use strict'

/**
 * The model of the entire contest
 */
class Contest {
  /**
   * @param {ProblemCollection} problems The problems
   */
  constructor ({problems}) {
    this.problems = problems
  }

  /**
   * @return {Problem}
   */
  problemById (id) {
    return this.problems.getById(id)
  }
}

module.exports = Contest
