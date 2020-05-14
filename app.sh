DIR="./node_modules"

function infra_down() {
    echo "Downing infra ..."
    docker-compose -f docker/docker-compose.infra.yml down --remove-orphans
}

function app_down() {
    echo "Downing app ..."
    docker-compose -f docker/docker-compose.yml down --remove-orphans
}

function infra_up() {
    echo "Starting infra ..."
    docker-compose -f docker/docker-compose.infra.yml up -d
}

function app_up() {
    echo "Starting app ..."
    docker-compose -f docker/docker-compose.yml up api
}

function module_install() {
    echo "Module installing ..."
    npm install
}

function run_test() {
    echo "Test is running ..."
    docker-compose -f docker/docker-compose.yml up api-test
    docker-compose -f docker/docker-compose.yml stop api-test
}

function run_migration() {
    npx sequelize-cli db:migrate
}

function run_seed() {
    npx sequelize-cli db:seed:all
}

function api() {
  case $1 in
  install_module)
    if [ ! -d "./node_modules" ]
    then
        module_install
    fi
    ;;
  test)
    infra_up
    run_test
    ;;
  init)
    npm install --save-dev sequelize-cli
    infra_up
    sleep 5
    run_migration
    sleep 5
    run_seed
    rm -rf node_modules
    app_up
    ;;
  up)
    infra_up
    app_up
    ;;
  migrate)
    npx sequelize-cli db:migrate
    ;;
  seed)
    npx sequelize-cli db:seed:all
    ;;
  down)
    infra_down
    app_down
    ;;
  esac
}

case $1 in
api)
  api ${@:2}
  ;;
esac
