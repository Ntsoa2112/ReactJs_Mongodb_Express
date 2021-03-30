var express = require("express");
 
var app = express();
var router = require('./bin/express-router')();
//On fait appel à nos routes
require('./router/route')(router); 
// Puis on dit à express d'utiliser notre router 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use('/', router);

/*
app.set("view engine", "ejs");
app.set("views", "./views");
*/
app.listen(9000);
/*
app.get("/", function(request, response)  {
    console.log("ato am slash");
    response.redirect("http://localhost:3000/");
});

app.get("/creer", function(request, response)  {
    console.log("creer");
    response.redirect("http://localhost:3000/creer");
});
*/