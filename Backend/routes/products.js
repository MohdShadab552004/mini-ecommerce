import express from "express";
const router = express.Router();
import db from "../db/index.js";


// GET: Get all products
router.get("/", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM products ORDER BY id DESC");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// POST: Add new product
router.post("/", async (req, res) => {
    const { name, price, description, image_url } = req.body;
    try {
        const result = await db.query(
            "INSERT INTO products (name, price, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, price, description, image_url]
        );
        
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Failed to add product" });
    }
});


export default router;
