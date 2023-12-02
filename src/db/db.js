const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'escribo'
});


db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao MySQL');
});


const queryAsync = (sql, values) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  db,
  queryAsync,
};
