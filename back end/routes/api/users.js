const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Keys = require("../../config/Keys");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/User.js").RegisteredUser;
const Cpuamd = require("../../models/CPU_Amd");
const CPUintel = require("../../models/CPU-intel");
const CPUcooler = require("../../models/CPU_Cooler");
const Gpu = require("../../models/GPU");
const motherboard = require("../../models/Motherboard");
const PowerSupply = require("../../models/PowerSupply");
const Ram = require("../../models/RAM");
const Storage = require("../../models/Storage");
const Flagdata = require("../../models/flagdata");
const Combinations = require("../../models/combinations");
const isEmpty = require("../../validation/is-empty");
const gravatar = require("gravatar");
const validateRegisterUserInput = require("../../validation/register").validateRegisterUserInput;
const validateLoginUserInput = require("../../validation/login").validateLoginUserInput;
const nodemailer = require("nodemailer");

router.get("/test", (req, res) => {
  console.log("here");
  res.json({ msg: "Users hahaah" });
});
router.get("/getUser/:userName", (req, res) => {
  User.findOne({ userName: req.params.userName })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ user: "User not found !!" });
      }

      return res.json({ userName: data.userName, name: data.name, rate: data.rate, email: data.email, phoneNumber: data.phone });
    })
    .catch((err) => console.log(err));
});

router.post("/signup", (req, res) => {
  req.body.password = req.headers.authorization;

  const { errors, isValid } = validateRegisterUserInput(req.body);
  if (!isValid) {
    return res.status(404).json(errors);
  }

  User.find(
    {
      $or: [{ email: req.body.email }, { userName: req.body.userName }],
    },
    function (err, doc) {
      if (!isEmpty(doc)) {
        for (let i = 0; i < doc.length; i++) {
          // max 3 iterates
          if (doc[i].email === req.body.email) {
            errors.email = "The Same Email Used before";
          }
          if (doc[i].userName === req.body.userName) {
            errors.userName = "The Same User Name Used before";
          }
        }

        return res.status(400).json(errors);
      }

      const newuser = new User({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
console.log("sa");
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
          if (err) throw err;
          newuser.password = hash;

          newuser
            .save()
            .then((user) => {
              return res.status(200).json(user);
            })
            .catch((err) => res.json(err));
        });
      });
    }
  );
});

router.post("/login", (req, res) => {
  req.body.password = req.headers.authorization;
  var { logindata, errors, isValid } = validateLoginUserInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne(logindata).then((user) => {
    if (!user) {
      return res.status(404).json({ user: "User not found !!" });
    }
    bcrypt.compare(req.body.password, user.password).then((ismatch) => {
      if (ismatch) {
        const payload = { id: user.id };
        jwt.sign(payload, Keys.secretOrKey, { expiresIn: 60 * 60 * 24 * 30 }, (err, token) => {
          var temp_user = {
            userName: user.userName,
            email: user.email,
            name: user.name,
          };

          res.status(200).json({ temp_user, success: true, token: "Bearer " + token });
        });
      } else {
        return res.status(404).json({ password: "password incorrect" });
      }
    });
  });
});
router.post("/userChangePassword", passport.authenticate("jwt", { session: false }), (req, res) => {
  //token + password

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) throw err;

      var myquery = { _id: req.user._id };
      var newvalues = { $set: { password: hash } };
      User.updateOne(myquery, newvalues, function (err, affected) {
        if (err) {
          console.log("update document error");
          return res.json(err);
        } else {
          console.log("password changed");
          return res.status(200).json({ msg: "password changed" });
        }
      });
    });
  });
});
router.get("/userInfo/:id", (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      if (data) {
        return res.status(200).json({
          username: data.userName,
          rating: data.rate,
          email: data.email,
        });
      }
      return res.status(404).json({ msg: "User not found" });
    })
    .catch((err) => console.log(err));
});
router.get("/cpuintel", (req, res) => {
  CPUintel.find()
    .then((intells) => res.json(intells))
    .catch((err) => res.status(404).json({ notavailable: "No intels found" }));
});

router.get("/cpuamd", (req, res) => {
  Cpuamd.find()
    .then((cpuamd) => res.json(cpuamd))
    .catch((err) => res.status(404).json({ notavailable: "No CPUAmd found" }));
});
router.get("/cpucooler", (req, res) => {
  CPUcooler.find()
    .then((CPUcooler) => res.json(CPUcooler))
    .catch((err) => res.status(404).json({ notavailable: "No CPUcooler found" }));
});
router.get("/gpu", (req, res) => {
  Gpu.find()
    .then((gpu) => res.json(gpu))
    .catch((err) => res.status(404).json({ notavailable: "No Gpu found" }));
});
router.get("/motherboard", (req, res) => {
  motherboard
    .find()
    .then((motherboard) => res.json(motherboard))
    .catch((err) => res.status(404).json({ notavailable: "No motherboard found" }));
});
router.get("/powersupply", (req, res) => {
  PowerSupply.find()
    .then((PowerSupply) => res.json(PowerSupply))
    .catch((err) => res.status(404).json({ notavailable: "No PowerSupply found" }));
});
router.get("/ram", (req, res) => {
  Ram.find()
    .then((Ram) => res.json(Ram))
    .catch((err) => res.status(404).json({ notavailable: "No Ram found" }));
});
router.get("/storage", (req, res) => {
  Storage.find()
    .then((Storage) => res.json(Storage))
    .catch((err) => res.status(404).json({ notavailable: "No Storage found" }));
});
router.post("/buildbeginner", (req, res) => {
  //req.body.compination

  Flagdata.find({ Budget: req.body.Budget, Major: req.body.Major, Work: req.body.Work, Gaming: req.body.Gaming })
    .then((data_flag) => {
      res.json(data_flag);
    })
    .catch((err) => console.log(err));
});
router.post("/displayallcompinations", (req, res) => {
  //req.body.compination

  Combinations.find({})
    .then((data_flag) => {
      res.json(data_flag);
    })
    .catch((err) => console.log(err));
});
router.post("/displaycompinations", (req, res) => {
  //req.body.compination

  Combinations.find({ Flag: req.body.Flag })
    .then((data_flag) => {
      res.json(data_flag);
    })
    .catch((err) => console.log(err));
});
router.post("/savehistory", passport.authenticate("jwt", { session: false }), (req, res) => {
  //req.body.compination

  User.findById(req.user.id)
    .then((data_user) => {
      data_user.History.push(req.body);
      data_user.current_compination = req.body;
      data_user.save();
      res.json({ success: true });
    })
    .catch((err) => console.log(err));
});
router.post("/gethistory", passport.authenticate("jwt", { session: false }), (req, res) => {
  //req.body.compination

  User.findById(req.user.id)
    .then((data_user) => {
      res.json(data_user.History);
    })
    .catch((err) => console.log(err));
});
module.exports = router;
