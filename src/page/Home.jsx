import { Button } from 'react-bootstrap'
import React from 'react'
function Home() {
  return (
    <div className='Home-page' >

    <div style={{display: 'flex'}}>
        <h1 className='head'><span className='do'> DO GOOD</span> INITIATIVE PROJECTS</h1>
        </div>
       <div className='headings'>
       <h6 className='heading-tag' style={{
          margin:'1rem 0 0 0',
          fontWeight:'100'
        }}>CULTIVATING FLOURISHING COMMUNITIES</h6>

<Button className='button-connect' > CONNECT WITH US </Button>
       </div>
    </div>   
     
  
   
    
  )
}

export default Home