const express = require('express');
const { resolve } = require('path');
const serveIndex = require('serve-index');
const app = express();
const portNumber = 3000;
const sourceDir = 'releases';

// middlewares:
app.use(express.static('/Users/feizheng/Downloads'));
app.use(
  '/',
  serveIndex('/Users/feizheng/Downloads', {
    stylesheet: resolve(__dirname, '../server/style.css')
  })
);

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
