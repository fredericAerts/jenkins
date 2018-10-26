const express = require('express');
const path = require('path');

/*  Globals
    ======================================================== */
const app = express();
const port = 3000;

// home
app.get(['/'], (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

/*  Listen
    ======================================================== */
app.listen(port);
// eslint-disable-next-line no-console
console.log(`Listening on port ${port} ...`);

module.exports = app;
