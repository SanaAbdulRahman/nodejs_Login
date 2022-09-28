var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.post('/signup',(req,res)=>{
  res.send('CReated new account')
  console.log(req.body);
})

module.exports = router;
