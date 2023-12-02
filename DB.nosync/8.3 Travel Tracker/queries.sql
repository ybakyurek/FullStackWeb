create table capitals(
	id serial primary key,
	country varchar(45),
	capital varchar(45)
);

create table flags(
	id serial primary key,
	name varchar(45),
	flag text
);


create table world_food(
	id serial primary key,
	country varchar(45),
	rice_production FLOAT,
    wheat_production float
);


create table countries(
	id serial primary key,
	country_code char(2),
	country_name  varchar(100)
);

create table visited_countries(
	id serial primary key,
	country_code char(2)
);

CREATE TABLE users(
id SERIAL PRIMARY KEY,
name VARCHAR(15) UNIQUE NOT NULL,
color VARCHAR(15)
);

CREATE TABLE visited_countries(
id SERIAL PRIMARY KEY,
country_code CHAR(2) NOT NULL,
user_id INTEGER REFERENCES users(id)
);

INSERT INTO users (name, color)
VALUES ('Angela', 'teal'), ('Jack', 'powderblue');

INSERT INTO visited_countries (country_code, user_id)
VALUES ('FR', 1), ('GB', 1), ('CA', 2), ('FR', 2 );

SELECT *
FROM visited_countries
JOIN users
ON users.id = user_id;


