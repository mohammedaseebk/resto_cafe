import React from 'react'
import { Row , Col } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from'react-redux'
import { fetchRestaurant } from '../redux/restSlice'

function Home() {
  const {allRestaurant, loading,error }= useSelector((state)=>state.restSlice)
  console.log(allRestaurant);
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRestaurant())
  },[])

  return (
    <Row>
      <div className='mt-3'>
      {
        loading &&
        <p>Loading....</p>
      }
      </div>
      
       {allRestaurant?.length>0?
       allRestaurant?.map((restaurant)=>(<Col className='px-5 py-3' sm={6} md={4}>
       <RestCard restaurant={restaurant}/>
               </Col>))
               : <p className='text-danger fw-bolder'>No Restaurant Available</p>
       
        
        }
    </Row>
  )
}

export default Home