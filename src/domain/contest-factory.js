'use strict'

const Contest = require('./contest')
const ProblemFactory = require('./problem-factory')

const problemFactory = new ProblemFactory()

/**
 * The factory class of the contest model.
 */
class ContestFactory {
  /**
   * @param {object} obj The source object
   * @return {Contest}
   */
  createFromObject (obj) {
    return new Contest({
      problems: problemFactory.createFromObjectList(obj.problems)
    })
  }
}

module.exports = ContestFactory
