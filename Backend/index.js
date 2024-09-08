const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./src/routes/route");
require("dotenv").config({ path: "server.env" });
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});