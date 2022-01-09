#!/usr/bin/env bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER hobby;
    CREATE DATABASE hobby_db ENCODING UTF8;
    GRANT ALL PRIVILEGES ON DATABASE hobby_db TO hobby;
    ALTER USER hobby WITH PASSWORD 'password123';
    ALTER USER hobby WITH SUPERUSER;
EOSQL