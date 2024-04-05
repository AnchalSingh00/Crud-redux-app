import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Preview({setshow, previewdata}) {
  return (
    <div>
        <h1 className='mt-3 text-light fw-bold mx-5'>Preview Component🔍</h1>
        <Card style={{ width: '50rem' }} className='mx-auto mt-4'>
      <Card.Img style={{height:'250px'}} variant="top" src={previewdata.image} />
      <Card.Body>
        <Card.Title className='fw-bold text-center fs-2 ' >{previewdata.name}</Card.Title>
        <Card.Title className='fw-bold fs-75' >{previewdata.email}</Card.Title>
        <Card.Text>
          {previewdata.description}
        </Card.Text>
        <Button 
        onClick={()=>setshow(false)}
        variant="warning" className='fw-bold text-dark w-50 mx-auto ms-0'>Close</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Preview