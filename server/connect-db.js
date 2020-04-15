const mongoose = require('mongoose');

const url = `mongodb://localhost:27017/contImprovementDB`;

const db = null;

export async function connectDB(){
  if (db) return db;
  mongoose.connect(url, {useNewUrlParser: true});
  db = mongoose.connection;
  return db;
}
