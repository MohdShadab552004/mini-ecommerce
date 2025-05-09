import express from "express";
const router = express.Router();
import db from "../db/index.js";

router.get("/", async (req, res) => {
    const { query } = req.query;
    if (!query) return res.status(400).json({ error: "Query is required" });
  
    const stopWords = ["to", "with", "my", "the", "and", "for", "of"];
    const keywords = query
      .toLowerCase()
      .split(/\s+/)
      .filter(word => !stopWords.includes(word));

    const conditions = keywords.map((word, i) => 
      `(name ILIKE $${i + 1} OR description ILIKE $${i + 1})`
    ).join(" OR ");
    const values = keywords.map(word => `%${word}%`);
    
    try {
      const result = await db.query(`SELECT * FROM products WHERE ${conditions}`, values);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });
  
export default router;