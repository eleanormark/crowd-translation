/**
 * Created by emark on 5/21/17.
 */
'user strict'

model.exports = function (sequelize, Datatypes) {
    const Vote = sequelize.define('votes' , {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        answer_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        count: {
            type: DataTypes.NUMBER,
            required: true
        },
        voter_username: {
            type: DataTypes.STRING,
            required: true
        },

    });
};