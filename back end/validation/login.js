const Validator = require("validator");
const isEmpty = require("./is-empty");

exports.validateLoginUserInput = function (data) {
  var errors = {};
  var logindata;
  data.password = !isEmpty(data.password) ? data.password : "";

  data.email = !isEmpty(data.email) ? data.email : "";
  data.userName = !isEmpty(data.userName) ? data.userName : "";

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isEmpty(data.email) && !Validator.isEmpty(data.password)) {
    logindata = {
      email: data.email,
    };
  } else if (!Validator.isEmpty(data.userName) && !Validator.isEmpty(data.password)) {
    logindata = {
      userName: data.userName,
    };
  }

  return {
    logindata,
    errors,
    isValid: isEmpty(errors),
  };
};
