const JwtStrategy = require("passport-jwt").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
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
  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID:
          "854284274366-kv7t28e67ga42jo32tntdultc6ejim6t.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8080/api/user/google/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        console.log(cb);
        /* User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return cb(err, user);
        }); */
        return done(null, profile);
      }
    )
  );
  passport.serializeUser(function (user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function (user, cb) {
    cb(null, user);
  });
};
