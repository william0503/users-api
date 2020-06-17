const express = require('express')
const mongoose = require('mongoose');
const cors= require('cors');
const requireDir = require('require-dir');

const app = express()
app.use(express.json())
app.use(cors());
require('dotenv/config');
mongoose.connect(process.env.MONGODB_CONNECTIONSTRING,{useNewUrlParser: true,useUnifiedTopology: true});
requireDir('./app/models');
app.use('/api', require('./routes'))

app.listen(process.env.PORT || 3000)

module.exports = app