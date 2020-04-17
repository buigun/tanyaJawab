'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      { question: 'Looping data di vue menggunakan syntax FOR?', answer: false, createdAt: new Date(), updatedAt: new Date },
      { question: 'Store pada vuex bukan merupakan tempat penyimpanan data?', answer: false, createdAt: new Date(), updatedAt: new Date },
      { question: '!0 Nilainya True', answer: true, createdAt: new Date(), updatedAt: new Date },
      { question: 'Kita bisa menghitung length pada sebuah object di javascript?', answer: false, createdAt: new Date(), updatedAt: new Date },
      { question: 'Jika child component ingin mengirimkan data kepada parent component bisa menggunakan $emit?', answer: true, createdAt: new Date(), updatedAt: new Date },
      { question: 'Kita bisa mendapatkan value form pada vue dengan v-bind?', answer: false, createdAt: new Date(), updatedAt: new Date },
      { question: 'Jika sebuah ARRAY tidak memiliki isi, maka ia bernilai TRUE', answer: true, createdAt: new Date(), updatedAt: new Date },
      { question: 'Tanpa ExpressJS kita tidak bisa membuat routing?', answer: false, createdAt: new Date(), updatedAt: new Date },
      { question: 'MVC merupakan sebuah konsep, bukan aplikasi atau library', answer: true, createdAt: new Date(), updatedAt: new Date },
      { question: 'Belajar di Hacktiv8 itu sulit?', answer: true, createdAt: new Date(), updatedAt: new Date }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
