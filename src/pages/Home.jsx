import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'
import { Link } from 'react-router-dom'


function Home() {
  //accessing state inorder to display content
  const allrestaurant = useSelector((state)=>state.restaurantSlice.allrestaurant)
  console.log(allrestaurant);
  const dispatch = useDispatch()

  useEffect(()=>{
    //called thunk function
       dispatch(fetchRestaurant())
  },[])

  return (
    <div className='container'>
      <Link to={'/Restiew'} style={{textDecoration:'none'}}>
  <Row >
    {allrestaurant?.length>0?
    allrestaurant.map((restaurant)=>(<Col sm={6} md={4} className='p-5'>
    <RestCard restaurant = {restaurant}/>
</Col>))
    :<p className='text-danger fs-4'>Nothing to display</p>
  }

        
    

  
   
  </Row>
  </Link>
  </div>
  )
}
export default Home