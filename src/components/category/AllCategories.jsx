import React from "react";
import Category from "./Category";
import { Link } from "react-router-dom";
import { BaseURL } from '../BaseURL'
import Swal from 'sweetalert2'


export default function AllCategories() {
    const [allCategories, setAllCategories] = React.useState([])

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


    return (
        <div className="main-container">
            {/* Page header start */}
            <div className="page-header">
                {/* Breadcrumb start */}
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">All Categories</li>
                </ol>
                {/* Breadcrumb end */}
                <div className="app-actions">
                    <Link to="/add-category" className="btn active">
                        Add Category
                    </Link>
                </div>
            </div>
            {/* Page header end */}
            {/* Row start */}
            <div className="row gutters">
                {allCategories.map((category) => (
                    <Category
                        key={category.id}
                        name={category.name}
                        parent={category.parent}
                        id={category.id}
                        allCategories={allCategories}
                    />
                ))}
            </div>
        </div>
    );
}
