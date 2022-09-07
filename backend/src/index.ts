import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config();
import routes from './routes';

async function main() {
  await mongoose.connect('mongodb+srv://Gabriel:06111997s20@cluster0.s6sme.gcp.mongodb.net/processos');
}
main().catch(err => console.log('mongoDB connection error: ' + err));

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(
  cors({
    allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
    exposedHeaders: ["authorization"], // you can change the headers
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  }));
app.use(routes);

app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));