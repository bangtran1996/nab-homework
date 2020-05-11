# NAB Coding homework 
#### Note : Need to run migration and seed before run test 
##### Sorry for this inconvenience, usually i will seperate it into seperate docker and database for running test only
##### Just my schedule little rush, so i don't have time to make everything as i wanted

### Prerequisite
1. Docker
2. Node v10.16.1 or above
3. Redis
4. PostgresSQL

### Start app
1. First run? run this command to start app.
 - ./app.sh api init ( start api docker, db, redis, run migration, seed )

#### Supported commands
1. Start api 
 - ./app.sh api up ( start api docker only no db, redis )

2. Run migrations
 - ./app.sh api migrate

3. Run seed
 - ./app.sh api seed

4. Test api
 - ./app.sh api test (need to run migrations and seed first before run test)


### GraphQL Playground
- http://localhost:8000/graphql/


### API (Im using GraphQL in this project and admin login in REST APIs)
#### Get list of products 
curl 'http://localhost:8000/graphql/' \
  -H 'Connection: keep-alive' \
  -H 'accept: */*' \
  -H 'content-type: application/json' \
  -H 'Origin: http://localhost:8000' \
  -H 'Referer: http://localhost:8000/graphql/' \
  --data-binary '{"operationName":null,"variables":{},"query":"{\n  list_product(filterInput: {size: 10, page: 0}) {\n    id\n    name\n    color\n    created_at\n    updated_at\n  }\n}\n"}' \
  --compressed


#### Get list of products with filters
curl 'http://localhost:8000/graphql/' \
  -H 'Connection: keep-alive' \
  -H 'accept: */*' \
  -H 'content-type: application/json' \
  -H 'Origin: http://localhost:8000' \
  -H 'Referer: http://localhost:8000/graphql/' \
  --data-binary '{"operationName":null,"variables":{},"query":"{\n  list_product(filterInput: {size: 10, page: 0, name: \"Shoe 01\"}) {\n    id\n    name\n    color\n    created_at\n    updated_at\n  }\n}\n"}' \
  --compressed

#### Get product by id
curl 'http://localhost:8000/graphql/' \
  -H 'Connection: keep-alive' \
  -H 'accept: */*' \
  -H 'content-type: application/json' \
  -H 'Origin: http://localhost:8000' \
  -H 'Referer: http://localhost:8000/graphql/' \
  --data-binary '{"operationName":null,"variables":{},"query":"{\n  get_product(productId: 1) {\n    id\n    brand_id\n    id\n    name\n  }\n}\n"}' \
  --compressed

#### Login by username or password
curl -X POST -H "Content-Type: application/json" \
 -d '{"username": "diepbang", "password": "123456789" }' \
 http://localhost:8000/admin/login

#### Create product (admin api)
curl 'http://localhost:8000/graphql/' \
  -H 'Connection: keep-alive' \
  -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJkaWVwYmFuZyIsInBhc3N3b3JkIjoiJDJiJDEwJDNvLzJ0Rk8xTTFDdEM2YkxvT3drWi5DM1JwWHR6dmliUzlWYm0uVWVycmdYemZ5MTIvRE5xIiwiY3JlYXRlZEF0IjoiMjAyMC0wNS0xMVQwNDozMzozOS45NjNaIiwidXBkYXRlZEF0IjoiMjAyMC0wNS0xMVQwNDozMzozOS45NjNaIiwiZGVsZXRlZEF0IjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMC0wNS0xMVQwNDozMzozOS45NjNaIiwidXBkYXRlZF9hdCI6IjIwMjAtMDUtMTFUMDQ6MzM6MzkuOTYzWiIsImlhdCI6MTU4OTE3NTAzMSwiZXhwIjoxNTg5MzA0NjMxfQ.yvhcX8iSmERGuORZEV49plH9apIVFxo3qd2arBwEZqc' \
  -H 'content-type: application/json' \
  -H 'Origin: http://localhost:8000' \
  -H 'Referer: http://localhost:8000/graphql/' \
  -H 'Accept-Language: en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7' \
  --data-binary '{"operationName":null,"variables":{},"query":"mutation {\n  create_product(productCreateInput: {name: \"bang\", price: 10.2, size: \"10cm\", color: \"bang\", category_id: 1, brand_id: 1}) {\n    id\n  }\n}\n"}' \
  --compressed

