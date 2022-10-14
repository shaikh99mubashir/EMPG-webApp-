import React from 'react'
import { Link } from "react-router-dom";
import Muifeedback from './Muifeedback'
const FeedBack = () => {
  return (
    <>
        <nav class="navbar p-0" style={{backgroundColor:'#ebebeb', alignItems:'center', justifyContent:'center'}}>
    <div class="container"  >
    <div className='d-flex'>
    <Link to='/dashboard' style={{color:'black',textDecoration:'none' }}>
    <p className='mt-1' style={{fontSize:12, fontWeight:400, cursor:'pointer',}}>Dashboard<i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10}}></i></p>
    </Link>
    <p className='mt-1' style={{fontSize:12, fontWeight:400,}} >FeedBack</p>
    </div>
    </div>
  </nav> 
  <center>
  <Muifeedback/>
  </center>
    </>
  )
}

export default FeedBack