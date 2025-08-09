import express from "express";
import cors from "cors";
import colors from "colors";
import "dotenv/config";
import http from "http";
import { connectDB } from "./db/connection.js";
import router from "./routes/product.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors());
app.get("/ping", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running now" });
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from uploads folder

// add routes here
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/v1/product", router);
// connect databse

await connectDB();
// port
const PORT = process.env.PORT || 8000;
server.listen(PORT, (req, res) =>
  console.log("✅ Server is running on PORT " + PORT)
);
