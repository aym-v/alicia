CREATE TABLE users (
    id uuid PRIMARY KEY,
    username text UNIQUE,
    password_hash text
);
CREATE TABLE ads (
    id uuid PRIMARY KEY,
    ad_name text,
    width integer,
    height integer
);