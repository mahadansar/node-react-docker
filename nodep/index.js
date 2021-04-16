const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 4000;

app.get("/", async (req, res) => {
  try {
    res.status(200).send({ msg: "WELCOME TO NODEJS" });
  } catch (e) {
    res.status(400).send({ msg: "failed", e });
  }
});

app.listen(port, () => {
  console.log(`NodeJS @ PORT : ${port}`);
});
