const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'mysql', // This should be 'mysql' if in Docker container
    user: 'your_user',
    password: 'your_password',
    database: 'your_database_name'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        throw err; // Or handle error gracefully
    }
    console.log('Connected to MySQL');
});

module.exports = db;
