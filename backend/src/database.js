const mongoose = require('mongoose');

// URL
const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: 'mongodb://localhost/databasetest';

// Connect mongodb server/instance
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

// When connetion open
connection.once('open', () => {
    console.log('db connected');
})