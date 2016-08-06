'use strict'

const {expect} = require('chai')

const Contest = require('../../src/domain/contest')
const ContestFactory = require('../../src/domain/contest-factory')
const factory = new ContestFactory()

const obj = require('../../latest')

describe('ContestFactory', () => {
  describe('createFromObject', () => {
    it('create a contest from the source object', () => {
      const contest = factory.createFromObject(obj)

      expect(contest).to.be.instanceof(Contest)
    })
  })
})
