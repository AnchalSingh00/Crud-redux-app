import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteusers, getusers } from '../Store/thunk/fetchusers'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Preview from './Preview';

function AllData() {


// for preview 
let[show,setshow] = useState(false)
let[previewdata,setpreviewdata]=useState(null)

let alldata = useSelector(state=>state.usersdata)
console.log(alldata);

let dispatch = useDispatch()

let navigate = useNavigate()

useEffect(()=>{
dispatch(getusers()) 
},[])

let handleDeleteUser =(para)=>{
  dispatch(deleteusers(para))
console.log(para);
}

let handlePreview = (para) =>{
console.log(para);
setshow(true)
setpreviewdata(para)
}

  return (
    
  <>
  {
    show ?
    <Preview previewdata={previewdata} setshow={setshow}/>
    :
    <div className='d-flex justify-content-center my-4 align-item-center justify-content-around flex-row d-inline block flex-wrap'>

    {
      
alldata.data && alldata.data.map(ele=>{
let descrip = ele.description.slice(0,60)+'.......'
return     <Card key={ele.id} className='my-4' style={{ width: '18rem' }}>
<Card.Img style={{height:'150px'}} variant="top" src={ele.image} />
<Card.Body>
  <Card.Title>{ele.name}</Card.Title>
  <h4>{ele.email}</h4>
  <Card.Text>
  {descrip}
  </Card.Text>
  <Button 
  onClick={()=>handlePreview(ele)}
  className='ms-2' variant="warning">Preview</Button>
  <Button 
  onClick={()=>navigate(`/user/${ele.id}`)}
  className='ms-2' variant="info">Edit</Button>
  <Button 
  onClick={()=>handleDeleteUser(ele)}
  className='ms-2' variant="danger">Delete</Button>
</Card.Body>
</Card>
// ***********************


})
    }

  </div>
  

  
  }
  </>
  )
}

export default AllData