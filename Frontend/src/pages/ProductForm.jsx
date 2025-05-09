import { useState, useCallback } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const ProductForm = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image_url: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await axios.post(`${apiUrl}/api/products`, form);
        alert("Product Added!");
        setForm({ name: "", price: "", description: "", image_url: "" });
      } catch (err) {
        alert("Error adding product.");
        console.error(err);
      }
    },
    [form]
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        className="w-full p-2 border"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        className="w-full p-2 border"
        value={form.price}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-2 border"
        value={form.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image_url"
        placeholder="Image URL"
        className="w-full p-2 border"
        value={form.image_url}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
