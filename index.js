const polka = require("polka");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");
const app = polka();

const SUPER_SECRET_TOKEN = "anuisteaniuetaulied31";

if (process.env.NODE_ENV !== "production") {
  const Bundler = require("parcel-bundler");
  const bundler = new Bundler("src/index.html");
  console.log("ParcelJS bundler ON");
  app.use(bundler.middleware());
}

const makeJWTUserToken = user => {
  return jwt.sign(
    {
      data: { email: user.email, displayName: "Jean TIBOU" }
    },
    SUPER_SECRET_TOKEN,
    { expiresIn: "1h" }
  );
};

app
  .use(json())
  .post("/login", (req, res) => {
    let response;
    if (req.body.password === "coucou") {
      response = {
        token: makeJWTUserToken(req.body)
      };
    } else {
      res.statusCode = 401;
      response = {
        error: "invalid password"
      };
    }
    res.end(JSON.stringify(response));
  })
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3000`);
  });
