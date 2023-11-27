import { Bolt } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "./AuthContext";
import { useEffect } from 'react';

const Navbar = () => {
  const navigate=useNavigate();
  const[name,userupdate]=useState("");
  const { user, dispatch } = useContext(AuthContext);
  useEffect(()=>{
    let storedName=sessionStorage.getItem('name');
    if(storedName===""|| storedName===null){
      navigate('/Login');
    }
    else{
      userupdate(storedName);
    }
  },[navigate]);
  return (
     <div className='Nav'>
      <h1 className="Name" ><i>donoFundz</i></h1>
      <h4>
      <ul>
          <li>
              <Link to='Fundraising'>
                
                <Button style={{fontSize:15,color:'lightblue',fontWeight:"bold"}}>ABOUT US</Button>
              </Link>
          </li>
          <li>
              <Link to="">
                <Button style={{fontSize:15,color:'lightblue',fontWeight:"bold"}}>HOME</Button></Link> 
          </li>
          <li>
              <Link to="Signup">
                <Button style={{fontSize:15,color:'lightblue',fontWeight:"bold"}}>SIGNUP</Button>
              </Link>
          </li>
          <li>
          {user === null ? (
            <Link to="/Login" style={{ fontWeight: "bold", color: "black" }}>
              <Button
                id="basic-button"
                onClick={(e) => dispatch({ type: "LOGIN", payload: name })}
                sx={{ color: "lightblue", fontWeight: "bold", fontSize: 15 }}
              >
                Login
              </Button>{" "}
            </Link>
          ) : (
            <ul>
              <li>
                <Link to="/Login" style={{ fontWeight: "bold", color: "black" }}>
                  <Button
                    onClick={() => dispatch({ type: "LOGOUT" })}
                    style={{
                      fontWeight: "bold",
                      color: "lightblue",
                      fontSize: 15,
                      
                    }}
                  >
                    Logout
                  </Button>{" "}
                </Link>
              </li>
              <li>
                <p
                  style={{
                    color: "lightblue",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginTop:5
                  }}
                >
                  {name}
                </p>
              </li>
            </ul>)}
</li>
          {/* <li>
            <Link to="/Log" style={{ fontWeight: "bold", color: "black" }}>
          {user === null ? (
            <Button
              id="basic-button"
              onClick={() => dispatch({ type: "LOGIN", payload: "Teju" })}
              sx={{ fontSize:15,color:'brown',fontWeight:"bold"}}
            >
              Login
            </Button> 
         ) : (
            <> 
               <Button onClick={() => dispatch({ type: "LOGOUT" })} sx={{ fontSize:15,color:'brown',fontWeight:"bold"}}>
                Logout
              </Button>
              <p style={{  fontSize:15,color:'brown',fontWeight:"bold"}}>Teju</p> 
             </>
          )} 
      </Link>
        </li> */}
          
      </ul>
      </h4>
    </div>
  )
}

export default Navbar