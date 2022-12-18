import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {
  

    const  navigate =useNavigate();

  const [input,setInput] =useState({




    name:"",
    email:"",
    passowrd:""
  })





  const handlesubmit=(e)=>{


    e.preventDefault();

    localStorage.setItem("user",JSON.stringify(input));

  
   navigate("/login");



  }
    return (
    <div>



<div  className='container col-md-6  '>

<Form  onSubmit={handlesubmit}>
  <h1  style={{color:"teal",fontSize:"60px",wordSpacing:"40px"}}>       CREATE  AN   ACCOUNT </h1>
<Form.Group className="mb-3   " controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text"
          name="name"   style={{backgroundColor:"black",color:"white"}}
             value={input.name} 
               onChange={(e)=>setInput({


...input,
[e.target.name]:e.target.value,

        })}placeholder="Enter  your name" />
      
      </Form.Group>
      <Form.Group className="mb-3  " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control     style={{backgroundColor:"black",color:"white"}} type="email"    
        
        name="email" 
        value={input.email} 
          onChange={(e)=>setInput({


...input,
[e.target.name]:e.target.value, })}
        placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"   style={{backgroundColor:"black",color:"white"}}     
          
          name="password" 
          value={input.password} 
            onChange={(e)=>setInput({
  
  
  ...input,
  [e.target.name]:e.target.value, })}
        
        
        placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <span> ALready a have an account?</span>

        <Link  to="/login"       className='fw-bold  text-body'>
<u>     Login here</u>

        </Link>
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>


</div>



    </div>
  )
}
