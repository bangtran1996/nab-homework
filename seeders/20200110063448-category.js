'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('category', [{
            id: 1,
            name: 'Shoe',
            type: 'shoe',
            created_at: new Date(),
            updated_at: new Date()
        }, {
            id: 2,
            name: 'Clothes',
            type: 'clothe',
            created_at: new Date(),
            updated_at: new Date()
        }], {}).then(() => queryInterface.sequelize.query(`SELECT SETVAL('category_id_seq', (SELECT MAX(id) FROM category));`));
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('category', null, {});
    }
};
