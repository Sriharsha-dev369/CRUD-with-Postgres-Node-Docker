import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool  from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandling from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT  = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api', userRoutes);

app.get('/', async (req,res)=>{
    const result = await pool.query('SELECT current_database()');
    console.log(result);
    console.log('end');
    res.send(`the database name is :${result.rows[0].current_database}`);
});

///Error handling middleware
app.use(errorHandling);



//Server running 
app.listen(PORT , ()=>{
    console.log(`server is running on http:localhost${PORT}`);
})