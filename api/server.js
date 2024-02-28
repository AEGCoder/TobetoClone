const express = require('express');
//const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routers/userRouter');
const {notFound, errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./db/db');

dotenv.config();
const PORT = process.env.PORT || 6000;
const app = express();
//app.use(cors());
app.use(express.json());
app.use(cookieParser());



// Router
app.use('/api/users', userRouter);

// Middleware
app.use(notFound);
app.use(errorHandler);




app.listen(PORT,(req,res) => {
     connectDB();
    console.log(`Server is running on port ${process.env.PORT}.`.yellow.bold);
} )
