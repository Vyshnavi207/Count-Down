const mongoose = require('mongoose');
require('dotenv').config({ path: './src/env/.env' });
mongoose.connect(process.env.dbURL+process.env.dbName, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

//require all the models here
//const example = require('./models/example');
