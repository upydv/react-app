import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
const Read = () => { 
    const [data,setData]=useState("")
    const[error,setError]=useState("")
        async function getData(){
            const response=await fetch("http://localhost:5000")
            const result=await response.json()
            
            if(!response.ok){
                console.log(result.error);
                setError(result.error)
            }
            if(response.ok){
                console.log(result)
                setData(result)
            }
            
        }
        useEffect(()=>{
            getData()
        },[])
    console.log(data)

  return (
    <div className='container my-2'>
        <h2 className='text-center'>All Data</h2>
        <div className='row'>
            {data.map((ele)=>(
                <div key={ele._id} className='col-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{ele.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ele.email}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{ele.age}</Card.Subtitle>
    
                        <Card.Link href="#">Update</Card.Link>
                        <Card.Link href="#">delete</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            ))}
            
            
        </div>

        </div>
  )
}

export default Read
