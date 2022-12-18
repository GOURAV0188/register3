import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container  from "react-bootstrap/Container";
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
export default function Login() {
    const  navigate =useNavigate();
 
    const [input,setInput] =useState({





        email:"",
        passowrd:"",
      });

    


      function handlelogin (e)  {


e.preventDefault();

const loggeduser =JSON.parse(localStorage.getItem("user"));



if(input.email === loggeduser.email && input.passowrd ===   loggeduser.passowrd){


  localStorage.setItem("Loggedin",true)
  navigate("/");


}else{




    alert("  wrong email or password ");

}


      }
 
    return (
    <div>
        <Container>
        <div   style={{backgroundColor:"#91A979"}} className='container col-md-6  '>

<h1  style={{  color:"grey",fontSize:"60px"}}>  login</h1>
<Form  onSubmit={handlelogin}  >
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <Form.Label>Enter your email</Form.Label>
        <Form.Control type="email" 
        
        
        name="email" 
        value={input.email} 
          onChange={(e)=>setInput({


...input,
[e.target.name]:e.target.value, })}
        placeholder="Enter  your name" />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
        
        
        name="password" 
        value={input.password} 
          onChange={(e)=>setInput({


...input,
[e.target.name]:e.target.value, })}
      
        placeholder="Password" />
      </Form.Group>
     
      <Button variant="success" type="submit">
        Submit
      </Button>&nbsp;&nbsp;
<br />

      <span>Don't have an account?</span> 
      
      <Link to="/register"   className='fw-bold  text-body' >
      <u>Register here </u>
        
        </Link>
    </Form>


        </div>




        </Container>
        
    </div>
  )
}
