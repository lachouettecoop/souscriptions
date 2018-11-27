const jwt = require("jsonwebtoken");

const makeJWTUserToken = user => {
  const firstname = user.description;
  const lastname = user.sn.toUpperCase();

  // TODO Fetch user status from local datastore
  const status = "nouveau";

  return jwt.sign(
    {
      data: {
        firstname,
        lastname,
        displayName: `${firstname} ${lastname}`,
        email: user.mail,
        barcode: user.homeDirectory,
        status
      }
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

module.exports = makeJWTUserToken;
