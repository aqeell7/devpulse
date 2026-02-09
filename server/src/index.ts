import type { Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv'

const app = express();
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 3001;

app.get('/',(req:Request,res:Response)=>{
  res.json({message:"the devpulse server is started"})
})

app.listen(PORT,()=>{
  console.log(`the server is running at ${PORT}`)
})