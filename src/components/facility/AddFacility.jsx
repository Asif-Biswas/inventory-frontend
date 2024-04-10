import React from 'react'
import { Link } from 'react-router-dom'
import { BaseURL } from '../BaseURL'
import Swal from 'sweetalert2'

export default function AddFacility() {
    const [sell, setSell] = React.useState({
        name: '',
        address: '',
    })

    const addSell = () => {
        if (sell.name === '' || sell.address === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            })
            return
        }
        fetch(`${BaseURL}/facilities/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
            },
            body: JSON.stringify(sell),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.id) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Sell added successfully!',
                    })
                    setSell({
                        name: '',
                        address: '',
                    })
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            })
    }



  return (
    <div className="main-container">
        {/* Page header start */}
        <div className="page-header">
            {/* Breadcrumb start */}
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Add Facility</li>
            </ol>
            {/* Breadcrumb end */}
            <div className="app-actions">
                <Link to="/all-facilities" className="btn active">
                    All Facilities
                </Link>
            </div>
        </div>
        {/* Page header end */}
        {/* Row start */}
        <div className="row gutters d-flex justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-12">
                <div className="card p-4 px-5">
                    <h6 className="mb-3">Add Facility for your organization</h6>
                    <div className="row">
                        <div className="form-group col-12">
                            <label htmlFor="ProductID">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ProductID"
                                placeholder="Name"
                                value={sell.name}
                                onChange={(e) => setSell({ ...sell, name: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-12">
                            <label htmlFor="ProductID2">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ProductID2"
                                placeholder="Address"
                                value={sell.address}
                                onChange={(e) => setSell({ ...sell, address: e.target.value })}
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={addSell}>
                            Add Facility
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
