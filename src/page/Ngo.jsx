import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ngoa from '../assets/Ngo.jpg'
import Button from 'react-bootstrap/Button';
import Food from '../assets/Food.jpg'
import Watar from '../assets/Water.jpg'


function Ngo() {
  return (
    <div className='ngo-home'>

        <h1 className='h1-1'>A1 NGO SECVICES</h1>
        <h2>VISION & MISSION</h2>

        <p>  
              Our Collaborative Trade Model Takes Direct & Fair Trade One Step Furher.
              Coffee Is An Opportunity TO Do Good. & Doing means We Get To Support
              Communities To Make poitie Chage.
            
        </p>
        <p>
              Since 2007, Land of a Thousand Hills Coffee has worked with farmers in Rwanda 
              as co-laborers creating a better future through coffee. We build flourishing 
              communities through holistic solutions, seeking to meet social, economic, and 
              spiritual needs in the most sustainable way possible with each Do Good Initiative
              Project developed and run by local leadership.
        </p>

          <div>
            <div>
                <h1 className='ngo-svs'>NGO SERVICES</h1>
            </div>
            <div className="bottom">
                <h1>OUR NGO SERVICES</h1>
            </div>
          </div>


          <div className='doo' style={{backgroundColor:'black'}}></div>
          <div>
          <Carousel  style={{width:'100%'}}>
          <Carousel.Item>
      
      <Row>
    
        <Col > 
      <div className='ngo-img'>
        <img
        className="d-inline-block align-top"
         height={400}
         width={290}
        src={Ngoa} alt="" />
        <h1>
          DO GOOD HEALTH
        </h1>
        <p  style={{width:'50%', textAlign:'center'}}>Approved by the Rwandan Ministry 
        of Health, this project supports building a Community Health Clinic</p>

        <Button className='more-button' style={{marginLeft:'5rem'}}> Learn More</Button>
      </div>
      </Col>
      </Row>
    </Carousel.Item>
    <Carousel.Item>
      
      <Row>
    
        <Col > 
      <div className='ngo-img'>
        <img
        className="d-inline-block align-top"
         height={400}
         width={290}
        src={Food} alt="" />
        <h1>
        FOOD FOR FARMERS
        </h1>
        <p  style={{width:'50%', textAlign:'center'}}>During the pandemic, food insecurity rose amongst 
                    coffee farmers since they couldn't go to work due to travel restrictions.</p>

        <Button className='more-button' style={{marginLeft:'5rem'}}> Learn More</Button>
      </div>
      </Col>
      </Row>
    </Carousel.Item>
    <Carousel.Item>
      
      <Row>
    
        <Col > 
      <div className='ngo-img'>
        <img
        className="d-inline-block align-top"
         height={400}
         width={290}
        src={Watar} alt="" />
        <h1>
        EVERGREEN WATER
        </h1>
        <p  style={{width:'50%', textAlign:'center'}}>This ongoing campaign ensures that all
             of the communities we partner with have easy access to clean water.</p>

        <Button className='more-button' style={{marginLeft:'5rem'}}> Learn More</Button>
      </div>
      </Col>
      </Row>
    </Carousel.Item>
    </Carousel>
          </div>
    </div>
  )
}

export default Ngo