var express = require('express');
const { route } = require('../app');
var router = express.Router();

router.get('/', function(req, res, next) {
  //// Fetch environmental variable securely
  // let node_secret = process.env.NODE_SECRET;
  // console.log(`Fetched value from env: ${node_secret}`);

  // If you'd like to pass value for views, use `res.render('VIEW_NAME', {SECRET_VAR : node_secret})`
  res.render('home');
});

router.get('/healthz', function(req, res, next) {
  res.json({
    'status': 'ok'
  })
});


module.exports = router;
