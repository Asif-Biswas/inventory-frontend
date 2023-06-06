import React from 'react'
import { Link } from 'react-router-dom'
import { BaseURL } from '../BaseURL'
import Swal from 'sweetalert2'

export default function Product({product, allCategories}) {
    const [categoryName, setCategoryName] = React.useState('')
    const [deleted, setDeleted] = React.useState(false)

    React.useEffect(() => {
        const category = allCategories.find((category) => category.id === product.category)
        if (category) {
            setCategoryName(category.name)
        }
    }, [allCategories, product.category])

    
    const deleteProduct = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this product!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${BaseURL}/products/${product.id}/`, {
                    method: 'DELETE',
                })
                    .then((res) => {
                        if (res.status === 204) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success',
                                text: 'Product deleted successfully!',
                            })
                            setDeleted(true)
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
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
        })
    }



    if (deleted) {
        return null
    }
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="card p-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-9">
                        <h5 className="mb-0">
                            {product.name}
                        </h5>
                        <div>Brand: {product.brand_name}
                        </div>
                        <div className="text-muted">Category: {categoryName}
                        </div>
                    </div>
                    <div className="col-3 text-right">
                        Price: {product.unit_price}
                    </div>
                </div>
                <table className="table table-bordered mt-3" style={{backgroundColor: 'inherit'}}>
                    <tbody>
                        <tr>
                            <td>Active ingredient</td>
                            <td className='text-right'>
                                {product.active_ingredient}
                            </td>
                        </tr>
                        <tr>
                            <td>ATC code</td>
                            <td className='text-right'>
                                {product.atc_code}
                            </td>
                        </tr>
                        <tr>
                            <td>Snowmed code</td>
                            <td className='text-right'>
                                {product.snowmed_code}
                            </td>
                        </tr>
                        <tr>
                            <td>LOT No</td>
                            <td className='text-right'>
                                {product.lot_no}
                            </td>
                        </tr>
                        <tr>
                            <td>Generic name</td>
                            <td className='text-right'>
                                {product.generic_name}
                            </td>
                        </tr>
                        <tr>
                            <td>Expiry date</td>
                            <td className='text-right'>
                                {product.expiry_date? new Date(product.expiry_date).toLocaleDateString() : ''}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-end align-items-center mt-3">
                    <Link to={`/edit-product/${product.id}`} className="btn btn-primary btn-sm" >Edit</Link>
                    <button className="btn btn-danger btn-sm ml-2" onClick={deleteProduct}>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}
