const jwt = require("jsonwebtoken");
const errorMessage = require("../utils/errorMessageConstructor");

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw errorMessage(401, "No Token provided. Authorization header is required");

  const tokenStartsWithBearer = authorization.startsWith("Bearer ");

  if (!tokenStartsWithBearer) throw errorMessage(401, "Invalid Token format. Bearer is required");

  const token = authorization.split(" ")[1];

  const decodedInfos = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) throw errorMessage(401, "Invalid Token");
    return decoded;
  });

  req.user = decodedInfos;

  console.log("DECODED INFOS", decodedInfos);

  next();
};
