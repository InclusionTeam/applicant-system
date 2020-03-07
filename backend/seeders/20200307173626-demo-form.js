'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Forms', [
      {
        name: 'John Cena',
        phone: '9175393093',
        address: '3230 Steuben Ave, apt G3',
        city: 'Bronx',
        state: 'NY',
        zip: '10467',
        birthdate: new Date('21 Apr 1985 10:10:00 GMT-0400'),
        gender: 'Male',
        ethnicity: 'Hispanic',
        linkedin: 'https://google.com',
        github: 'https://github.com/Thatjohn',
        extralink: 'https://twitter.com/JohnFajardo',
        coverletter: 'Lorem ipsum dolor sit amet',
        education: 'Bachelors degree in journalism',
        collegemajor: 'Journalism',
        collegelocation: 'Caracas, Venezuela',
        isemployed: false,
        employer: 'N/A',
        military: false,
        income: '$0-$25,000',
        laptop: true,
        whyinterested: 'Because I need a job',
        howheard: 'Heard in Google',
        skilllevel: 'Intermediate',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Forms', null, {});
  }
};