#### Create product category (admin api)
curl 'http://localhost:8000/graphql/' \
  -H 'Connection: keep-alive' \
  -H 'accept: */*' \
  -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJkaWVwYmFuZyIsInBhc3N3b3JkIjoiJDJiJDEwJDNvLzJ0Rk8xTTFDdEM2YkxvT3drWi5DM1JwWHR6dmliUzlWYm0uVWVycmdYemZ5MTIvRE5xIiwiY3JlYXRlZEF0IjoiMjAyMC0wNS0xMVQwNDozMzozOS45NjNaIiwidXBkYXRlZEF0IjoiMjAyMC0wNS0xMVQwNDozMzozOS45NjNaIiwiZGVsZXRlZEF0IjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMC0wNS0xMVQwNDozMzozOS45NjNaIiwidXBkYXRlZF9hdCI6IjIwMjAtMDUtMTFUMDQ6MzM6MzkuOTYzWiIsImlhdCI6MTU4OTE3NTAzMSwiZXhwIjoxNTg5MzA0NjMxfQ.yvhcX8iSmERGuORZEV49plH9apIVFxo3qd2arBwEZqc' \
  -H 'content-type: application/json' \
  -H 'Origin: http://localhost:8000' \
  -H 'Referer: http://localhost:8000/graphql/' \
  --data-binary '{"operationName":null,"variables":{},"query":"mutation {\n  create_category(categoryCreateInput: {name: \"bang\", type: \"qwe\"}) {\n    id\n  }\n}\n"}' \
  --compressed
  
#### Create brand for product (admin api)
curl 'http://localhost:8000/graphql/' \
  -H 'Connection: keep-alive' \
  -H 'accept: */*' \
  -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJkaWVwYmFuZyIsInBhc3N3b3JkIjoiJDJiJDEwJDNvLzJ0Rk8xTTFDdEM2YkxvT3drWi5DM1JwWHR6dmliUzlWYm0uVWVycmdYemZ5MTIvRE5xIiwiY3JlYXRlZEF0IjoiMjAyMC0wNS0xMVQwODowMzo1Ny43OTlaIiwidXBkYXRlZEF0IjoiMjAyMC0wNS0xMVQwODowMzo1Ny43OTlaIiwiZGVsZXRlZEF0IjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMC0wNS0xMVQwODowMzo1Ny43OTlaIiwidXBkYXRlZF9hdCI6IjIwMjAtMDUtMTFUMDg6MDM6NTcuNzk5WiIsImlhdCI6MTU4OTE4NDkxMCwiZXhwIjoxNTg5MzE0NTEwfQ.w56E5VLIEH6l7MtcM1BLzJCb58SI_V7Rb49tYDjqcLU' \
  -H 'content-type: application/json' \
  -H 'Origin: http://localhost:8000' \
  -H 'Referer: http://localhost:8000/graphql/' \
  --data-binary '{"operationName":null,"variables":{},"query":"mutation {\n  create_brand(brandCreateInput: {name: \"asd\", code: \"channel\"}) {\n    id\n  }\n}\n"}' \
  --compressed


### DB Diagram
![Image of DB Diagram](https://github.com/bangtran1996/nab-homework/blob/master/db_diagram.png)


### API flow diagram
![Image of DB Diagram](https://github.com/bangtran1996/nab-homework/blob/master/diagram.png?raw=true)


### Folder strucle
#### ./db/
> migrations and db model files.

#### ./controllers/
> rest api controllers.

#### ./resolvers
> graphql resolvers

#### ./test
> unit test, integration test

#### ./schema
> grahpql api schema

#### ./docker
> docker, jenkin, circleci, deployment files ...

#### ./helpers
> lib, helpers inside

### ./constants
> custom http, error status
