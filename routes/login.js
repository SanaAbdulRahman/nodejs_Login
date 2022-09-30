var express = require('express');
const { response } = require('../app');
var router = express.Router();

const userhelpers=require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.post('/signup',(req,res)=>{
  userhelpers.doSignup(req.body).then((response)=>{
    console.log(response);
  })
 
})

module.exports = router;
