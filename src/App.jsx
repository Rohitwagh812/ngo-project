// import { useState } from 'react'
import Logo from '../src/assets/Logo.png';
import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Home from './page/Home';

import Ngo from './page/Ngo';
import Photo from './page/Photo';
import Forgivess from '../src/assets/videos/Forgivess.mp4'
import U from '../src/assets/videos/U.mp4'
import Footer from './page/Footer';



function App() {

  return (
<div className="background-image">
     <div>
   <Navbar  className="main-navbar">
        <Navbar.Brand href="/">
        <img 
          className="d-inline-block align-bottom"
          width="70"
          height="70"
          alt=""
          src={Logo}  />{''}

          </Navbar.Brand>
           <Navbar.Collapse  className="justify-content-end align-items-center height-10rem" >
              <ListGroup horizontal>
                  <ListGroup.Item> HOME </ListGroup.Item>
                  <ListGroup.Item> ABOUT US </ListGroup.Item>
                  <ListGroup.Item> OUR NGO SERVICES </ListGroup.Item>
                  <ListGroup.Item> DONATIONS </ListGroup.Item>
                  <ListGroup.Item> GALLERY </ListGroup.Item>
                  <ListGroup.Item> SPONSRS </ListGroup.Item>
                  <ListGroup.Item> CONTACT US  </ListGroup.Item>
                  <ListGroup.Item> <Button className='button'>DONATE NOW</Button> </ListGroup.Item>
              </ListGroup>
         </Navbar.Collapse>
     </Navbar>


    
     </div>

     <Home/>

  <Ngo />

 <Photo/>
<div className='footer' style={{height:'70vh', 
backgroundColor:'#212121', display:'grid',
justifyContent:'center',
}}>

  <h1>
    STORIES OF IMPOCT
  </h1>

  <div className="video">
    
  <video  width="430" height="240" controls >
       <source src={Forgivess} type="video/mp4"/>
     </video>
     <video style={{marginLeft:'20px'}} width="430" height="240" controls >
      <source src={U} type="video/mp4"/>
     </video>
  </div>
</div>
<Footer/>
   </div>
   
  )
}

export default App
