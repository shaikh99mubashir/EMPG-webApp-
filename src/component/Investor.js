import React from 'react'
import slider3 from '../Images/slider3.jpg'
import { Link } from 'react-router-dom'
const Investor = () => {
  return (
    <div>
    <nav class="navbar p-0" style={{backgroundColor:'#ebebeb', alignItems:'center', justifyContent:'center'}}>
      <div class="container"  >
      <div className='d-flex'>
      <Link to='/' style={{color:'black',textDecoration:'none' }}>
      <p className='mt-1' style={{fontSize:12, fontWeight:400, cursor:'pointer',}}>Home<i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10}}></i></p>
      </Link>
      <p className='mt-1' style={{fontSize:12, fontWeight:400, borderBottom:"1px solid #8A909D"}} >Investor Relations</p>
      </div>
      </div>
    </nav> 

  <div id="carouselExampleSlidesOnly" className="carousel slide mt-0 mb-5" data-ride="carousel">
     <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block  w-100"  height='300' src={slider3} alt="First slide"/>
            </div>
        </div>
    </div>

    <div className='text-center mb-5'>
    <h2 style={{fontWeight:400, fontSize:'40px'}}>
    EMPG IS PRIVATELY OWNED AND MANAGED. GET IN TOUCH WITH YOUR QUESTIONS
    </h2>
    </div> 

    <div className="container">
      <div className="row mb-5">
        <div className="col-6">
          <p className='text-muted' style={{fontSize:15}}>EMPG is a privately owned group. If you have any questions about 
          <br/>EMPG’s financials, business activities, funding or related issues,<br/> please contact our Investor Relations team.</p>
        </div>
        <div className="col-6">
          <h4 style={{fontWeight:700}}>Contact Us</h4>
          <label className='text-muted mt-3' style={{fontWeight:700}}>Your Name *</label>
          <br />
          <input type="text"  style={{padding:"10px 250px 10px 10px",borderRadius:5, bordercolor:'#919191', outline:'none'}}/>
          <label className='text-muted mt-3' style={{fontWeight:700}}>Email Adress *</label>
          <br />
          <input type="text"  style={{padding:"10px 250px 10px 10px",borderRadius:5, bordercolor:'#919191', outline:'none'}}/>
          <br/>
          <label className='text-muted mt-3' style={{fontWeight:700}}>Subject *</label>
          <br />
          <input type="text"  style={{padding:"10px 250px 10px 10px",borderRadius:5, bordercolor:'#919191', outline:'none'}}/>
          
          <label className='text-muted mt-3' style={{fontWeight:700}}>Your Message *</label>
          <br />
          <input type="text"  style={{padding:"10px 250px 100px 10px",borderRadius:5, bordercolor:'#919191', outline:'none'}}/>
          
        </div>
      </div>
    </div> 
  </div>
  )
}

export default Investor
