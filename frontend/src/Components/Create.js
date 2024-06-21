import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
const Create = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState(0)
    console.log(name,age,email)
    const [error,setError]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const addUser={Name:name,email,Age:age}
        const response=await fetch("http://localhost:5000",{
                method:"POST",
                body:JSON.stringify(addUser),
                headers:{
                    "Content-Type":"application/json"
                }
                
        })
        const result=await response.json()
        if(!response.ok){
            console.log(result.error);
            setError(result.error)
        }
        if(response.ok){
            console.log(result)
            setError("")
            setAge(0)
            setEmail("")
            setName("")
        }

    }
        
    
  return (

    <Form onSubmit={handleSubmit}>
         <Alert varient="danger">
          {error}
        </Alert>
        <h1>Enter Data</h1>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Name
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Age
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="number" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)} />
      </Col>
    </Form.Group>


    <Form.Group as={Row} className="mb-3">
      <Col sm={{ span: 10, offset: 2 }}>
        <Button type="submit">Submit</Button>
      </Col>
    </Form.Group>
  </Form>
  )
}

export default Create
