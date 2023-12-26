'use strict'
  var express = require('express');
  // var app = express.Router()
  var app = express()
  var session = require('express-session');
  
  var conf = require("./public/settings")

var fs = require("fs");
var PDF = require('pdfkit');
///////////////////////
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// for signing the cookies.
app.use(cookieParser('my secret here'));

// parses x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
///////////////////////
var FileStore = require('session-file-store')(session);

app.use(session({
    store: new FileStore,
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  })
);
app.use(function (req, res, next) {
  var err = req.session.error;
  var msg = req.session.success;
  var hh = 3600000

  console.log('app use')
  // req.session.cookie.expires=new Date(Date.now() + hh * 24)
  // delete req.session.error;
  // delete req.session.success;
  res.locals.message = '';
  // if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  // if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});
/**
 * Module dependencies.
 */
const por =3011
// var express = require('express')
var hash = require('pbkdf2-password')()
var path = require('path');
// var session = require('express-session');
var app = module.exports = express();

app.set('view engine', 'pug',{globals:["s"]}); // register the template engine
app.set('views', path.join(__dirname, 'views'));
app.set('env', "development")
/////////////////

var indexRouter = require('./routes/index');
app.use('/restricted', indexRouter) // load the 'app' router on '/secr*t', on the 'admin' sub app

app.use(express.static(__dirname)); //Serves resources from public folder
app.use(express.static('public'))
/////////////////
// const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//     //
//     // - Write all logs with importance level of `error` or less to `error.log`
//     // - Write all logs with importance level of `info` or less to `combined.log`
//     //
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' }),
//   ],
// });

var debug = require('debug')('http')
var http = require('http')
var https = require('https')
// var privateKey = fs.readFileSync('/etc/letsencrypt/live/schreinerei-hilbert.de/privkey.pem', 'utf8');
// var certificate = fs.readFileSync('/etc/letsencrypt/live/schreinerei-hilbert.de/fullchain.pem', 'utf8');
// var credentials = { key: privateKey, cert: certificate };
// var httpsServer = https.createServer(credentials, app);
// middleware

app.use(express.urlencoded({ extended: false }))
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));





function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
app.use(errorHandler)


var users = {
  car: { name: 'car' }
};
// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)

hash({ password: 'car' }, function (err, pass, salt, hash) {
  if (err) throw err;
  // store the salt & hash in the "db"
  users.car.salt = salt;
  users.car.hash = hash;
  //   let sql = "insert into usr email, salt, hash values("+users.car.name+" ,"
  //   + ","+salt+","+hash+")"
  //   db.run(sql, function(err){ 
  //     if(err) return console.log(err.message + "   ::  " + sql);
  // })
});


// Authenticate using our plain-object database of doom!

function authenticate(name, pass, fn) {
  if (!module.parent) console.log('authenticating %s:%s', name, pass);
  var user = users[name];
  // query the db for the given username
  if (!user) return fn(null, null)
  // apply the same algorithm to the POSTed password, applying
  // the hash against the pass / salt, if there is a match we
  // found the user
  hash({ password: pass, salt: user.salt }, function (err, pass, salt, hash) {
    if (err) return fn(err);
    if (hash === user.hash) {

      return fn(null, user)
    }
    fn(null, null)
  });
}


app.get('/', function (req, res) {
  res.redirect('/login');
});

// app.get('/restricted', restrict, function(req, res){
//   res.send('Wahoo! restricted area, click to <a href="/logout">logout</a>');
// });

app.get('/logout', function (req, res) {
  // destroy the user's session to log them out
  // will be re-created next request
  res.clearCookie('remember');
  // res.redirect('back');
  req.session.destroy(function () {
    res.redirect('/');
  });
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/login', function (req, res, next) {
  authenticate(req.body.username, req.body.password, function (err, user) {
    if (err) return next(err)
    if (user) {
      // Regenerate session when signing in
      // to prevent fixation
      req.session.regenerate(function () {
        // Store the user's primary key
        // in the session store to be retrieved,
        // or in this case the entire user object
        req.session.user = user;
        var minute = 60000 * 30;

        res.cookie('remember', 1, { maxAge: minute });

        req.session.success = 'Authenticated as ' + user.name
          + ' click to <a href="/logout">logout</a>. '
          + ' You may now access <a href="/restricted">/restricted</a>.';
        // res.redirect('/restricted/');
        res.redirect('/restricted/show.html?t=o');
      });
    } else {
      req.session.error = 'Authentication failed, please check your '
        + ' username and password.'
        + ' (use "tj" and "foobar")';
      res.redirect('/login');
    }
  });
});


if (!module.parent) {
  app.listen(por);
  // httpsServer.listen(443)
  console.log('Express started on port http://localhost:'+por);
}
