const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const articleRoutes = require('./routes/articleRoutes');
const tutRoutes = require('./routes/tutRoutes');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.use('/auth/', authRoutes);
app.use('/posts/', articleRoutes);
app.use('/', tutRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
