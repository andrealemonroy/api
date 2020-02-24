const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fathers = require('./routes/api/fathers');
const app = express();
const cors = require('cors')

// DB Config
// const db = require('./config/keys.js').mongoURI;

// Body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/happyland')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

// Use Routes
app.use('/api/v1/fathers', fathers);
const port = 1000;

app.listen(port, () => console.log(`Server running on port ${port}`));
