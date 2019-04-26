import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-givgy.mongodb.net/checkpoint2?retryWrites=true"
);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
