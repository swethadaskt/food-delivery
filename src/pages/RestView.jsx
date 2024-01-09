import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import RestReview from '../components/RestReview';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';





function RestView() {
  const [show, setShow] = useState(false);
  const {id} = useParams()
  console.log(id);

  const allRestaurant = useSelector((state)=>state. restaurantSlice.allrestaurant)
  console.log(allRestaurant);
  const selectedRestaurant =  allRestaurant.find(item=>item.id==id)
  console.log(selectedRestaurant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <Row>
     <Col md={1}></Col>
     <Col md={3}>
     <img className='rounded' width={'100%'} height={'500px'} src={selectedRestaurant.photograph} alt="no img" />
     </Col>
     <Col md={7} className='px-4'>
      <hr/>
      <h3 className='text-center'><span className='text-warning'>RESTAURANT</span>DETAILS</h3>
      <hr />
      <ListGroup>


      <ListGroup.Item className='p-4 text-center'><h4>{selectedRestaurant.name}</h4></ListGroup.Item>
      <ListGroup.Item>Neighborhood :{selectedRestaurant.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine_type :{selectedRestaurant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address :{selectedRestaurant.address}</ListGroup.Item>
      <ListGroup.Item className='text-center'>
        <button className='btn btn-warning ' onClick={handleShow}>Operating Hours</button>
       
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours </Modal.Title>
        </Modal.Header>
        <Modal.Body><ListGroup>
      <ListGroup.Item>Monday :{selectedRestaurant.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday :{selectedRestaurant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday :{selectedRestaurant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday :{selectedRestaurant.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday :{selectedRestaurant.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday :{selectedRestaurant.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday :{selectedRestaurant.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup></Modal.Body>
       
      </Modal>
      <RestReview review = {selectedRestaurant.reviews}/>
      </ListGroup.Item>
    </ListGroup>
    <hr />

     </Col>
     <Col md={1}></Col>
    </Row>
  )
}

export default RestView