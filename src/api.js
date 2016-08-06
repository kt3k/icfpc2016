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

/**
 * @param {number} index
 */
exports.submitProblem = (index, file) => new Promise((resolve, reject) => {
  request
    .post(API + '/problem/submit')
    .set('X-API-KEY', API_KEY)
    .attach('solution_spec', file)
    .field('publish_time', 1470441600 + index * 3600)
    .end((err, data) => { if (err) { reject(err) } else resolve(data.body) })
})

exports.getBlobText = hash => new Promise((resolve, reject) => {
  request
    .get(API + '/blob/' + hash)
    .set('X-API-KEY', API_KEY)
    .end((err, data) => { if (err) { reject(err) } else resolve(data.text) })
})

exports.getBlobJson = hash => new Promise((resolve, reject) => {
  request
    .get(API + '/blob/' + hash)
    .set('X-API-KEY', API_KEY)
    .end((err, data) => { if (err) { reject(err) } else resolve(data.body) })
})
