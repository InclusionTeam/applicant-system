'use strict';
module.exports = (sequelize, DataTypes) => {
  const sequelizeForm = sequelize.define('Form', {
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

  class Form extends sequelizeForm {
    static async all() {
      return await this.findAll();
    }

    static async new(req, res) {
      return await this.create({
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        birthdate: new Date(req.body.date),
        gender: req.body.gender,
        ethnicity: req.body.ethnicity,
        linkedin: req.body.linkedin,
        github: req.body.github,
        extralink: req.body.extralink,
        coverletter: req.body.coverletter,
        education: req.body.education,
        collegemajor: req.body.collegemajor,
        collegelocation: req.body.collegelocation,
        isemployed: req.body.isemployed,
        employer: req.body.employer,
        military: req.body.military,
        income: req.body.income,
        laptop: req.body.laptop,
        whyinterested: req.body.whyinterested,
        howheard: req.body.howheard,
        skilllevel: req.body.skilllevel,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
  }

  return Form;
};