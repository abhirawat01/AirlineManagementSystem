'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name:'Kempegowda International Airport',
        city_id:6,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Mengaluru International Airport',
        city_id:6,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Mysuru Airport',
        city_id:6,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Belgaum Airport',
        city_id:6,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
