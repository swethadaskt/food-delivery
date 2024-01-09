import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';
function Header() {
  const dispatch = useDispatch()
  return (
    <Navbar variant='dark' className='p-3'>
    <Container>
      <Navbar.Brand href="" className='d-flex'>
        <img
          alt=""
          src="https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg"
          width="55"
          height="55"
          className="d-inline-block align-top rounded"
        />{' '}
       <h4 className='ms-4 mt-3' style={{color:'white'}} > <span className='text-warning'>Food</span> Circle</h4> 
      </Navbar.Brand>
      <input onChange={(e)=>dispatch(search(e.target.value))} type="text" placeholder='Enter Neighbourhood' className='form-control w-25'/>
    </Container>
  </Navbar>
  )
}

export default Header