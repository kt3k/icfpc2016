#!/usr/bin/env node

const rational = require('big-rational')
const rot = require('../src/origami/rot').rot

const argv = require('minimist')(process.argv.slice(2))

const point = argv._[0]
const rotate = argv._[1]

const usage = () => console.log('Usage: ./bin/rot [x,y] [sine,cosine]')

if (!point || !rotate) {
  usage()
  process.exit()
}

const [x, y] = point.split(',')
const [s, c] = rotate.split(',')

if (!x || !y || !s || !c) {
  usage()
  process.exit()
}

const result = rot(
  rational(x),
  rational(y),
  rational(s),
  rational(c)
)

console.log(`${result.x},${result.y}`)

