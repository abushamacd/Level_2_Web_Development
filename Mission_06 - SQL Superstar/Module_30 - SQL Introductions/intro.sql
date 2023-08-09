-- Active: 1691426787114@@127.0.0.1@5432@new_db

--  ## create TABLE

-- CREATE TABLE "user" (

--     user_id INT,

--     email VARCHAR(50),

--     phone VARCHAR(15)

-- );

-- ## update table name

-- ALTER TABLE "user" RENAME TO "users";

-- ## delete TABLE

-- DROP TABLE "users"

-- ## CREATE a TABLE with CONSTRAINTS

CREATE TABLE
    users (
        user_id SERIAL PRIMARY KEY,
        email VARCHAR(50) NOT NULL UNIQUE,
        phone VARCHAR(15) NOT NULL UNIQUE,
        age int DEFAULT 18
    );

-- ## insert data

INSERT INTO users
VALUES (
        1,
        'abc@gmail.com',
        '904580148'
    );

INSERT INTO
    users (user_id, email, phone)
VALUES (
        2,
        'abc1@gmail.com',
        '9041580148'
    );

INSERT INTO users
VALUES (
        3,
        'abc3@gmail.com',
        '9043580148'
    ), (
        4,
        'abc4@gmail.com',
        '9044580148'
    );

-- ## selete all data from a table

SELECT * FROM users;

-- ## DELETE all data from table

TRUNCATE TABLE users;

-- add column into TABLE

ALTER TABLE users ADD COLUMN password VARCHAR(255) NOT NULL;

-- ## DELETE COLUMN

ALTER TABLE users DROP COLUMN age;

-- change data TYPES

ALTER TABLE users ALTER COLUMN phone type VARCHAR(11);

-- set DEFAULT value of a COLUMN

ALTER TABLE users ALTER COLUMN password SET DEFAULT 'user@123';

-- remove DEFAULT value of a COLUMN

ALTER TABLE users ALTER COLUMN password DROP DEFAULT;

-- rename COLUMN

ALTER TABLE users RENAME COLUMN phone to mobile;

-- add CONSTRAINTS

ALTER Table users alter COLUMN mobile set NOT NULL;

-- drop CONSTRAINTS

ALTER Table users alter COLUMN mobile DROP NOT NULL;