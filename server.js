/**
 * Created by emark on 5/21/17.
 */
//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require('path');

// Requiring our index.js in models
const db = require('./models');

//Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8000;

//sets up express to serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/answers_controller.js")(app);
require("./controllers/comments_controller.js")(app);
require("./controllers/posts_controller.js")(app);
require("./controllers/users_controller.js")(app);
require("./controllers/votes_controller.js")(app);


// Syncing our Sequelize models with our database and then starting our express app
// Object with force set to true destroy
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});