const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'unsplash'
});

connection.connect((err) => {
  if (err) {
    console.log('Unable to connect to the database:', err);
  } else {
    console.log('Connected to MySQL Successfully.!')
  }
});

// Your Database Queries Here!!





// Don't forget to export your functions!
module.exports = connection
