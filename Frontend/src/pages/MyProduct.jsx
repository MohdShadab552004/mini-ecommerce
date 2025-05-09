import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCart";

const apiUrl = import.meta.env.VITE_API_URL;

const MyProduct = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/products`);
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  }, []);

  const searchProducts = useCallback(async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/search?query=${query}`);
      setProducts(res.data);
    } catch (err) {
      console.error("Search failed", err);
    }
  }, [query]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (query.trim() === "") {
        fetchProducts();
      } else {
        searchProducts();
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query, fetchProducts, searchProducts]);

  return (
    <div className="max-w-[1024px] m-auto p-5">
      <input
        type="text"
        placeholder="Search for something..."
        className="w-[500px] p-2 mb-10 border rounded max-sm:w-[300px]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:gap-2">
        {products.length === 0 ? (
          <p className="text-center col-span-full text-zinc-500">No results found.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyProduct;
