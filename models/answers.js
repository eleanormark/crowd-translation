/**
 * Created by emark on 5/21/17.
 */
'use strict'

module.exports = function (sequelize, DataTypes) {
    const Answer = sequelize.define('answer', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        post_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            required: true
        },
        answer_username: {
            type: DataTypes.STRING,
            required: true
        },
        status: {
            type: DataTypes.ENUM,
            values: ['approved', 'rejected', 'in review']

        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at:  DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        underscored: true
    });

    return Answer;
};