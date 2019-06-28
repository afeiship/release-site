const express = require('express');
const serveIndex = require('serve-index');
const app = express();
const portNumber = 3000;
const sourceDir = 'releases';

// middlewares:
app.use(express.static('releases'));
app.use(
  '/',
  serveIndex(__dirname + '/releases', {
    icons: true
  })
);

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
