require("dotenv").config();

const { json } = require("body-parser");
const jsonServer = require("json-server");
const authenticate = require("./server/lcc/authenticate");
const makeJWTUserToken = require("./server/lcc/makeJWTUserToken");

const app = jsonServer.create();
const router = jsonServer.router("data/souscriptions.json");

app
  .use(json())
  .use(jsonServer.defaults({ static: "dist/" }))
  .use(
    jsonServer.rewriter({
      "/admin": "/admin.html"
    })
  );

// TODO Add authorizations
// Only auth users could access the API
// By default an user could only PUT its chouettos endpoint

app.use("/api/v1/", router);

app.post("/login", async (req, res) => {
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
});

if (process.env.NODE_ENV !== "production") {
  const Bundler = require("parcel-bundler");
  const bundler = new Bundler(["src/index.html", "src/admin.html"]);
  console.log("ParcelJS bundler ON");
  app.use(bundler.middleware());
}

app.listen(3000, err => {
  if (err) throw err;
  console.log(`> Running on localhost:3000`);
});
