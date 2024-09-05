const { MongoClient, ServerApiVersion } = require("mongodb");
const { isEmpty, isUndefinedOrNull } = require("../libs/core");
const uri =
  "mongodb+srv://nannysoscolorado:crIXCxtF2IXYwbrD@cluster0.7ynnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  appName: "NANNYSOS-SERVER",
  minPoolSize: 50,
  maxPoolSize: 400,
});

const connectToMongoDBCluster = async () => {
  const mongoClient = await client
    .connect()
    .then((res) => {
      console.log("You successfully connected to MongoDB!");
      return res;
    })
    .catch((error) => {
      const errorMessage = `Error during connecting MongoDB Cluster. Error: +  ${error}`;
      console.log(errorMessage);
      throw new Error(errorMessage);
    });
  return mongoClient;
};

const getMongoClient = async () => {
  let mongoClient;
  mongoClient = await connectToMongoDBCluster();
  return mongoClient;
};

const getAllReview = async () => {
  let db, collection;
  const mongoClient = await getMongoClient();
  db = await mongoClient.db("sample_mflix");
  collection = db.collection("comments");
  let dbs = await collection.find().toArray();
  return dbs;
};

const connectToMongoDB = async () => {
  let db, collection;
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
    db = await client.db("sample_mflix");
    collection = db.collection("comments");
    console.log("Colletion: ", collection);
    let dbs = await collection.findOne({ name: "Mercedes Tyler" });
    return dbs;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

module.exports = {
  getAllReview,
};
