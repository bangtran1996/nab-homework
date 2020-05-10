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
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('brand', null, {});
    }
};
