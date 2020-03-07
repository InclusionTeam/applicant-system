'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      ethnicity: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      github: {
        type: Sequelize.STRING
      },
      extralink: {
        type: Sequelize.STRING
      },
      coverletter: {
        type: Sequelize.TEXT
      },
      education: {
        type: Sequelize.STRING
      },
      collegemajor: {
        type: Sequelize.STRING
      },
      collegelocation: {
        type: Sequelize.STRING
      },
      isemployed: {
        type: Sequelize.BOOLEAN
      },
      employer: {
        type: Sequelize.STRING
      },
      military: {
        type: Sequelize.BOOLEAN
      },
      income: {
        type: Sequelize.STRING
      },
      laptop: {
        type: Sequelize.BOOLEAN
      },
      whyinterested: {
        type: Sequelize.TEXT
      },
      howheard: {
        type: Sequelize.STRING
      },
      skilllevel: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Forms');
  }
};