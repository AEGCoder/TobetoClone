const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const mainRouter = require('./routers');
const connectDb = require('./db/config');
dotenv.config();
const app = express();
const port = 8000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/api', mainRouter);

connectDb();
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
} );