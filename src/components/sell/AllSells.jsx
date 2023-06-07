import React from "react";
import { Link } from "react-router-dom";
import { BaseURL } from "../BaseURL";

export default function Allsales() {
    const [allSell, setAllSell] = React.useState([]);
    const [allProducts, setAllProducts] = React.useState([]);

    React.useEffect(() => {
        fetch(`${BaseURL}/sales/`)
            .then((res) => res.json())
            .then((data) => {
                setAllSell(data);
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
                    <li className="breadcrumb-item">All sales</li>
                </ol>
                {/* Breadcrumb end */}
                <div className="app-actions">
                    <Link to="/add-sell" className="btn active">
                        Add Sell
                    </Link>
                </div>
            </div>
            <div className="row gutters">
                <table id="basicExample" class="table custom-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Amount Received</th>
                            <th>Issued To</th>
                            <th>Unit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSell.map((sell, index) => {
                            return (
                                <tr key={sell.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {allProducts.map((product) => {
                                            if (product.id === sell.item) {
                                                return product.name;
                                            }
                                        })}
                                    </td>
                                    <td>{sell.quantity}</td>
                                    <td>{sell.amount_received}</td>
                                    <td>{sell.issued_to}</td>
                                    <td>{sell.unit_price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
