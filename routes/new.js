var express = require('express');
var newRouter = express.Router();
var { messages } = require("./index")

/* GET new message listing. */
newRouter.get('/', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

newRouter.post('/', function(req, res, next) {
  const { name, message } = req.body;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect('/');
});

module.exports = { newRouter };
