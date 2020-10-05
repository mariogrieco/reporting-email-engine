const express = require('express');
const app = express();
const handlebars = require('./middlewares/handlebars')
const { render } = require('./helpers')

app.use(express.static('public'));

// THIS WILL REPLACED FOR THE LAMBDA INDEX

app.get('/', handlebars, (req, res) => {
    res.setHeader('Content-type','text/html')

    res.send(render(res.locals.mjml, {}).html);

    // OR NODEMAILER STUFF HERE
    // res.send(render(res.locals.mjml, {}).html);

    res.end();
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));
