const express = require('express');
const connectDB = require('./config/db');
const hospedeRoutes = require('./routes/hospedeRoutes');
const quartoRoutes = require('./routes/quartoRoutes');
const reservaRoutes = require('./routes/reservaRoutes');

const app = express();


connectDB();


app.use(express.json());


app.get('/', (req, res) => {
  res.send('API do Sistema de Reservas de Hotel');
});

app.use('/api/hospedes', hospedeRoutes);
app.use('/api/quartos', quartoRoutes);
app.use('/api/reservas', reservaRoutes);

module.exports = app;