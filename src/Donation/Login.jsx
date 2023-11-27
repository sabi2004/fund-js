import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import SignUp from './SignUp';
import axios from 'axios';
import Homepage from './Homepage';
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useContext} from "react";
import {AuthContext} from "./AuthContext";

const Login = () => {
  const [name, userupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const navigate=useNavigate();
  const { dispatch } = useContext(AuthContext);
  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch(`http://localhost:3000/users?name=${name}`)
      .then((res)=>{
        return res.json();
      
      }).then((resp)=>{
        console.log(resp);
        const user=resp.find((user)=>user.name===name);
      //   if(Object.keys(resp).length===0)
      //   {
      //     toast.error("Please enter valid user");
      //   }
      //   else{
      //     if(resp.password===password)
      //     {
      //       toast.success("Success");
      //       sessionStorage.setItem('name',name);
      //       navigate("/");
      //     }
      //     else{
      //       toast.error("Please error valid credentials");
      //     }
      //   }
      // })
      // .catch((err)=>{
      //   toast.error("Login failed"+err.message);
      // })
      if (!user) {
        toast.error("Please enter valid user");
      } else {
        const validUser = resp.find((user) => user.password === password);

        if (validUser) {
          toast.success("Login successful");
          sessionStorage.setItem("name", name);
          navigate("/");
        } else {
          toast.error("Invalid credentials");
        }
      }
    })
    .catch((err) => {
      toast.error("Login falied due to : " + err.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (name === "" || name === null) {
      result = false;
      toast.warning("Please enter username");
    }
    if (password === "" || password == null) {
      result = false;
      toast.warning("Please enter password");
    }
    return result;
  };
  // const loginUser = () => {};
  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: '',
  // });

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleLogin = () => {
  //   const user = {
  //     name: formData.username,
  //   };
  //   dispatch({ type: 'LOGIN', payload: user });
  //   navigate('/');
  // };
      

  return (
    <>
    <div className="app-container">
      <div className="half-page" id='image'>
        ;
      </div>
      <div className="half-page">
    <center>
      <div className='page'>
          <h1 style={{left:200,fontFamily:'italic'}}>Welcome to donoFundz</h1><br/>
          <h2 style={{left:'200px',fontFamily:'italic'}}>LOGIN HERE</h2>
          <TextField id="standard-basic" label="Username" variant="standard" onChange={(e) => userupdate(e.target.value)}/>
        <br></br>
        <br></br>
        <TextField id="standard-basic" label="Password" variant="standard"  onChange={(e) => passwordupdate(e.target.value)}/>
        <br></br>
        <br></br>
        {/* <Link to="/"> */}
        <Button variant="text" onClick={(e) => ProceedLogin(e)} style={{backgroundColor:'blue' ,color:'white'}}>Login</Button>
        {/* </Link> */}
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
    <ToastContainer/>
    </>
  )
}


 export default Login;