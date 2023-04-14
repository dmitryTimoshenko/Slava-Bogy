// const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      { questions: 'Как называются учебные заведения для подготовки священнослужителей ?', answer: 'Духовные семинарии' },
      { questions: 'Настоящее имя Патриарха Кирилла?', answer: 'Владимир' },
      { questions: 'Напиток который готовят священники ? ', answer: 'Кагор' },
      { questions: 'Как называют святого, которому посвящена церковь или монастырь?', answer: 'Покровитель' }
    ]);
  },

  async down(queryInterface, Sequelize) {
    // await User.destroy({ truncate: { cascade: true } });
  },
};
