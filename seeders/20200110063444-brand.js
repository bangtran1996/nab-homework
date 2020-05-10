'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('brand', [{
            id: 1,
            name: 'Channel',
            code: 'channel_code',
            created_at: new Date(),
            updated_at: new Date()
        }, {
            id: 2,
            name: 'Greecy',
            code: 'greecy_code',
            created_at: new Date(),
            updated_at: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('brand', null, {});
    }
};
