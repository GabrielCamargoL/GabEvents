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
app.use(routes);
// app.use(cors({
//   origin: ['https://gabevents.herokuapp.com', '*'],
//   methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,PATCH,UPDATE');
  app.use(cors());
  next();
});

app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));