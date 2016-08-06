
const path = require('path')
const fs = require('fs')

const nunjucks = require('nunjucks')
const svgTmplFile = `${path.dirname(__dirname)}/svg.nunjucks`
const svgTmpl = fs.readFileSync(svgTmplFile).toString()

class SvgRenderService {
  /**
   * @param {ProblemSpec}
   * @return {string}
   */
  render (problem) {
    return nunjucks.renderString(svgTmpl, {
      silhouette: problem.silhouette,
      skeleton: problem.skeleton,
      transform: this.calcTransform(problem)
    })
  }

  calcTransform (problem) {
    const center = problem.silhouette.avgPoint()

    return `translate(${center.x.times(-100).toDecimal()},${center.y.times(-100).toDecimal()}) scale(1,-1) translate(60,-120)`
  }
}

module.exports = SvgRenderService
