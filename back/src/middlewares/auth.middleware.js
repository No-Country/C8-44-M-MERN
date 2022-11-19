const JwtStrategy = require("passport-jwt").Strategy,
ExtractJwt = require("passport-jwt").ExtractJwt;

//const Users = require("../models/user.model");
const UsersDaoMongoDB = require("../DAOs/usersDaoMongoDb");
const usersApi = new UsersDaoMongoDB();

module.exports = (passport) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: "No_Country-C8_44", // debe estar en una variable de entorno
  };
  passport.use(
    new JwtStrategy(opts, async (decoded, done) => {
      try {
        const response = await usersApi.findOneById(decoded.id);
        if (!response) return done(null, false);
        console.log("decoded jwt", decoded);
        return done(null, decoded);
      } catch (error) {
        done(error.message);
      }
    })
  );
};