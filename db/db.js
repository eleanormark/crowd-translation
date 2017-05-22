'use strict'

const Sequelize = require('sequelize');
const env = require('./env');

//Before starting the server, make sure mysql is running on your machine
const connection = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    define: {
        underscored: true
    }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.connection = connection;

//Models/tables
db.answers = require('../models/answers.js')(connection, Sequelize);
db.comments = require('../models/comments.js')(connection, Sequelize);
db.posts = require('../models/posts.js')(connection, Sequelize);
db.users = require('../models/users.js')(connection, Sequelize);
db.votes = require('../models/votes.js')(connection, Sequelize);

//Relations

//Put a foreign key for posts_id in answers modal
//Give Answer .setPost() and .getPost() instance method
db.answers.belongsTo(db.posts);

// give Answer the method addComment
db.answers.hasMany(db.comments);

//Put a foreign key for answers_id in comments model
//Giv Comment .setAnswer() and getAnswer() instance methods
db.comments.belongsTo(db.answers);

//give Post the method addAnswer
db.posts.hasMany(db.answers);

//Put a foreign key for user_id in post model
//Giv Comment .setUser() and getUser() instance methods
db.posts.belongsTo(db.users);

//give User the method addPost
db.users.hasMany(db.posts);

//Put a foreign key for answers_id in vote model
//Giv Comment .setAnswer() and getAnswer() instance methods
db.vote.belongsTo(db.answer);

//Commemt on comment
de.comment.belongsTo(db.comment, {as: 'commentOnComment'});


module.exports = db;