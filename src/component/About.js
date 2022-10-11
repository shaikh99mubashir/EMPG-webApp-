import React from 'react'
import { Link} from 'react-router-dom'
import slider2 from '../Images/slider2.jpg'
import personimg from '../Images/personimg.png'
import Modal from './Modal'
const About = () => {

  return (
    <div>
      <nav class="navbar p-0" style={{backgroundColor:'#ebebeb', alignItems:'center', justifyContent:'center'}}>
      <div class="container"  >
      <div className='d-flex'>
      <Link to='/' style={{color:'black',textDecoration:'none' }}>
      <p className='mt-1' style={{fontSize:12, fontWeight:400, cursor:'pointer',}}>Home<i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10}}></i></p>
      </Link>
      <p className='mt-1' style={{fontSize:12, fontWeight:400,}} >About</p>
      </div>
      </div>
    </nav>

    <div id="carouselExampleSlidesOnly" className="carousel slide mt-0 mb-5" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block  w-100"  height='300' src={slider2} alt="First slide"/>
            </div>
        </div>
    </div>

    <div className='text-center mb-5'>
    <h2 style={{fontWeight:400, fontSize:'40px'}}>
    EMPG IS LED BY A TEAM OF SPIRITED ENTREPRENEURS WITH A TRACK RECORD OF SUCCESS
    </h2>
    </div>

    <div className="container " >
     <div className="row mb-5" style={{gap:100}}>
          <div class="card" style={{width: '18rem', border:'none', }}>
            <img src={personimg} class="card-img-top rounded-circle" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Imran Ali Khan</h5>
            <h6 class="card-subtitle mb-2 text-muted">CEO, EMPG</h6>
            <h6 class="card-subtitle mb-2 text-muted">Board member</h6>
            <p class="card-text">Imran Ali Khan is the CEO of EMPG. Before stepping into the digital classifieds industry, Imran worked for such prestigious organizations</p>
            <Modal/>
          </div>
          </div>
          <div class="card" style={{width: '18rem', border:'none'}}>
            <img src={personimg} class="card-img-top rounded-circle" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Imran Ali Khan</h5>
            <h6 class="card-subtitle mb-2 text-muted">CEO, EMPG</h6>
            <h6 class="card-subtitle mb-2 text-muted">Board member</h6>
            <p class="card-text">Imran Ali Khan is the CEO of EMPG. Before stepping into the digital classifieds industry, Imran worked for such prestigious organizations</p>
            <Modal/>
          </div>
          </div>
          <div class="card" style={{width: '18rem', border:'none'}}>
            <img src={personimg} class="card-img-top rounded-circle" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Imran Ali Khan</h5>
            <h6 class="card-subtitle mb-2 text-muted">CEO, EMPG</h6>
            <h6 class="card-subtitle mb-2 text-muted">Board member</h6>
            <p class="card-text">Imran Ali Khan is the CEO of EMPG. Before stepping into the digital classifieds industry, Imran worked for such prestigious organizations</p>
            <Modal/>
          </div>
          </div>

    </div>
     <div className="row mb-5" style={{gap:100}}>
          <div class="card" style={{width: '18rem', border:'none', }}>
            <img src={personimg} class="card-img-top rounded-circle" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Imran Ali Khan</h5>
            <h6 class="card-subtitle mb-2 text-muted">CEO, EMPG</h6>
            <h6 class="card-subtitle mb-2 text-muted">Board member</h6>
            <p class="card-text">Imran Ali Khan is the CEO of EMPG. Before stepping into the digital classifieds industry, Imran worked for such prestigious organizations</p>
            <Modal/>
          </div>
          </div>
          <div class="card" style={{width: '18rem', border:'none'}}>
            <img src={personimg} class="card-img-top rounded-circle" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Imran Ali Khan</h5>
            <h6 class="card-subtitle mb-2 text-muted">CEO, EMPG</h6>
            <h6 class="card-subtitle mb-2 text-muted">Board member</h6>
            <p class="card-text">Imran Ali Khan is the CEO of EMPG. Before stepping into the digital classifieds industry, Imran worked for such prestigious organizations</p>
            <Modal/>
          </div>
          </div>
          <div class="card" style={{width: '18rem', border:'none'}}>
            <img src={personimg} class="card-img-top rounded-circle" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Imran Ali Khan</h5>
            <h6 class="card-subtitle mb-2 text-muted">CEO, EMPG</h6>
            <h6 class="card-subtitle mb-2 text-muted">Board member</h6>
            <p class="card-text">Imran Ali Khan is the CEO of EMPG. Before stepping into the digital classifieds industry, Imran worked for such prestigious organizations</p>
            <Modal/>
          </div>
          </div>

    </div>
     <div className="row mb-5" style={{gap:100}}>
          <div class="card" style={{width: '18rem', border:'none', }}>
            <img src={personimg} class="card-img-top rounded-circle" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Imran Ali Khan</h5>
            <h6 class="card-subtitle mb-2 text-muted">CEO, EMPG</h6>
            <h6 class="card-subtitle mb-2 text-muted">Board member</h6>
            <p class="card-text">Imran Ali Khan is the CEO of EMPG. Before stepping into the digital classifieds industry, Imran worked for such prestigious organizations</p>
            <Modal/>
          </div>
          </div>
          <div class="card" style={{width: '18rem', border:'none'}}>
            <img src={personimg} class="card-img-top rounded-circle" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Imran Ali Khan</h5>
            <h6 class="card-subtitle mb-2 text-muted">CEO, EMPG</h6>
            <h6 class="card-subtitle mb-2 text-muted">Board member</h6>
            <p class="card-text">Imran Ali Khan is the CEO of EMPG. Before stepping into the digital classifieds industry, Imran worked for such prestigious organizations</p>
            <Modal/>
          </div>
          </div>
          <div class="card" style={{width: '18rem', border:'none'}}>
            <img src={personimg} class="card-img-top rounded-circle" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Imran Ali Khan</h5>
            <h6 class="card-subtitle mb-2 text-muted">CEO, EMPG</h6>
            <h6 class="card-subtitle mb-2 text-muted">Board member</h6>
            <p class="card-text">Imran Ali Khan is the CEO of EMPG. Before stepping into the digital classifieds industry, Imran worked for such prestigious organizations</p>
            <Modal/>
          </div>
          </div>

    </div>
    </div>

    </div>
  )
}

export default About
