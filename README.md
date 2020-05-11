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
