import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductForm from "./pages/ProductForm";
import MyProduct from "./pages/MyProduct";

const App = () =>{
  return (
    <Router>
      <div className="bg-white shadow p-4 flex justify-center space-x-6">
        <Link to="/">Product Submission</Link>
        <Link to="/my-products">My Products</Link>
      </div>
      <Routes>
        <Route path="/" element={<ProductForm />} />
        <Route path="/my-products" element={<MyProduct />} />
      </Routes>
    </Router>
  );
}
export default App;

