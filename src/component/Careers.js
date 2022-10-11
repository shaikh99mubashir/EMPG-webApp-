import React from 'react'
import { Link } from 'react-router-dom'
import slider4 from '../Images/slider4.jpg'
const Careers = () => {
  return (
    <div>
    <nav class="navbar p-0" style={{backgroundColor:'#ebebeb', alignItems:'center', justifyContent:'center'}}>
      <div class="container"  >
      <div className='d-flex'>
      <Link to='/' style={{color:'black',textDecoration:'none' }}>
      <p className='mt-1' style={{fontSize:12, fontWeight:400, cursor:'pointer',}}>Home<i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10}}></i></p>
      </Link>
      <p className='mt-1' style={{fontSize:12, fontWeight:400,}} >Careers</p>
      </div>
      </div>
    </nav> 
  <div id="carouselExampleSlidesOnly" className="carousel slide mt-0 mb-5" data-ride="carousel">
     <div className="carousel-inner">
            <img className="d-block  w-100"  height='300' src={slider4} alt="First slide"/>
      </div> 
  </div>

    <div className='text-center mb-5'>
    <h2 style={{fontWeight:400, fontSize:'40px'}}>
    LOOKING FOR A CAREER AT EMPG?<br/>
    JOIN OUR GROWING TEAM OF LEADERS!
    </h2>
    </div> 

    <div className="container">
      <div className="row mb-5">
        <div className="col-6">
          <p className='text-muted' style={{fontSize:15}}>EMPG is a multinational operation built on people that are plugged <br/> in, hungry for innovation, and live outside the box.<br/>
Our team consists of a diverse set of individuals who have the right<br/> kind of tenacity and drive – because we believe that skills can be <br/>taught, but the attitude is something you bring to the job. EMPG’s <br/>people know how to stay curious, unlock their potential along with<br/> that of their teams, and become catalysts for success.
<br/>
<br/>
We are looking for people that know how to challenge the known,<br/> and create wonders out of the unknown. People who know how to<br/> push the boundaries, but have fun as they reach new heights.<br/> We empower people today, so they can make solutions that<br/>empower others tomorrow.
<br/>
<br/>
Does this sound like you?
<br/>
<br/>
If it does, please go ahead and explore available opportunities in our <br/>regions.</p>
        </div>
        <div className="col-6">
        <div className="row">
          <div className="col-6">
            <h4 className='mb-0'>UAE</h4>
            <p className='text-muted'>Bayut | Dubbizzle</p>
            <br/>
            <h4 className='mb-0'>Pakistan</h4>
            <p className='text-muted'>Zameen.com<br/>
            OLX<br/>
            EmpgLabs</p>
            <br/>
            <h4 className='mb-0'>Thailand</h4>
            <p className='text-muted'>Kaidee</p>
            <br/>
            <h4 className='mb-0'>Egypt</h4>
            <p className='text-muted'>OLX</p>
          </div>
          <div className="col-6">
          <h4 className='mb-0'>Romania</h4>
            <p className='text-muted'>SectorLabs</p>
            <br/>
            <h4 className='mb-0'>Indonesia</h4>
            <p className='text-muted'>Lamudi</p>
            <br/>
            <h4 className='mb-0'>Phillipines</h4>
            <p className='text-muted'>Lamudi</p>
            <br/>
            <h4 className='mb-0'>Mexico</h4>
            <p className='text-muted'>Lamudi</p>
          </div>
        </div>
        </div>
      </div>
    </div> 
  </div>
  )
}

export default Careers
