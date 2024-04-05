import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { postusers } from '../Store/thunk/fetchusers';
import { useNavigate } from 'react-router-dom';


function CreateData() {

let [data, setData] = useState({
  name:'Jay', password:'', email:'',description:'',image:''
})

let handleChnage = (e)=>{
  setData(
    {... data,[e.target.name]:e.target.value}
  )
}

let dispatch = useDispatch()

let navigate = useNavigate

let handlesubmit = (e)=>{
  e.preventDefault()
  // console.log('ok');
  console.log(data);
  dispatch(postusers(data))
  navigate('/') 
}

  return (
    <div >
      <h1 className='bg-primary w-25 mt-3 mx-auto text-center'>CREATE DATA📝 </h1>

      <form onSubmit={handlesubmit} className='border border-3 border-dark mx-auto rounded-3 mt-4' 
      style={{backgroundColor:'#b55921', boxShadow:'2px 2px 30px black', width:'600px'}}>

      <div className='my-3' >
      <label htmlFor="" className='fw-bold ms-5 my-2'> NAME :- </label>
      <Form.Control 
      name='name'
      value={data.name}
      onChange={handleChnage}
      className='w-75 m-auto d-inline-block ms-5' type="text" placeholder="NAME" />
      </div>

      <div className='my-3'>
      <label htmlFor="" className='fw-bold ms-5 my-2'> EMAIL :- </label>
      <Form.Control
        name='email'
        value={data.email}
        onChange={handleChnage}
        className='w-75 m-auto d-inline-block ms-5 my-2' type="text" placeholder="EMAIL" />
      </div>

      <div className='my-3'>
      <label htmlFor="" className='fw-bold ms-5'> Password :- </label>
      <Form.Control
        name='password'
        value={data.password}
        onChange={handleChnage}
        className='w-75 m-auto d-inline-block ms-5 my-2' type="text" placeholder="PASSWORD" />
      </div>

        <div className='my-3'>
        <label htmlFor="" className='fw-bold ms-5 my-2'> IMAGE :- </label>
      <Form.Control 
        name='image'
        value={data.image}
        onChange={handleChnage}
        className='w-75 m-auto d-inline-block ms-5' type="text" placeholder="IMAGE" />
      </div>

      <div className='my-3'>
       <label htmlFor="" className='fw-bold ms-5'> DESCRIPTION :- </label>
        <Form.Control
          name='description'
          value={data.description}
          onChange={handleChnage}
          className='w-75 m-auto d-inline-block ms-5 my-2'
          as="textarea"
          placeholder="Content for your blog"
          style={{ height: '100px' }}
        />
      </div>
 <button className='d-block w-75 m-auto btn btn-success my-4' type='submit'>CREATE BLOG</button>

      </form>
    </div>
  )
}

export default CreateData