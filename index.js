const { Pool } = require('pg');

const config = {
    user:  'postgres',
    host: 'localhost',
    password: '',
    database: 'library'
}

const pool = new Pool(config);

const getBooks = async () => {
    try {
        const response = await pool.query('SELECT * FROM books');
        console.log(response.rows);
        pool.end() // Solo por ser un script para cerrar la conexión
    } catch (error) {
        console.log(error);
    }
}

const insertUser = async () => {
    try {
        const query = 'INSERT INTO users(username, password) VALUES($1, $2)';
        const value =  ['cameron', 'cameron123'];
        const response = await pool.query(query, value);
        console.log(response);
        pool.end();
    }catch (error) {
        console.log(error);
    }
}

const deleteUser = async () => {
    try {
        const query = 'DELETE FROM users WHERE username = $1';
        const value = ['joe'];
        const response = await pool.query(query, value);
        console.log(response);
        pool.end();
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async () => {
    try {
        const query = 'UPDATE users SET username = $1 WHERE username = $2';
        const value = ['Mauricio', 'cameron'];
        const result = await pool.query(query, value);
        console.log(result); 
    } catch (error) {
        console.log(error);
    }
}

updateUser();

