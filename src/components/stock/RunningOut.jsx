import React from 'react'
import { Link } from "react-router-dom";
import Stock from "./Stock";
import { BaseURL } from "../BaseURL";

export default function RunningOut() {
    const [allStocks, setAllStocks] = React.useState([]);
    const [allProducts, setAllProducts] = React.useState([]);

    React.useEffect(() => {
        fetch(`${BaseURL}/stocks/?runningOut=1`, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setAllStocks(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    React.useEffect(() => {
        fetch(`${BaseURL}/products/`, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
            },
        })
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
                    <li className="breadcrumb-item">Stock running out</li>
                </ol>
                {/* Breadcrumb end */}
                <div className="app-actions">
                    <Link to="/add-stock" className="btn active">
                        Add Stock
                    </Link>
                </div>
            </div>
            <div className="row gutters">
                {allStocks.length? (
                    <table id="basicExample" class="table custom-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Facility</th>
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
                ): (
                    <div className="col-12 card">
                        <div className="card-body">
                            <h6>No products found</h6>
                        </div>
                    </div>
                )}

                
            </div>
        </div>
    );
}
