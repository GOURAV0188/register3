import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';
export default function Home() {

const navigate =useNavigate();
  const userName =JSON.parse(localStorage.getItem("user"))
  
  
  const handlelogout =() =>{


          localStorage.removeItem("loggedin");
navigate('/login');






  }
  
  return (
    <div   className='container'>
<div   className='container   col-md-6'>

 <h1>welcome to home page </h1>

        <Card    className='text-center' style = {{ backgroundColor:"#965454",width: '50rem',height:'30rem' }}>
      <Card.Body>
        <Card.Title>WELCOME  TO HOMEPAGE</Card.Title>
        <Card.Text>
            <p>   welcome : {userName.name}</p>
        </Card.Text>
        <Button    variant="danger"
        onClick={handlelogout} >LOGOUT</Button>
      </Card.Body>
    </Card>

</div>
            </div>
  )
}
