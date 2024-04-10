import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BaseURL } from '../BaseURL'
import Swal from 'sweetalert2'

export default function EditStock() {
    const stockId = useParams().id
    const [allProducts, setAllProducts] = React.useState([])
    const [allFacilities, setAllFacilities] = React.useState([])
    
    const [stock, setStock] = React.useState({
        cost: '',
        quantity: '',
        unit_of_measure: '',
        total_quantity: '',
        issued_quantity: '',
        received_quantity: '',
        product: '',
        timestamp: new Date().toISOString(),
        facility: '',
    })

    React.useEffect(() => {
        fetch(`${BaseURL}/products/`, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    React.useEffect(() => {
        fetch(`${BaseURL}/facilities/`, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setAllFacilities(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    React.useEffect(() => {
        fetch(`${BaseURL}/stocks/${stockId}/`, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setStock(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [stockId])




    const addStock = () => {
        if (stock.cost === '' || stock.quantity === '' || stock.unit_of_measure === '' || stock.total_quantity === '' || stock.issued_quantity === '' || stock.received_quantity === '' || stock.product === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            })
            return
        }
        fetch(`${BaseURL}/stocks/${stockId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),    
            },
            body: JSON.stringify(stock),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.id) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Stock edited successfully!',
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
                <li className="breadcrumb-item">Edit Stock</li>
            </ol>
            {/* Breadcrumb end */}
            <div className="app-actions">
                <Link to="/all-stocks" className="btn active">
                    All Stocks
                </Link>
            </div>
        </div>
        {/* Page header end */}
        {/* Row start */}
        <div className="row gutters d-flex justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-12">
                <div className="card p-4 px-5">
                    <h6 className="mb-3">Edit Stock</h6>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="ProductID">Product</label>
                            <select className="form-control" id="category" onChange={(e) => setStock({ ...stock, product: e.target.value })} value={stock.product}>
                                <option value={""}>Select product</option>
                                {allProducts.map((product) => (
                                    <option value={product.id}>{product.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="UniqueID">Cost</label>
                            <input type="number" className="form-control" id="UniqueID" placeholder="Enter Cost" onChange={(e) => setStock({ ...stock, cost: e.target.value })} value={stock.cost} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="category">Quantity</label>
                            <input type="number" className="form-control" id="category" placeholder="Enter quantity" onChange={(e) => setStock({ ...stock, quantity: e.target.value })} value={stock.quantity} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="brand">Unit of Measure</label>
                            <input type="text" className="form-control" id="brand" placeholder="Enter unit of measure" onChange={(e) => setStock({ ...stock, unit_of_measure: e.target.value })} value={stock.unit_of_measure} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="generic">Total Quantity</label>
                            <input type="text" className="form-control" id="generic" placeholder="Enter total quantity" onChange={(e) => setStock({ ...stock, total_quantity: e.target.value })} value={stock.total_quantity} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="atc">Issued Quantity</label>
                            <input type="text" className="form-control" id="atc" placeholder="Enter issued quantity" onChange={(e) => setStock({ ...stock, issued_quantity: e.target.value })} value={stock.issued_quantity} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="snowmed">Received Quantity</label>
                            <input type="text" className="form-control" id="snowmed" placeholder="Enter received quantity" onChange={(e) => setStock({ ...stock, received_quantity: e.target.value })} value={stock.received_quantity} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="batch">Timestamp</label>
                            <input type="datetime-local" className="form-control" id="batch" placeholder="Enter timestamp" onChange={(e) => setStock({ ...stock, timestamp: e.target.value })} value={new Date(stock.timestamp).toISOString().slice(0, 16)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="facility">Facility</label>
                            <select className="form-control" id="facility" onChange={(e) => setStock({ ...stock, facility: e.target.value })} value={stock.facility}>
                                <option value={""}>Select facility</option>
                                {allFacilities.map((facility) => (
                                    <option value={facility.id}>{facility.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={addStock}>
                            Edit Stock
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
