import type { Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/db.js';
connectDB()

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3001;

app.get('/',(req:Request,res:Response)=>{
  res.json({message:"the devpulse server is started"})
})

app.listen(PORT,()=>{
  console.log(`the server is running at ${PORT}`)
})