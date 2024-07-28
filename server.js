const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectMongoDb = require("./config/db");
const router = require("./route/authRoute");

dotenv.config();
const PORT = process.env.PORT;

const app = express();

// Configure CORS to allow requests from your frontend
app.use(
  cors({
    origin: "https://crud-frontend-sage.vercel.app", // Remove the trailing slash
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
  })
);

app.use(express.json());

connectMongoDb();

app.get("", (req, res) => {
  res.send("hello");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
