
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
  render(problem) {
    return nunjucks.renderString(svgTmpl, {
    })
  }
}

module.exports = SvgRenderService
