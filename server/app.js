const express = require('express');
const { resolve } = require('path');
const serveIndex = require('serve-index');
const app = express();
const config = { dir: '/data', port: process.env.RELEASE_SITE_PORT || 3000 };
const portNumber = config.port;
const sourceDir = config.dir;

// middlewares:
app.use(express.static(sourceDir));
app.use(
  '/',
  serveIndex(sourceDir, {
    stylesheet: resolve(__dirname, '../server/style.css')
  })
);

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
