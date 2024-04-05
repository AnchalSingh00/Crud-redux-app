import { useEffect } from 'react';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { patchusers } from '../Store/thunk/fetchusers';

function Edit() {

    

      let [singledata, setsingledata] = useState({})
      console.log(singledata);
      
 let userid = useParams()
 console.log(userid);

 let allusersdata = useSelector(state=>state.usersdata)
 console.log(allusersdata.data);
 
 useEffect(()=>{
    let singleuser = allusersdata.data?.find(ele=>ele.id==userid.id)
    console.log(singleuser);
           setsingledata(singleuser);

 },[])

      let handleChange = (e)=>{
        setsingledata(
          {... singledata,[e.target.name]:e.target.value}
        )
      }

      let dispatch = useDispatch()
      let  navigate = useNavigate()

let handlesubmit = (e)=>{
    e.preventDefault()
   console.log(singledata);
   dispatch(patchusers(singledata))
   navigate('/')
}


  return (
    <div>
    <h1 className='bg-primary w-25 mt-3 mx-auto text-center'>Edit DATA📝 </h1>
    <form onSubmit={handlesubmit}>
    <Form.Control 
    name='name'
    value={singledata && singledata.name}
    onChange={handleChange}
    className='my-4 w-50 m-auto' type="text" placeholder="NAME" />
    <Form.Control
      name='email'
      value={singledata && singledata.email}
      onChange={handleChange}
    className='my-4 w-50 m-auto' type="text" placeholder="EMAIL" />
    <Form.Control
      name='password'
      value={singledata && singledata.password}
      onChange={handleChange}
    className='my-4 w-50 m-auto' type="text" placeholder="PASSWORD" />
    <Form.Control 
      name='image'
      value={singledata && singledata.image}
      onChange={handleChange}
    className='my-4 w-50 m-auto' type="text" placeholder="IMAGE" />
  
      <Form.Control
        name='description'
        value={singledata && singledata.description}
        onChange={handleChange}
      className='my-4 w-75 m-auto'
        as="textarea"
        placeholder="Content for your blog"
        style={{ height: '100px' }}
      />

<button className='d-block w-75 m-auto btn btn-success' type='submit'>UPDATE BLOG</button>

    </form>
  </div>
  )
}

export default Edit