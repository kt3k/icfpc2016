
const ProblemSpec = require('../../../src/origami/domain/problem-spec')
const Silhouette = require('../../../src/origami/domain/silhouette')
const Skeleton = require('../../../src/origami/domain/skeleton')
const Polygon = require('../../../src/origami/domain/polygon')

const fs = require('fs')
const path = require('path')
const {expect} = require('chai')

const sampleProblemFile = `${path.dirname(path.dirname(__dirname))}/fixture/sample-problem.txt`
const text = fs.readFileSync(sampleProblemFile).toString()

describe('ProblemSpec', () => {
  describe('parse', () => {
    it('parses the problem spec text', () => {
      const problem = ProblemSpec.parse(text)

      expect(problem).to.be.instanceof(ProblemSpec)
      expect(problem.silhouette).to.be.instanceof(Silhouette)
      expect(problem.silhouette.get(0)).to.be.instanceof(Polygon)
      expect(problem.silhouette.get(0).length).to.equal(4)
      expect(problem.skeleton).to.be.instanceof(Skeleton)
      expect(problem.skeleton.length).to.equal(5)
    })
  })

  describe('toString', () => {
  })

  describe('toSvg', () => {
  })
})
