import db from "./db.js";
import express from "express";

import cors from "cors";
import dotenv from "dotenv";

import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://dev-hub-puce.vercel.app",
  })
);
app.use(express.json());

app.use("/api/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("CS Blog Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});