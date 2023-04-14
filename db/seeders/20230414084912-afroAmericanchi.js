"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        questions: "колько сигарет в день выкуривает снуп-дог", answer: "80",
      },
      {
        questions:
          "Человек какой необычной профессии работает на Сэмюэла Л Джексона?", answer: "Специалист по парикам",
      },
      {
        questions: "Кто был первым афроамериканским президентом США? ", answer: "Обама",
      },
      {
        questions: "В каком году запретили рабство в США?", answer: "1865",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
