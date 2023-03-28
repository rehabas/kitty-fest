BEGIN;

DROP TABLE IF EXISTS users, posts, comments, stories, relationships, likes CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password VARCHAR(200) NOT NULL,
    name VARCHAR(45) NOT NULL,
    cover_picture TEXT,
    profile_picture TEXT,
    city VARCHAR(100),
    website TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    description TEXT DEFAULT NULL,
    img TEXT DEFAULT NULL,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    created_on DATE
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    created_at DATE,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE stories (
    id SERIAL PRIMARY KEY,
    img TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE relationships (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

COMMIT;