const express = require("express");
// const sessions = require("express-session");
const exphbs = require("express-handlebars");

const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;
const db = require("./models");
const htmlRoutes = require("./routes/html-routes");
const bmRoutes = require("./routes/bm-route");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(htmlRoutes, bmRoutes);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
