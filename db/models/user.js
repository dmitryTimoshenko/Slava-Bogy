"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
  
    static associate({Static}) {
      this.hasMany(Static, { foreignKey: 'user_id' });
    }
  }
  Users.init(
    {
      login: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.INTEGER,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
