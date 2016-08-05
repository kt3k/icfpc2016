'use strict'

const axios = require('axios')
const request = require('superagent')

const API_KEY = '172-0ac62faacd458c296012addac12b8cad'
const API = 'http://2016sv.icfpcontest.org/api'

/**
 * Submits a solution.
 * @param {string} id The problem id
 * @param {string} file The path of solution file
 * @return {Promise<Object>}
 */
exports.submitSolution = (id, file) => new Promise((resolve, reject) => {
  request
    .post(API + '/solution/submit')
    .set('X-API-KEY', API_KEY)
    .attach('solution_spec', file)
    .field('problem_id', id)
    .end((err, data) => { if (err) { reject(err) } else resolve(data.body) })
})
