const { compile } = require('handlebars')
const path = require('path')
const moment = require('moment')
const fs = require('fs')

module.exports = (req, res, next) => {
  const uri = path.join(__dirname , '../templates/template.mjml')

  const template = compile(fs.readFileSync(uri, 'utf8'))
  const context = {
      date: moment().format('LL')
  }
  const mjml = template(context)

  res.locals.mjml = mjml

  next()
}
