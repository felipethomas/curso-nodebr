# Instalação
- https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce
- sudo groupadd docker
- sudo usermod -aG docker $USER

# Comandos 
- docker ps

## Postgres
- docker run \
    --name postgres \
    -e POSTGRES_USER=felipethomas \
    -e POSTGRES_PASSWORD=Ftsa2016 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

- docker exec -it postgres /bin/bash

- docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## Mongodb    
- docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=Ftsa2016 \
    -d \
    mongo:4

- docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient   

- docker exec -it mongodb \
    mongo --host localhost -u admin -p Ftsa2016 --authenticationDatabase admin \
    --eval "db.getSiblingDB('heroes').createUser({user: 'felipethomas', pwd: 'Ftsa2016', roles: [{role: 'readWrite', db: 'heroes'}]})"

## Outros
- docker container start postgres