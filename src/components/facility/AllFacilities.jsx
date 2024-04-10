import React from 'react'
import { Link } from "react-router-dom";
import { BaseURL } from "../BaseURL";

export default function AllFacilities() {
    const [allSell, setAllSell] = React.useState([]);

    React.useEffect(() => {
        fetch(`${BaseURL}/facilities/`, {
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
                    <li className="breadcrumb-item">All Facilities</li>
                </ol>
                {/* Breadcrumb end */}
                <div className="app-actions">
                    <Link to="/add-facility" className="btn active">
                        Add Facility
                    </Link>
                </div>
            </div>
            <div className="row gutters">
                <table id="basicExample" class="table custom-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSell.map((sell, index) => {
                            return (
                                <tr key={sell.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {sell.name}
                                    </td>
                                    <td>
                                        {sell.address}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
  )
}
