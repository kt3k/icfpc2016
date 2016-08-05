
const ContestFactory = require('./domain/contest-factory')
const factory = new ContestFactory()

exports.getContest = () => factory.createFromObject(require('../latest'))
