Docs
---

To build this in Docker:

    docker-compose build

Then to run it:

    docker-compose up --detach

Get a shell on the frontend:

    docker exec -it api-debug_api_1 bash

Create a MySQL database:

    ./bin/create-db.sh

Run the migrations:

    ./node_modules/.bin/sequelize db:migrate --env test

Finally, run the tests in the shell with the unhandled promises detector:

    /project/node_modules/.bin/jest tests --detectOpenHandles
