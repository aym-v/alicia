CREATE TABLE users (
    id uuid PRIMARY KEY,
    username text UNIQUE,
    password_hash text
);
