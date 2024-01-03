import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restSlice';

function Header() {
  const dispatch =useDispatch()
  return (
    <Navbar className="bg-secondary">
    <Container>
      <Navbar.Brand href="#home" className='d-flex'>
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-food-restaurant-logo-editable-design-template-949091af7f6dc8b1fc80d8669faab4d6_screen.jpg?ts=1619030187" alt="" width="50" className="d-inline-block align-top"/>
       <Link to={'/'} /* / indicate base url */style={{textDecoration:'none',color:'white',fontSize:'30px'}}>
       <i class="fa-sharp fa-solid fa-video fa-beat me-3 text-warning"></i> {' '}
        Cheff Food
        </Link>
        
      </Navbar.Brand>
      <input onChange={(e)=> dispatch(search(e.target.value))} className='form-control w-25' type="text" placeholder='search by neighbourhood' />
    </Container>
  </Navbar>
  )
}

export default Header