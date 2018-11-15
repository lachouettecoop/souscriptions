require("dotenv").config();

const polka = require("polka");
const { json } = require("body-parser");
const authenticate = require("./server/lcc/authenticate");
const makeJWTUserToken = require("./server/lcc/makeJWTUserToken");

const app = polka();

if (process.env.NODE_ENV !== "production") {
  const Bundler = require("parcel-bundler");
  const bundler = new Bundler("src/index.html");
  console.log("ParcelJS bundler ON");
  app.use(bundler.middleware());
}

app
  .use(json())
  .post("/login", async (req, res) => {
    let response;
    try {
      response = {
        token: makeJWTUserToken(
          await authenticate(req.body.email, req.body.password)
        )
      };
    } catch (error) {
      res.statusCode = 401;
      response = {
        error
      };
    }
    res.end(JSON.stringify(response));
  })
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3000`);
  });