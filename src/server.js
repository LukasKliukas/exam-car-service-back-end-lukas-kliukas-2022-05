require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mysql = require('mysql2/promise');
const { carsRoutes } = require('./routes/carsRoutes');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.SERVER_PORT || 5000;

const app = express();

//MiddleWare
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.get('/', (request, response) => {
  response.send('hello from back end');
});
app.use('/auth/', authRoutes);
app.use('/', carsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
