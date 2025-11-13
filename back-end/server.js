import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

//app config
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

//db connect
connectDB();

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
