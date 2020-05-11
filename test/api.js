/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';

const chai = require('chai');
const expect = chai.expect;

let kraken = require('kraken-js'),
    express = require('express'),
    path = require('path'),
    models = require('../db/models'),
    request = require('supertest');

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../schema');
const resolvers = require('../resolvers')
const repos = require('../db/repos');
const { createTestClient } = require('apollo-server-testing');
const { gql } = require('apollo-server');

const QUERY_GET_PRODUCT_BY_ID = gql`
  query getProduct($productId: Int!) {
    get_product(productId: $productId) {
        id
        name
    }
  }
`;

const QUERY_GET_PRODUCTS_BY_FILTER = gql`
   query list_product($filterInput: ProductFilterInput!) {
    list_product(filterInput: $filterInput) {
        id
        name
        created_at
        updated_at
    }
  }
`;

describe('index', () => {
    let app, mock;
    let graphQLServer;
    let graphlQLCreated;
    before((done) => {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        let mockAdminUserID = 1
        graphQLServer = new ApolloServer({
            typeDefs,
            resolvers,
            context: () => ({ repos, admin: { id: mockAdminUserID } }),
        });

        graphlQLCreated = createTestClient(graphQLServer);

        mock = app.listen(1337);
    });


    after((done) => {
        models.sequelize.close();
        mock.close(done);
    });

    describe("API", () => {
        it('should ok when login with username password for admin', function (done) {
            request(mock)
                .post('/admin/login')
                .expect(200)
                .send({ "username": "diepbang", "password": "123456789" })
                .end(function (err, res) {
                    expect(res.body.data).to.not.be.undefined
                    done(err);
                });
        });

    })

    describe('Mutation', () => {
        it('Get product detail by id', async (done) => {
            const { query } = graphlQLCreated;
            const res = await query({
                query: QUERY_GET_PRODUCT_BY_ID, variables: {
                    productId: 1
                }
            });
            expect(res.data.get_product.id).to.not.be.undefined
            expect(res.data.get_product.name).to.not.be.undefined
            done();
        });

        it('Get products by filters', async (done) => {
            const { query } = graphlQLCreated;
            const res = await query({
                query: QUERY_GET_PRODUCTS_BY_FILTER, variables: {
                    filterInput: { size: 10, page: 0 }
                }
            });
            expect(res.data.list_product.length).to.not.be.undefined
            expect(res.data.list_product).to.be.length.above(1)
            done();
        });

        it('Get products by filters', async (done) => {
            const { query } = graphlQLCreated;
            const res = await query({
                query: QUERY_GET_PRODUCTS_BY_FILTER, variables: {
                    filterInput: { size: 10, page: 0 }
                }
            });
            expect(res.data.list_product.length).to.not.be.undefined
            expect(res.data.list_product).to.be.length.above(1)
            done();
        });
    });
});
