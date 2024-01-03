import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
<div className='d-flex justify-content-center align-items-center w-100 bg-secondary flex-column'>
      <div className='footer d-flex align-items-center justify-content-evenly w-100'>
        <div className='websites' style={{width:'400px'}}>
          <h4><i className="fa-solid fa-video fa-beat me-3 text-warning">Cheff Food</i>{' '}</h4>

          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste aspernatur voluptas asperiores laudantium sequi illum rerum dolor quos, modi ratione, magnam temporibus nisi reiciendis iure iusto! Molestias, facere suscipit.</h6>
          <h6></h6>
        </div>
        
        <div className='links d-flex flex-column'>
          <h4>Links</h4>
          <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>RestaurantView</Link>

        </div>

        <div className="guides d-flex flex-column">
          <h4 className='mb-3'>Guides</h4>
          <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
        </div>

        <div className="contacts">
          <h4 className='mb-3'>Contact Us</h4>
          <div className='d-flex mb-3'>
            <input type="text" className='form-control' placeholder='Enter your Email ID'/>
            <button className='btn btn-warning ms-3'>Subscribe</button>
          </div>

          <div className='d-flex justify-content-evenly align-items-center'>
            <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
            <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
            <Link to={'https://bootswatch.com'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>

      </div>
            <p className='mt-5'>Copyright © 2023 Restaurant. Built with React.</p>

    </div>
  )
}

export default Footer