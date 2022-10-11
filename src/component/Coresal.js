import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import olx from '../Images/OLX.png'
import ke from '../Images/Kaidee.png'
const Coresal = () => {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item>
      <div style={{ display:'flex',justifyContent:'center',alignItems:'center', gap:20}}>
      <div className="card" style={{width: '25rem'}}>
        <img className="card-img-top" src={ke} alt="Cardimagecap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      <div className="card" style={{width: '25rem'}}>
        <img className="card-img-top" src={olx} alt="Cardimagecap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      <div className="card" style={{width: '25rem'}}>
        <img className="card-img-top" src={ke} alt="Cardimagecap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{ display:'flex',justifyContent:'center',alignItems:'center', gap:20}}>
      <div className="card" style={{width: '25rem'}}>
        <img className="card-img-top" src={olx} alt="Cardimagecap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      <div className="card" style={{width: '25rem'}}>
        <img className="card-img-top" src={ke} alt="Cardimagecap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      <div className="card" style={{width: '25rem'}}>
        <img className="card-img-top" src={olx} alt="Cardimagecap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      </div>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='container' style={{ display:'flex',justifyContent:'flex-start',alignItems:'center', gap:20}}>
      <div className="card" style={{width: '25rem'}}>
        <img className="card-img-top" src={ke} alt="Cardimagecap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      <div className="card" style={{width: '25rem'}}>
        <img className="card-img-top" src={olx} alt="Cardimagecap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Coresal
