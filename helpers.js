const mjml2html = require('mjml')
/*
  Compile an mjml string
*/

const renderTemplate = (mjml, params = {}) => {
  return mjml2html(mjml, params)
}

/*
  Print the responsive HTML generated and MJML errors if any
*/

module.exports = {
  render: renderTemplate
}
