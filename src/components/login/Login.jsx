import React from 'react'
import { BaseURL } from '../BaseURL'
import Swal from 'sweetalert2';

export default function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [load, setLoad] = React.useState(false)

    const handleLogin = ()=> {
        setLoad(true)
        fetch(`${BaseURL}/accounts/login/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                'email': username,
                'password': password
            })
        })
        .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.success) {

                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Login successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setLoad(false)
                    localStorage.setItem('inventory-token', data.token)
                    window.location.reload()
                }
                else if (data.message) {
                    Swal.fire(
                        data.message,
                        '',
                        'error'
                    )
                    setLoad(false)
                } else {
                    Swal.fire(
                        'Login failed',
                        '',
                        'error'
                    )
                    setLoad(false)
                }
            })
            .catch(err => {
                console.log(err)
                Swal.fire(
                    'Login failed',
                    '',
                    'error'
                )
                setLoad(false)
            })
    }

  return (
    <div className="page-wrapper">
        <div className='d-flex justify-content-center align-items-center' style={{minHeight: '90vh'}}>
            <div className='border p-5' style={{width: '100%', maxWidth: '500px'}}>
                <h1 className='text-center'>Login</h1>
                <div className="form-group">
                    <label for="inputName">Username or Email</label>
                    <input type="text" className="form-control" id="inputName" 
                        placeholder="Enter Username or Email"
                        value={username} onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="inputpass">Password</label>
                    <input type="password" className="form-control" id="inputpass" 
                        placeholder="Enter Password"
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className='d-flex justify-content-center'>
                    <button disabled={load} onClick={handleLogin} type="button" class="btn btn-primary my-2 w-100">
                        {load? 'Loading...': 'Submit'}
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}
