import React from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
import { BaseURL } from '../BaseURL'
import Swal from 'sweetalert2'

export default function AllProducts() {
    const [allProducts, setAllProducts] = React.useState([])
    const [allCategories, setAllCategories] = React.useState([])

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

    React.useEffect(() => {
        fetch(`${BaseURL}/categories/`)
            .then((res) => res.json())
            .then((data) => {
                setAllCategories(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


  return (
    <div className="main-container">
            {/* Page header start */}
            <div className="page-header">
                {/* Breadcrumb start */}
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">All Products</li>
                </ol>
                {/* Breadcrumb end */}
                <div className="app-actions">
                    <Link to="/add-product" className="btn active">
                        Add Product
                    </Link>
                </div>
            </div>
            {/* Page header end */}
            {/* Row start */}
            <div className="row gutters">
                {allProducts.map((product) => (
                    <Product key={product.id} product={product} allCategories={allCategories} />
                ))}
            </div>
        </div>
  )
}
