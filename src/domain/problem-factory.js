'use strict'

const User = require('./user')
const Problem = require('./problem')
const ProblemCollection = require('./problem-collection')
const SolutionEntryFactory = require('./solution-entry-factory')

const solutionFactory = new SolutionEntryFactory()

class ProblemFactory {
  /**
   * @param {object} obj The object
   * @return {Problem}
   */
  createFromObject (obj) {
    return new Problem({
      id: obj.problem_id,
      publishTime: obj.publish_time,
      size: obj.problem_size,
      solutionSize: obj.solution_size,
      owner: new User({id: obj.owner}),
      specHash: obj.problem_spec_hash,
      solutions: solutionFactory.createFromObjectList(obj.ranking)
    })
  }

  /**
   * @param {object[]} list The list of objects
   * @return {ProblemCollection}
   */
  createFromObjectList (list) {
    return new ProblemCollection(list.map(obj => this.createFromObject(obj)))
  }
}

module.exports = ProblemFactory
