'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('admin', [{
            id: 1,
            username: 'diepbang',
            password: '$2b$10$3o/2tFO1M1CtC6bLoOwkZ.C3RpXtzvibS9Vbm.UerrgXzfy12/DNq',
            created_at: new Date(),
            updated_at: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('admin', null, {});
    }
};
