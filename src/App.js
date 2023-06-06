import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import AllCategories from './components/category/AllCategories';
import AddCategory from './components/category/AddCategory';
import AllProducts from './components/products/AllProducts';
import AddProduct from './components/products/AddProduct';
import EditProduct from './components/products/EditProduct';

function App() {
  return (
    <BrowserRouter>
        <div className="page-wrapper">
          {/* Sidebar wrapper start */}
          <Sidebar />
          {/* Sidebar wrapper end */}
          {/* Page content start  */}
          <div className="page-content">
            {/* Header start */}
            <Header/>
            {/* Header end */}
            {/* Main container start */}
            <Routes>
              <Route path="/" element={<Home/>} />

              {/* Category */}
              <Route path="/all-categories" element={<AllCategories/>} />
              <Route path="/add-category" element={<AddCategory/>} />

              {/* Products */}
              <Route path="/all-products" element={<AllProducts/>} />
              <Route path="/add-product" element={<AddProduct/>} />
              <Route path="/edit-product/:id" element={<EditProduct/>} />

          </Routes>
            {/* Main container end */}
            
          </div>
          {/* Page content end */}
        </div>
    </BrowserRouter>
  );
}

export default App;
