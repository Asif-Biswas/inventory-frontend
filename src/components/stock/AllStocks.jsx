import React from "react";
import { Link } from "react-router-dom";
import Stock from "./Stock";
import { BaseURL } from "../BaseURL";

export default function AllStocks() {
    const [allStocks, setAllStocks] = React.useState([]);
    const [allProducts, setAllProducts] = React.useState([]);

    React.useEffect(() => {
        fetch(`${BaseURL}/stocks/`)
            .then((res) => res.json())
            .then((data) => {
                setAllStocks(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    React.useEffect(() => {
        fetch(`${BaseURL}/products/`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    


    return (
        <div className="main-container">
            {/* Page header start */}
            <div className="page-header">
                {/* Breadcrumb start */}
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">All Stocks</li>
                </ol>
                {/* Breadcrumb end */}
                <div className="app-actions">
                    <Link to="/add-stock" className="btn active">
                        Add Stock
                    </Link>
                </div>
            </div>
            <div className="row gutters">
                <table id="basicExample" class="table custom-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Cost</th>
                            <th>Quantity</th>
                            <th>Unit of Measure</th>
                            <th>Total Quantity</th>
                            <th>Issued Quantity</th>
                            <th>Received Quantity</th>
                            <th>Timestamp</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allStocks.map((stock, index) => (
                            <Stock key={stock.id} stock={stock} allProducts={allProducts} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
