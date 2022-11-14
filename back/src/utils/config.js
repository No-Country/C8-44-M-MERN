
const mongoDb = {
    connectionString: "mongodb+srv://admin:admin@no-country.kymhisz.mongodb.net/?retryWrites=true&w=majority",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        dbName: "habit-app"
      }
};


exports.mongoDb = mongoDb;
