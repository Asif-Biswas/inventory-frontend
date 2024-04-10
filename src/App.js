import React from 'react'
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
import AllStocks from './components/stock/AllStocks';
import AddStock from './components/stock/AddStock';
import EditStock from './components/stock/EditStock';
import AllSells from './components/sell/AllSells';
import AddSell from './components/sell/AddSell';
import Login from './components/login/Login';
import AllFacilities from './components/facility/AllFacilities';
import AddFacility from './components/facility/AddFacility';
import FacilityLevel from './components/stock/FacilityLevel';
import StockOut from './components/stock/StockOut';
import TopSales from './components/sell/TopSales';
import RunningOut from './components/stock/RunningOut';

function App() {
  	const [userLoggedIn, setUserLoggedIn] = React.useState(false)
	const [loading, setLoading] = React.useState(true)
	
	React.useEffect(() => {
		if (localStorage.getItem("inventory-token")) {
			setUserLoggedIn(true)
		}
		setLoading(false)
	}, [])
	if (loading) return null
	if (!userLoggedIn) return <Login/>
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

				{/* Stock */}
				<Route path="/all-stocks" element={<AllStocks/>} />
				<Route path="/add-stock" element={<AddStock/>} />
				<Route path="/edit-stock/:id" element={<EditStock/>} />
				<Route path="/facility-level-stock" element={<FacilityLevel/>} />
				<Route path="/stock-out" element={<StockOut/>} />
				<Route path="/running-out" element={<RunningOut/>} />

				{/* Sell */}
				<Route path="/all-sales" element={<AllSells/>} />
				<Route path="/add-sell" element={<AddSell/>} />
				<Route path="/top-sales" element={<TopSales/>} />

				{/* Facility */}
				<Route path="/all-facilities" element={<AllFacilities/>} />
				<Route path="/add-facility" element={<AddFacility/>} />

			</Routes>
				{/* Main container end */}
				
			</div>
			{/* Page content end */}
			</div>
		</BrowserRouter>
	);
}

export default App;
