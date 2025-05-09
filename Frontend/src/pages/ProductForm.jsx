import { useState } from "react";
import axios from "axios";

const ProductForm = () =>{
  const [form, setForm] = useState({ name: "", price: "", description: "", image_url: "" });

  const handleSubmit = async (e) => {
    console.log("Submitting form...", form);
    
    e.preventDefault();
    await axios.post("http://localhost:5000/api/products", form);
    alert("Product Added!");
    setForm({ name: "", price: "", description: "", image_url: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input
        type="text"
        placeholder="Product Name"
        className="w-full p-2 border"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        className="w-full p-2 border"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 border"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="w-full p-2 border"
        value={form.image_url}
        onChange={(e) => setForm({ ...form, image_url: e.target.value })}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default ProductForm;