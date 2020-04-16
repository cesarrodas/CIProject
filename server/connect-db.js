const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/contImprovementDB';

let db = null;

const connectDB = async () => {
  if (db) return db;
  mongoose.connect(url, { useNewUrlParser: true });
  db = mongoose.connection;
  return db;
};

export default connectDB;
