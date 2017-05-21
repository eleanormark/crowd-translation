'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
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
db.users = require('../models/users.js')(connection, Sequelize);
db.comments = require('../models/comments.js')(connection, Sequelize);
db.posts = require('../models/posts.js')(connection, Sequelize);
db.googleTranslation = require('../models/googleTranslation.js')(connection, Sequelize);

//Relations
db.comments.belongsTo(db.posts);
db.googleTranslation.belongsTo(db.post);
db.posts.hasMany(db.comments);
db.posts.belongsTo(db.users);
db.users.hasMany(db.posts);

module.exports = db;