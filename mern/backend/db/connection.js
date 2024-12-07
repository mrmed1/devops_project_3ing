import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}

connectToDatabase();

const db = client.db("employees");

export default db;