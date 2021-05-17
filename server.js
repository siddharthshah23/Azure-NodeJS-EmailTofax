const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const faxRoutes = require("./routes/fax");

app.use("/api", faxRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`FAX API IS RUNNING ON ${port}`);
});
