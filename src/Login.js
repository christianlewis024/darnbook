import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core';

function Login() {
    return (
        <div className='login'>
        <div className='login__logo'>
            <img
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
             alt="FB"
            />
            <img
            src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="FB wine" /> 
        </div>

        <Button type="submit" >
            Sign In
        </Button>
        <div className='login__desc'>
             
        </div>          
     </div>
    )
}

export default Login
