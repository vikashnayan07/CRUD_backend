const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get("", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
