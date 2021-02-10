// To bring modules
const express = require('express');
const connectDB = require('./config/db');

// Connect Database
connectDB();

const app = express();

app.get('/', (req, res) =>
    res.json({msg: 'Noice'})
);

//Define our routes
app.use('/api/users', require('./routes/home'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/testroutes', require('./routes/testroutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));