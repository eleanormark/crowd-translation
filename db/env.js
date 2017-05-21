'use strict';

const env = {
    PORT: process.env.PORT || 8000,
    DATABASE_NAME: process.env.DATABASE_NAME || 'sequelize_translation_db',
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
    DATABASE_PORT: process.env.DATABASE_PORT || 3306,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

    NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;