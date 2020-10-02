const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("registeredUsers");

const Keys = require("./Keys");
const isEmpty = require("../validation/is-empty");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = Keys.secretOrKey;
module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      if (!isEmpty(jwt_payload)) {
        User.findById(jwt_payload.id)
          .then((data) => {
            if (data) {
              return done(null, data);
            }
            return done(null, false);
          })
          .catch((err) => console.log(err));
      }
    })
  );
};
