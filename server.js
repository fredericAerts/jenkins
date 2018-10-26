const express = require('express');
const path = require('path');

/*  Globals
    ======================================================== */
const app = express();
const hostname = 'localhost';
const port = 3000;

// home
app.get(['/'], (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

/*  Listen
    ======================================================== */
app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
