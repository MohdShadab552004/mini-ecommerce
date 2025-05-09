import express from "express";
import  cors from "cors";
import dotenv from "dotenv";
import product from "./routes/products.js";
import productSearch from "./routes/productSearch.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", product);
app.use("/api/search", productSearch);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
