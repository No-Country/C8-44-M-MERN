require('dotenv').config()

const mongoDb = {
  connectionString: 
    process.env.MONGO_CONNECTION_STRING,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    dbName: "habit-app",
  },
};
const googleAuth = {
  clientID:     process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8080/google/callback",
  passReqToCallback   : true
};

module.exports = {mongoDb, googleAuth};
