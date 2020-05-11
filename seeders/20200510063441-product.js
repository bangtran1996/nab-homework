'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('product', [{
            id: 1,
            name: 'Shoe 01',
            color: 'red',
            size: '14mm',
            price: 100.00,
            brand_id: 1,
            category_id: 1,
            created_at: new Date(),
            updated_at: new Date()
        },{
            id: 2,
            name: 'Clothes 02',
            color: 'red',
            size: '14mm',
            price: 100.00,
            brand_id: 2,
            category_id: 2,
            created_at: new Date(),
            updated_at: new Date()
        }], {}).then(() => queryInterface.sequelize.query(`SELECT SETVAL('product_id_seq', (SELECT MAX(id) FROM product));`));
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('product', null, {});
    }
};
