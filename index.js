const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const VehicleRoutes = require("./express/routes/vehicles");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-givgy.mongodb.net/checkpoint2?retryWrites=true"
);

const app = express();
app.use(bodyParser.json());
app.use("/api/vehicles", VehicleRoutes);

app.get("/", (req, res) => res.send("Default Route"));

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
