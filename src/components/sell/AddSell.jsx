import React from 'react'
import { Link } from 'react-router-dom'
import { BaseURL } from '../BaseURL'
import Swal from 'sweetalert2'

export default function AddSell() {
    const [allProducts, setAllProducts] = React.useState([])
    
    const [sell, setSell] = React.useState({
        quantity: '',
        amount_received: '',
        issued_to: '',
        unit_price: '',
        item: '',
    })

    React.useEffect(() => {
        fetch(`${BaseURL}/products/`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const addSell = () => {
        if (sell.quantity === '' || sell.amount_received === '' || sell.issued_to === '' || sell.unit_price === '' || sell.item === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            })
            return
        }
        fetch(`${BaseURL}/sales/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
                        quantity: '',
                        amount_received: '',
                        issued_to: '',
                        unit_price: '',
                        item: '',
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
                <li className="breadcrumb-item">Add Sell</li>
            </ol>
            {/* Breadcrumb end */}
            <div className="app-actions">
                <Link to="/all-sales" className="btn active">
                    All sales
                </Link>
            </div>
        </div>
        {/* Page header end */}
        {/* Row start */}
        <div className="row gutters d-flex justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-12">
                <div className="card p-4 px-5">
                    <h6 className="mb-3">Add Sell</h6>
                    <div className="row">
                        <div className="form-group col-12">
                            <label htmlFor="ProductID">Product</label>
                            <select className="form-control" id="category" onChange={(e) => setSell({ ...sell, item: e.target.value })} value={sell.item}>
                                <option value={""}>Select product</option>
                                {allProducts.map((product) => (
                                    <option value={product.id}>{product.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="generic">Unit Price</label>
                            <input type="number" className="form-control" id="generic" placeholder="Enter unit price" onChange={(e) => setSell({ ...sell, unit_price: e.target.value })} value={sell.unit_price} step="0.01" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="UniqueID">Quantity</label>
                            <input type="number" className="form-control" id="UniqueID" placeholder="Enter quantity" onChange={(e) => setSell({ ...sell, quantity: e.target.value })} value={sell.quantity} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="category">Amount Received</label>
                            <input type="number" className="form-control" id="category" placeholder="Enter amount received" onChange={(e) => setSell({ ...sell, amount_received: e.target.value })} value={sell.amount_received} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="brand">Issued To</label>
                            <input type="text" className="form-control" id="brand" placeholder="Enter issued to" onChange={(e) => setSell({ ...sell, issued_to: e.target.value })} value={sell.issued_to} />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={addSell}>
                            Add Sell
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
