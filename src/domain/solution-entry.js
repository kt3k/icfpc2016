'use strict'

/**
 * The model of the solution entry.
 */
class SolutionEntry {
  /**
   * @param {number} size The size of the solution entry
   * @param {number} resemblance The resemblance value of the solution entry
   */
  constructor ({size, resemblance}) {
    this.size = size
    this.resemblance = resemblance
  }

  isPerfect () {
    return this.resemblance === 1
  }
}
module.exports = SolutionEntry
