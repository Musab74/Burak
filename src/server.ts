
// import moment from 'moment'; // const moment = require
import dotenv from 'dotenv';
dotenv.config();

// console.log("Port:", process.env.PORT);

// console.log("MONGO_URL:", process.env.MONGO_URL);

//cluster => Database => collection => Document

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL as string, {}).
then((date) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    
})
.catch((err) => console.log("Error on connection MOngoDb", err)
)