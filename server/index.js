const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const db = require("./db");
const models = require("./db/models");
const routes = require("./routes");
const {PORT}= require("./config")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use("/api", routes);

db.sync({ force: false })
  .then(function () {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
  })
  .catch(console.error);
