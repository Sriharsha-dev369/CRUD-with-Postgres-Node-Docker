import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT  = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors);

//routes

///Error handling middleware

//Server running 
app.listen(PORT , ()=>{
    console.log(`server is running on http:localhost${PORT}`);
})