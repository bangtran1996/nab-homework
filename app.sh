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
    docker-compose -f docker/docker-compose.yml up
}

function module_install() {
    echo "Module installing ..."
    npm install
}

function api() {
  case $1 in
  install_module)
    if [ ! -d "./node_modules" ]
    then
        module_install
    fi
    ;;
  up)
    infra_up
    app_up
    ;;
  migrate)
    npx sequelize-cli db:migrate
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
