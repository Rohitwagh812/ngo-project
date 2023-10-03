import React from 'react'
import D from '../assets/D.png'
import G from '../assets/G.png'
import S from '../assets/S.png'
import Sa from '../assets/S.jpg'
import N from '../assets/N.png'
import R from '../assets/R.png'
import P from '../assets/P.png'
import Q from '../assets/Q.png'
// icons
import Linkedin from '../assets/Linkedin.png';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';
import Twitter from '../assets/Twitter.png';




function Photo() {
  return (
    <div className='photo'>
      
    <div className='photos'>
       <div className='photo-container'>
       <div style={{marginTop:'10rem'}} className="photo-heading">
            <h1 className='photo-heading-text' style={{textAlign:'center' }}>GALLERY</h1>
             <h2 className='photo-heading-text-two'  style={{textAlign:'center'}}>PHOTO GALLERY</h2>
        </div>
        <div className="images">
        <img src={D}
          height={180}
          width={230}
          alt="" />
          <img src={G}
          height={180}
          width={230}
          alt="" />
        <img src={S}
          height={180}
          width={230}
          alt="" />
          <img src={Sa}
          height={180}
          width={230}
          alt="" />
          <img src={N}
            height={180}
            width={230}
            alt="" />
            <img src={R}
            height={180}
            width={230}
            alt="" />
          <img src={P}
            height={180}
            width={230}
            alt="" />
            <img src={Q}
            height={180}
            width={230}
            alt="" />
        </div>

        <div className='bottom-data'>
      <div className="texts">
        <h1>
            CONNEOTUS
        </h1>
        <h2>
          FOLLOW OUR WORK BEHIND THE SCENES
        </h2>
      </div>
      <div className="icons">
        <img src={Instagram}
        width={70}
        height={70}
        alt="" />
        <img src={Twitter}
        width={70}
        height={70}
        alt="" />
        <img src={Linkedin}
        width={70}
        height={70}
        alt="" />
        <img src={Facebook}
        width={70}
        height={70}
        alt="" />
      </div>
    </div>
       </div>
       
    </div>
    
    
    </div>
  )
}

export default Photo