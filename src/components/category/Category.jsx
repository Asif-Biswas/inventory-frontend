import React from 'react'
import { BaseURL } from '../BaseURL'
import Swal from 'sweetalert2'

export default function Category({name, parent, id, allCategories}) {
    const [editing, setEditing] = React.useState(false)
    const [category, setCategory] = React.useState('')
    const [parentCategory, setParentCategory] = React.useState('')
    const [parentCategoryName, setParentCategoryName] = React.useState('')
    const [deleted, setDeleted] = React.useState(false)

    React.useEffect(() => {
        setCategory(name)
        setParentCategory(parent)
        console.log(parent, allCategories);
        if (parent && allCategories) {
            const parentCategory = allCategories.find((category) => category.id === parent)
            setParentCategoryName(parentCategory.name)
        }
    }, [name, parent, allCategories])


    const editCategory = () => {
        if (category === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter category name!',
            })
            return
        }
        fetch(`${BaseURL}/categories/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
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
                        text: 'Category updated successfully!',
                    })
                    setEditing(false)
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

    const deleteCategory = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this category!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${BaseURL}/categories/${id}/`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Token ' + localStorage.getItem('inventory-token'),
                    },
                })
                    // check if response is 204
                    .then((res) => {
                        if (res.status === 204) {
                            setDeleted(true)
                            Swal.fire({
                                icon: 'success',
                                title: 'Success',
                                text: 'Category deleted successfully!',
                            })
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                            })
                        }
                    })

                    .catch((err) => {
                        console.log(err);
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
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="card p-4">
                {!editing ? (
                    <div className=" d-flex justify-content-between align-items-center">
                        <div>
                            <h5>
                                {category}
                            </h5>
                            <div style={{fontSize: '12px'}}>
                                Parent Category: 
                                {parentCategoryName ? ' ' + parentCategoryName : ' None'}
                            </div>
                        </div>
                        <div style={{fontSize: '18px'}}>
                            <span onClick={() => setEditing(true)}>
                                <i className="icon-edit1 text-primary" />
                            </span>
                            <span onClick={deleteCategory}>
                                <i className="icon-delete text-danger" />
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className=" d-flex justify-content-between">
                        <div>
                            <input type="text" className="form-control mr-2" placeholder="Category Name" onChange={(e) => setCategory(e.target.value)} value={category} />
                            <br />
                            <select className="form-control mr-2" onChange={(e) => {
                                setParentCategory(e.target.value)
                                const parentCategory = allCategories.find((category) => category.id.toString() === e.target.value.toString())
                                setParentCategoryName(parentCategory?.name)
                            }} value={parentCategory}>
                                <option value="">Select Parent Category</option>
                                {allCategories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div style={{fontSize: '18px'}}>
                            <span onClick={editCategory}>
                                {/* save button */}
                                <i className="icon-save text-success" />
                            </span>
                            <span onClick={() => setEditing(false)}>
                                {/* cancel button */}
                                <i className="icon-cancel text-danger" />
                            </span>
                        </div>
                    </div>
                )}
        </div>
    </div>
  )
}
