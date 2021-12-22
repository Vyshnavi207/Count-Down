const joi = require("@hapi/joi");
// Register Validation
const registerValidation = (data) => {
  const schema = joi.object({
    Name: joi.string().min(6).required(),
    Email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
    MobileNo: joi.string().min(9).required(),
    Department: joi.string().required(),
    College: joi.string().required(),
    Year: joi.string().min(4).required(),
  });
  return schema.validate(data);
};
// Register Validation
const LoginValidation = (data) => {
  const schema = joi.object({
    Email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
  });
  return schema.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.LoginValidation = LoginValidation;
