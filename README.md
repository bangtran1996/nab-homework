# NAB Coding homework 
### Prerequisite
1. Docker
2. Node v10.16.1 or above
3. Redis
4. PostgresSQL

### Start app
1. Run this command to start app
 - ./app.sh api start

#### Supported commands
1. Start api 
 - ./app.sh api up ( start api only )

2. Run migrations
 - ./app.sh api migrate

3. Run seed
 - ./app.sh api seed

4. Test api
 - ./app.sh api test (need to run migrations and seed first before run test)


### DB Diagram
![Image of DB Diagram](https://octodex.github.com/images/yaktocat.png)


### API flow diagram
![Image of DB Diagram](https://octodex.github.com/images/yaktocat.png)


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
