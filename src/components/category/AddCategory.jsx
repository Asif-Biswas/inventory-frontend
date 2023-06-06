import React from 'react'
import { Link } from 'react-router-dom'
import { BaseURL } from '../BaseURL'
import Swal from 'sweetalert2'

export default function AddCategory() {
    const [allCategories, setAllCategories] = React.useState([])
    const [category, setCategory] = React.useState('')
    const [parentCategory, setParentCategory] = React.useState('')

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

    const addCategory = () => {
        if (category === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter category name!',
            })
            return
        } 
        fetch(`${BaseURL}/categories/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                parent: parentCategory,
                name: category,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.id) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Category added successfully!',
                    })
                    setCategory('')
                    setParentCategory('')
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
                <li className="breadcrumb-item">Add Category</li>
            </ol>
            {/* Breadcrumb end */}
            <div className="app-actions">
                <Link to="/all-categories" className="btn active">
                    All Categories
                </Link>
            </div>
        </div>
        {/* Page header end */}
        {/* Row start */}
        <div className="row gutters">
            <div className="w-100 d-flex justify-content-center mt-5 ">
                <div className="card p-4 px-5">
                    <h6 className="mb-3">Add Category</h6>
                    <div className="">
                        <input type="text" className="form-control w-100 mr-2" placeholder="Category Name" onChange={(e) => setCategory(e.target.value)} value={category} />
                        <br />
                        <select className="form-control w-100 mr-2" onChange={(e) => setParentCategory(e.target.value)} value={parentCategory}>
                            <option value="">Select Parent Category</option>
                            {allCategories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <br />
                        <button type="button" className="btn btn-primary" onClick={addCategory}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
