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
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('brand', null, {});
    }
};
