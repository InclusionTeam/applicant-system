'use strict';
module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    ethnicity: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    github: DataTypes.STRING,
    extralink: DataTypes.STRING,
    coverletter: DataTypes.TEXT,
    education: DataTypes.STRING,
    collegemajor: DataTypes.STRING,
    collegelocation: DataTypes.STRING,
    isemployed: DataTypes.BOOLEAN,
    employer: DataTypes.STRING,
    military: DataTypes.BOOLEAN,
    income: DataTypes.STRING,
    laptop: DataTypes.BOOLEAN,
    whyinterested: DataTypes.TEXT,
    howheard: DataTypes.STRING,
    skilllevel: DataTypes.STRING,
  }, {});
  Form.associate = function (models) {
    // associations can be defined here
  };
  return Form;
};