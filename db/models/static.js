"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Static extends Model {
    static associate({Users}) {
      this.belongsTo(Users, { foreignKey: "user_id" });
    }
  }
  Static.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      scores: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Static",
    }
  );
  return Static;
};
