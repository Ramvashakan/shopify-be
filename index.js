const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const { ItemsRouter } = require('./Items/Router');
const { OrderRouter } = require('./Orders/Router');
const { WaiterRouter } = require('./Waiters/Router');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://0.0.0.0:27017/restaurant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

app.use('/items', ItemsRouter);
app.use('/orders', OrderRouter);
app.use('/waiter', WaiterRouter);

app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
