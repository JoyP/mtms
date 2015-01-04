'use strict';

var port    = process.env.PORT,
    db      = process.env.DB,
    express = require('express'),
    app     = express();

require('./lib/config')(app);
require('./routes/routes')(app, express);

require('./lib/mongodb')(db, function(){
  app.listen(port);
});

module.exports = app;

/*
Code to run: PORT=3333 DB=mongodb://joy@Joys-MacBook-Pro:mtms node server/index.js
*/
