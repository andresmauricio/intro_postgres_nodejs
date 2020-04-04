CREATE DATABASE library; --Creación base de datos

-- listar bases de datos -->  \l
-- listar tablas         -->  \dt
-- usar base de datos    -->  \c {name_database}
-- salir de postgress    --> \q

-- creación de tablas
CREATE TABLE books(
    section int,
    title text,
    author text
);

-- insertar datos en una tabla
INSERT INTO books VALUES 
    (1,'Foundation', 'Isaac Asimov');

INSERT INTO books VALUES 
    (2,'Digital Fortress', 'Dan Brown'),
    (3,'World War Z', 'Max Brooks');

--Listar datos de una tabla
SELECT * FROM books;

CREATE TABLE users(
    username text,
    password text
);

INSERT INTO users VALUES 
    ('joe', 'joe123'),
    ('rayan', 'rayan123'),
    ('doe', 'doe123');

-- borrar un dato de una tabla especifico
DELETE FROM users WHERE username = 'doe';

-- Actualizar datos

UPDATE users SET username = 'Andy' WHERE username = 'rayan';