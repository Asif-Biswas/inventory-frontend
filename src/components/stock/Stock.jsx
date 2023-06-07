import React from "react";
import { Link } from "react-router-dom";
import { BaseURL } from "../BaseURL";
import Swal from "sweetalert2";

export default function Stock({stock, allProducts, index}) {
    const [deleted, setDeleted] = React.useState(false)

    const deleteStock = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this stock!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${BaseURL}/stocks/${stock.id}/`, {
                    method: 'DELETE',
                })
                    .then((res) => {
                        if (res.status === 204) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success',
                                text: 'Stock deleted successfully!',
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
                        console.log(err)
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
        <tr>
            <td>{index + 1}</td>
            <td>{allProducts?.find((product) => product.id === stock.product)?.name}</td>
            <td>{stock.cost}</td>
            <td>{stock.quantity}</td>
            <td>{stock.unit_of_measure}</td>
            <td>{stock.total_quantity}</td>
            <td>{stock.issued_quantity}</td>
            <td>{stock.received_quantity}</td>
            <td>{new Date(stock.timestamp).toLocaleDateString()}</td>
            <td>
                <Link to={`/edit-stock/${stock.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                <button className="btn btn-sm btn-danger" onClick={deleteStock}>Delete</button>
            </td>
        </tr>
    );
}
