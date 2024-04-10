import React from 'react'
import { Link } from "react-router-dom";
import { BaseURL } from "../BaseURL";

export default function TopSales() {
    const [allSell, setAllSell] = React.useState([]);

    React.useEffect(() => {
        fetch(`${BaseURL}/topsales/`, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllSell(data);
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
                            <th>Total sold units</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSell.map((sell, index) => {
                            return (
                                <tr key={sell.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {sell.product}
                                    </td>
                                    <td>
                                        {sell.total_sales}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
