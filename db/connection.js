const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Check Database Connection
db.connect((error) => {
  if (error) {
    console.error("Koneksi ke database gagal: ", error);
  } else {
    console.log("Koneksi ke database berhasil terhubung");
  }
});

module.exports = db;
