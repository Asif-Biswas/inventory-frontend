import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BaseURL } from '../BaseURL'
import Swal from 'sweetalert2'

export default function EditProduct() {
    const productId = useParams().id
    const [allCategories, setAllCategories] = React.useState([])
    const [allFacilities, setAllFacilities] = React.useState([])
    const [product, setProduct] = React.useState({
        name: '',
        brand_name: '',
        category: '',
        unit_price: '',
        active_ingredient: '',
        atc_code: '',
        snowmed_code: '',
        lot_no: '',
        generic_name: '',
        expiry_date: '',
        batch_no: '',
        product_id: '',
        unique_id: '',
        facility: '',
    })

    React.useEffect(() => {
        if (productId) {
            fetch(`${BaseURL}/products/${productId}/`, {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setProduct(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [productId])

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
        fetch(`${BaseURL}/categories/`, {
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setAllCategories(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const editProduct = () => {
        if (product.name === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter product name!',
            })
            return
        } else if (product.category === '' || product.brand_name === '' || product.generic_name === '' || product.unit_price === '' || product.active_ingredient === '' || product.atc_code === '' || product.snowmed_code === '' || product.lot_no === '' || product.expiry_date === '' || product.batch_no === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields!',
            })
            return
        }
        fetch(`${BaseURL}/products/${productId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.id) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Product edited successfully!',
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
                <li className="breadcrumb-item">Edit Product</li>
            </ol>
            {/* Breadcrumb end */}
            <div className="app-actions">
                <Link to="/all-products" className="btn active">
                    All Products
                </Link>
            </div>
        </div>
        {/* Page header end */}
        {/* Row start */}
        <div className="row gutters d-flex justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-12">
                <div className="card p-4 px-5">
                    <h6 className="mb-3">Edit Product</h6>
                    <div className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter product name" onChange={(e) => setProduct({...product, name: e.target.value})} value={product.name} />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="ProductID">Product ID</label>
                            <input type="text" className="form-control" id="ProductID" placeholder="Enter product ID" onChange={(e) => setProduct({...product, product_id: e.target.value})} value={product.product_id} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="UniqueID">Unique ID</label>
                            <input type="text" className="form-control" id="UniqueID" placeholder="Enter unique ID" onChange={(e) => setProduct({...product, unique_id: e.target.value})} value={product.unique_id} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="category">Category</label>
                            <select className="form-control" id="category" onChange={(e) => setProduct({...product, category: e.target.value})} value={product.category}>
                                <option>Select Category</option>
                                {allCategories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="brand">Brand</label>
                            <input type="text" className="form-control" id="brand" placeholder="Enter brand name" onChange={(e) => setProduct({...product, brand_name: e.target.value})} value={product.brand_name} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="generic">Generic</label>
                            <input type="text" className="form-control" id="generic" placeholder="Enter generic name" onChange={(e) => setProduct({...product, generic_name: e.target.value})} value={product.generic_name} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="atc">ATC Code</label>
                            <input type="text" className="form-control" id="atc" placeholder="Enter ATC code" onChange={(e) => setProduct({...product, atc_code: e.target.value})} value={product.atc_code} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="snowmed">Snowmed Code</label>
                            <input type="text" className="form-control" id="snowmed" placeholder="Enter Snowmed code" onChange={(e) => setProduct({...product, snowmed_code: e.target.value})} value={product.snowmed_code} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="batch">Batch No</label>
                            <input type="text" className="form-control" id="batch" placeholder="Enter batch no" onChange={(e) => setProduct({...product, batch_no: e.target.value})} value={product.batch_no} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="lot">Lot No</label>
                            <input type="text" className="form-control" id="lot" placeholder="Enter lot no" onChange={(e) => setProduct({...product, lot_no: e.target.value})} value={product.lot_no} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="active">Active Ingredient</label>
                            <input type="text" className="form-control" id="active" placeholder="Enter active ingredient" onChange={(e) => setProduct({...product, active_ingredient: e.target.value})} value={product.active_ingredient} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="unit">Unit Price</label>
                            <input type="text" className="form-control" id="unit" placeholder="Enter unit price" onChange={(e) => setProduct({...product, unit_price: e.target.value})} value={product.unit_price} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="expiry">Expiry Date</label>
                            <input type="date" className="form-control" id="expiry" placeholder="Enter expiry date" onChange={(e) => setProduct({...product, expiry_date: e.target.value})} value={product.expiry_date} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="facility">Facility</label>
                            <select className="form-control" id="facility" onChange={(e) => setProduct({...product, facility: e.target.value})} value={product.facility}>
                                <option value={''}>Select Facility</option>
                                {allFacilities.map((facility) => (
                                    <option key={facility.id} value={facility.id}>
                                        {facility.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={editProduct}>
                            Edit Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
