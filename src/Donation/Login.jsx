import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import SignUp from './SignUp';

const Login = () => {
  
  return (
    <div className="app-container">
      <div className="half-page" id='image'>
        ;
      </div>
      <div className="half-page">
    <center>
      <div className='page'>
          <h1 style={{left:200,fontFamily:'italic'}}>Welcome to donoFundz</h1><br/>
          <h2 style={{left:'200px',fontFamily:'italic'}}>LOGIN HERE</h2>
          <TextField id="standard-basic" label="Email id" variant="standard" />
        <br></br>
        <br></br>
        <TextField id="standard-basic" label="Password" variant="standard" />
        <br></br>
        <br></br>
        <Button variant="text" style={{backgroundColor:'blue' ,color:'white'}}>Login</Button>
        <br></br>
        <br></br>
        <br></br>
        <Box>
        <Link to="/signup">Create account</Link>
        </Box>
        </div>
        </center>
        </div>
    </div>
  )
}


 export default Login;