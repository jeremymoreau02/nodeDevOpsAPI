'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    createdAt : false,
    updatedAt : false,
    deletedAt : false
  });

  User.associate = function(models) {
    models.User.hasMany(models.Task);
  };

  return User;
};