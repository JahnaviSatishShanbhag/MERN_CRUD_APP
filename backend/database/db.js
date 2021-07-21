const mongoose = require('mongoose');
const env=require('dotenv').config();

const url=process.env.db_url;

function db() {
    mongoose.connect(url,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
        .then(() => console.log('Connected to the database'))
        .catch(() => console.log('Cannot connect to the database'));
}

module.exports = db;