'use strict';

// //SELECT SETVAL('product_types_id_seq', (SELECT MAX(id) FROM product_types));


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
        }], {}).then(() => queryInterface.sequelize.query(`SELECT SETVAL('brand_id_seq', (SELECT MAX(id) FROM brand));`));
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('brand', null, {});
    }
};
