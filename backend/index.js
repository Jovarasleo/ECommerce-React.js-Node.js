import express, { request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import joi from "joi";
import shortuuid from "short-uuid";
dotenv.config();

const connect = process.env.MONGO_CONNECTION_STRING;
const mongoClient = new MongoClient(connect);
const port = process.env.port;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/items", async (req, res) => {
  const connection = await mongoClient.connect();
  const data = await connection
    .db("ECommerce")
    .collection("Items")
    .find({})
    .toArray();
  res.send(data);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
