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
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL UNIQUE,
    age int DEFAULT 18
);


-- ## insert data
INSERT INTO users VALUES (
    1,
    'abc@gmail.com', 
    '904580148'
);

-- ## selete all data from a table
  SELECT * FROM users;