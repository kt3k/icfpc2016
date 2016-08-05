'use strict'

const SolutionEntry = require('./solution-entry')
const SolutionEntryCollection = require('./solution-entry-collection')

/**
 * The factory class of the solution entry model.
 */
class SolutionEntryFactory {
  createFromObject (obj) {
    return new SolutionEntry({
      resemblance: obj.resemblance,
      size: obj.solution_size
    })
  }

  createFromObjectList(list) {
    return new SolutionEntryCollection(list.map(obj => this.createFromObject(obj)))
  }
}

module.exports = SolutionEntryFactory
