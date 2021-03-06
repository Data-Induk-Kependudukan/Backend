require('dotenv').config({ path: '../../.env' });
const { MongoClient, ObjectID } = require("mongodb");

const uri = process.env.DATABASE_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const oid = (id) => {
  if (!ObjectID.isValid(id)) {
    return null;
  }
  return new ObjectID(id);
}

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to database");
  } catch (e) {
    console.log(e);
  }
}

function getCollection(collectionName) {
  return client.db('DataInduk').collection(collectionName);
}

module.exports = { run, getCollection, oid}