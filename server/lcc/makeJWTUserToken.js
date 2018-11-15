const jwt = require("jsonwebtoken");

const makeJWTUserToken = user => {
  const firstname = user.description;
  const lastname = user.sn.toUpperCase();

  return jwt.sign(
    {
      data: {
        firstname,
        lastname,
        displayName: `${firstname} ${lastname}`,
        email: user.mail,
        barcode: user.homeDirectory
      }
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

module.exports = makeJWTUserToken;
