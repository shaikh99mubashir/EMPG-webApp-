import React from 'react'
import { Link } from 'react-router-dom'
import slider4 from '../Images/slider4.jpg'
const inTouch = () => {
  return (
    <div>
  <div id="carouselExampleSlidesOnly" className="carousel slide mt-0" data-ride="carousel">
     <div className="carousel-inner">
            <img className="d-block  w-100"  height='300' src={slider4} alt="First slide"/>
      </div> 
  </div>
    <nav class="navbar p-0" style={{backgroundColor:'#ebebeb', alignItems:'center', justifyContent:'center'}}>
      <div class="container"  >
      <div className='d-flex'>
      <Link to='/' style={{color:'black',textDecoration:'none' }}>
      <p className='mt-1' style={{fontSize:12, fontWeight:400, cursor:'pointer',}}>Home<i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10}}></i></p>
      </Link>
      <p className='mt-1' style={{fontSize:12, fontWeight:400,}} >Get In Touch</p>
      </div>
      </div>
    </nav> 

    <div className='text-center mt-5 mb-5'>
    <h2 style={{fontWeight:400, fontSize:'40px'}}>
    WANT TO GET IN TOUCH?
    </h2>
    </div> 

    <div className="container">
      <div className="row mb-3">
        <div className="col-6 d-flex">
        <div>
        <i class="fa fa-send-o pe-4 mt-2" style={{fontSize:36, color:'grey'}}></i>
        </div>
        <div>
          <h2 style={{fontSize:15, fontWeight:700}}>CORPORATE HEADQUARTERS</h2>
        <p className='text-muted' style={{fontSize:15}}>
        Gate Village Building 10<br/>
        Office 26 , Level 3<br/>
        Dubai International Financial Center,<br/>
        United Arab Emirates
        </p>
        </div>
        </div>
        <div className="col-6">
        <div className='d-flex' style={{gap:10}}>
          <input type="text" placeholder='Name *' style={{padding:"10px 75px 10px 10px",borderRadius:5, borderColor:'#919191 ', outline:'none'}}/>
          <input type="text" placeholder='Email *'  style={{padding:"10px 75px 10px 10px",borderRadius:5, borderColor:'#919191', outline:'none'}}/>
        </div>
        <br />
          <input type="text" placeholder='Subject *'  style={{padding:"10px 355px 10px 10px",borderRadius:5, borderColor:'#919191', outline:'none'}}/>
        <br />
        <br />
          <input type="text" placeholder='Message *'  style={{padding:"10px 355px 100px 10px",borderRadius:5, borderColor:'#919191', outline:'none'}}/>
        <br/>
        <br/>
        <button className='px-5 py-2' style={{color:'white', border:'none', outline:'none', backgroundColor:'#919191'}}>Submit</button>
        </div>
      </div>
    </div> 
  </div>
  )
}

export default inTouch
