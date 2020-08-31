// Create server
const express = require('express');
const cors = require('cors');

// Inizialize server
const app = express();

// Settings
// If theres a port setted, used it. If not, use port 4000
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes. Here u define the urls the app can use
app.use('/api/books', require('./routes/books'));

// Export app
module.exports = app;