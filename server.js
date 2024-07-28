const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectMongoDb = require("./config/db");
const router = require("./route/authRoute");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(
  cors({
    origin: "https://crud-frontend-sage.vercel.app/", // Replace with your frontend URL
  })
);
app.use(express.json());
app.use(cors());

connectMongoDb();

app.get("", (req, res) => {
  res.send("hello");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
