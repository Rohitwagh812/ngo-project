import React from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Mail from '../assets/Email.jpg'
import Phone from '../assets/Phone.jpg';
import Aocation from '../assets/Location.jpg'

import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div className='footer'>
      <div style={{display:'flex' ,justifyContent:'center' , alignItems:'center' }} className="top">
      <h1 style={{color:'#fff' ,fontSize:'2rem' , textAlign:'center' , marginBottom:'2rem'}}>HOW YOU CAN DO GOOD & MAKE A DIFFERENCE </h1>
      <Button className='btnt'>DONATE NOW</Button>
      </div>
      <div style={{textAlign:'center' , display:'grid' , 
      justifyContent:'center', borderBottom:'0.5px solid #9E9E9E',
      backgroundColor:'black',
      color:'#fff'
      }} className="bottom">
      <Navbar  className="botton-navbar">
        <Navbar.Brand href="/">
          </Navbar.Brand >
           <Navbar.Collapse  className="justify-content-end align-items-center height-10rem " >
              <ListGroup horizontal className='list-group-item-two'>
                  <ListGroup.Item> HOME </ListGroup.Item>
                  <ListGroup.Item> | </ListGroup.Item>
                  <ListGroup.Item> ABOUT US </ListGroup.Item>
                  <ListGroup.Item> | </ListGroup.Item>
                  <ListGroup.Item> OUR NGO SERVICES </ListGroup.Item>
                  <ListGroup.Item> | </ListGroup.Item>
                  <ListGroup.Item> DONATIONS </ListGroup.Item>
                  <ListGroup.Item> | </ListGroup.Item>
                  <ListGroup.Item> GALLERY </ListGroup.Item>
                  <ListGroup.Item> | </ListGroup.Item>
                  <ListGroup.Item> SPONSRS </ListGroup.Item>
                  <ListGroup.Item> | </ListGroup.Item>
                  <ListGroup.Item> CONTACT US  </ListGroup.Item>
              </ListGroup>
         </Navbar.Collapse>
     </Navbar>
      </div>

      <div style={{backgroundColor:'black', color:'#fff', height:'40vh', borderBottom:'1px solid grey', 
      display:'flex',
       justifyContent:'center',alignItems:'center',padding:'2rem'}} className="last">
<Card style={{ width: '18rem' }}>
      <Card.Body>
      <img src={Phone}
           height={40}
           width={40}
           alt="" />
           <p>+240782137059</p>
      </Card.Body>
    </Card>
<Card className='card-two' style={{ width: '18rem'}}>
      <Card.Body >
      <img src={Aocation}
           height={40}
           width={40}
           alt="" />
           <p> A1 NGO SERVICES</p>
           <span style={{fontSize:'0.8rem'}}>23WV+V33, KG7AVE ,KIGALI , RWANDA</span>
      </Card.Body>
    </Card>
<Card style={{ width: '18rem' }}>
      <Card.Body>
      <img src={Mail}
           height={40}
           width={40}
           alt="" />
           <p>+240782137059</p>
      </Card.Body>
    </Card>

      </div>
      <div  style={{height:'10vh', justifyContent:'center',
      fontSize:'0.8rem', 
      alignItems:'center', display:'flex', backgroundColor:'black'}} className="BrandDate">
         <p style={
            {
                textAlign:'center',
                color:'#9E9E9E',
                backgroundColor:'black',
                fontWeight:'100'
            }
         }>© 2022 A1 NGO SERVICES ALL RIGHTS RESEVED</p>
      </div>
    </div>
  )
}

export default Footer